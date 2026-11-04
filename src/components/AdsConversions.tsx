"use client";

import { useEffect } from "react";
import {
  ADS_CONVERSION_SEND_TO,
  FORM_CONVERSION_PARAM,
  FORM_CONVERSION_VALUE,
  classifyOutboundHref,
  isConfiguredSendTo,
  type AdsConversionAction,
} from "@/lib/ads-conversions";

let formThankYouPending = false;

const NAV_TIMEOUT_MS = 2000;

type ConversionParams = {
  send_to: string;
  event_callback?: () => void;
  event_timeout?: number;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event",
      name: "conversion",
      params: ConversionParams,
    ) => void;
  }
}

function sendConversion(action: AdsConversionAction, onSent?: () => void) {
  const sendTo = ADS_CONVERSION_SEND_TO[action];
  if (!isConfiguredSendTo(sendTo) || typeof window.gtag !== "function") {
    return false;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
    ...(onSent
      ? { event_callback: onSent, event_timeout: NAV_TIMEOUT_MS }
      : {}),
  });
  return true;
}

function whenGtagReady(run: () => void, giveUpMs: number) {
  if (typeof window.gtag === "function") {
    run();
    return () => {};
  }

  const started = Date.now();
  const timer = window.setInterval(() => {
    if (typeof window.gtag === "function") {
      window.clearInterval(timer);
      run();
    } else if (Date.now() - started >= giveUpMs) {
      window.clearInterval(timer);
    }
  }, 50);

  return () => window.clearInterval(timer);
}

function opensWithoutLeaving(anchor: HTMLAnchorElement, event: MouseEvent) {
  return (
    anchor.target === "_blank" ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  );
}

function trackOutboundClick(anchor: HTMLAnchorElement, event: MouseEvent) {
  const action = classifyOutboundHref(anchor.href);
  if (!action || !isConfiguredSendTo(ADS_CONVERSION_SEND_TO[action])) return;

  if (opensWithoutLeaving(anchor, event)) {
    whenGtagReady(() => {
      sendConversion(action);
    }, 5000);
    return;
  }

  event.preventDefault();
  let left = false;
  const go = () => {
    if (left) return;
    left = true;
    window.location.href = anchor.href;
  };
  const deadline = window.setTimeout(go, NAV_TIMEOUT_MS);
  const stopWaiting = whenGtagReady(() => {
    const sent = sendConversion(action, () => {
      window.clearTimeout(deadline);
      go();
    });
    if (!sent) go();
  }, NAV_TIMEOUT_MS);

  window.setTimeout(stopWaiting, NAV_TIMEOUT_MS);
}

export default function AdsConversions() {
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get(FORM_CONVERSION_PARAM) === FORM_CONVERSION_VALUE) {
      formThankYouPending = true;
      url.searchParams.delete(FORM_CONVERSION_PARAM);
      const next = `${url.pathname}${url.search}${url.hash}`;
      window.history.replaceState(window.history.state, "", next);
    }

    if (!formThankYouPending) return;
    if (!isConfiguredSendTo(ADS_CONVERSION_SEND_TO.form)) {
      formThankYouPending = false;
      return;
    }

    return whenGtagReady(() => {
      if (!formThankYouPending) return;
      sendConversion("form");
      formThankYouPending = false;
    }, 5000);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      trackOutboundClick(anchor, event);
    };

    const onAuxClick = (event: MouseEvent) => {
      if (event.button !== 1 || !(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const action = classifyOutboundHref(anchor.href);
      if (!action || !isConfiguredSendTo(ADS_CONVERSION_SEND_TO[action])) return;
      whenGtagReady(() => {
        sendConversion(action);
      }, 5000);
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("auxclick", onAuxClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("auxclick", onAuxClick, true);
    };
  }, []);

  return null;
}
