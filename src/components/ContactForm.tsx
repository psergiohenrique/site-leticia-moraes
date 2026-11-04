"use client";

import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";
import {
  CONTACT_QUESTIONS,
  findInvalidAnswer,
  type ContactAnswers,
} from "../lib/contact-form";
import { posthogLog } from "../lib/posthog-logs";

const WHATSAPP_NUMBER = "5519981037808";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const posthogEnabled = () =>
  Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
  );

function trackConversion() {
  const sendTo = process.env.NEXT_PUBLIC_GADS_CONVERSION_SEND_TO;
  if (sendTo && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { form: "contato" });
  }
  if (posthogEnabled()) {
    posthog.capture("contact_form_submitted");
    posthogLog.info("contact form submitted", { form: "contato" });
  }
}

function whatsappUrl(answers: ContactAnswers) {
  const msg = [
    `Olá Letícia! Me chamo *${answers.nome}* e acabei de enviar a solicitação de projeto pelo site.`,
    ``,
    `🏠 *Tipo:* ${answers.tipo}`,
    `📐 *Metragem:* ${answers.metragem}`,
    `📍 *Local:* ${answers.localizacao}`,
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const Arrow = () => (
  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
    <path
      d="M0 5h12M8 1l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ContactAnswers>({});
  // Para perguntas de escolha com "Outro": guarda se o "Outro" está selecionado.
  const [otherSelected, setOtherSelected] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [honeypot, setHoneypot] = useState("");
  const startedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const mountedRef = useRef(false);

  const total = CONTACT_QUESTIONS.length;
  const question = CONTACT_QUESTIONS[step];
  const isLast = step === total - 1;
  const value = answers[question.id] ?? "";

  useEffect(() => {
    // Não rouba o foco no carregamento da página, só ao navegar entre etapas.
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    inputRef.current?.focus({ preventScroll: true });
  }, [step]);

  const setValue = (v: string) => {
    if (!startedRef.current) {
      startedRef.current = true;
      if (posthogEnabled()) posthog.capture("contact_form_started");
    }
    setError(null);
    setAnswers((prev) => ({ ...prev, [question.id]: v }));
  };

  const validateCurrent = (current = value): string | null => {
    const v = current.trim();
    if (question.required && !v) return "Esta resposta é obrigatória.";
    if (question.type === "tel" && v && v.replace(/\D/g, "").length < 10)
      return "Informe um número com DDD.";
    return null;
  };

  const submit = async (finalAnswers: ContactAnswers) => {
    const invalid = findInvalidAnswer(finalAnswers);
    if (invalid) {
      setStep(CONTACT_QUESTIONS.findIndex((q) => q.id === invalid));
      setError("Revise esta resposta.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: finalAnswers, website: honeypot }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      trackConversion();
      setStatus("sent");
    } catch {
      setStatus("idle");
      setError(
        "Não foi possível enviar agora. Tente novamente ou fale comigo pelo WhatsApp."
      );
    }
  };

  const next = (current = value) => {
    const err = validateCurrent(current);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    if (isLast) {
      void submit({ ...answers, [question.id]: current });
    } else {
      // Valor absoluto (não funcional) para que cliques duplos não pulem etapas.
      setStep(step + 1);
    }
  };

  const back = () => {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  };

  const chooseOption = (option: string) => {
    setOtherSelected((prev) => ({ ...prev, [question.id]: false }));
    setValue(option);
    // Avança automaticamente ao escolher uma opção.
    window.setTimeout(() => next(option), 180);
  };

  const chooseOther = () => {
    setOtherSelected((prev) => ({ ...prev, [question.id]: true }));
    if (question.options?.includes(value)) setValue("");
  };

  if (status === "sent") {
    return (
      <div className="form-sent" role="status">
        <div className="leaf-icon" />
        <b>Obrigada!</b>
        <p>Recebi sua solicitação. Logo entrarei em contato com você!</p>
        <a
          className="form-sent-whats"
          href={whatsappUrl(answers)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (posthogEnabled())
              posthog.capture("social_contact_clicked", { channel: "whatsapp", placement: "form_thankyou" });
          }}
        >
          Continuar pelo WhatsApp <Arrow />
        </a>
      </div>
    );
  }

  const isOther =
    question.allowOther &&
    (otherSelected[question.id] ||
      (value !== "" && !question.options?.includes(value)));

  return (
    <form
      className="contact-form step-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
    >
      <div className="step-progress" aria-hidden="true">
        <span style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>
      <p className="step-count">
        {step + 1} / {total}
      </p>

      {/* Honeypot anti-spam: invisível para pessoas. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <fieldset className="step" key={question.id}>
        <legend>
          {question.label}
          {question.required && <span className="req"> *</span>}
        </legend>
        {question.description && <p className="step-desc">{question.description}</p>}

        {question.type === "radio" ? (
          <div className="step-options" role="radiogroup">
            {question.options?.map((opt, i) => (
              <button
                type="button"
                key={opt}
                role="radio"
                aria-checked={value === opt && !isOther}
                className={value === opt && !isOther ? "selected" : ""}
                onClick={() => chooseOption(opt)}
              >
                <span className="key">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            ))}
            {question.allowOther && (
              <button
                type="button"
                role="radio"
                aria-checked={Boolean(isOther)}
                className={isOther ? "selected" : ""}
                onClick={chooseOther}
              >
                <span className="key">
                  {String.fromCharCode(65 + (question.options?.length ?? 0))}
                </span>
                Outro
              </button>
            )}
            {isOther && (
              <div className="field">
                <input
                  ref={(el) => {
                    inputRef.current = el;
                  }}
                  autoFocus
                  type="text"
                  aria-label="Outro"
                  placeholder="Escreva sua resposta"
                  maxLength={question.maxLength ?? 200}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            )}
          </div>
        ) : question.type === "textarea" ? (
          <div className="field">
            <textarea
              ref={(el) => {
                inputRef.current = el;
              }}
              rows={4}
              aria-label={question.label}
              placeholder={question.placeholder ?? "Digite sua resposta aqui…"}
              maxLength={question.maxLength}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
                  e.preventDefault();
                  next();
                }
              }}
            />
          </div>
        ) : (
          <div className="field">
            <input
              ref={(el) => {
                inputRef.current = el;
              }}
              type={question.type}
              inputMode={question.type === "tel" ? "tel" : undefined}
              autoComplete={
                question.id === "nome" ? "name" : question.type === "tel" ? "tel" : "off"
              }
              aria-label={question.label}
              placeholder={question.placeholder ?? "Digite sua resposta aqui…"}
              maxLength={question.maxLength}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        )}
      </fieldset>

      {error && (
        <p className="step-error" role="alert">
          {error}
        </p>
      )}

      <div className="step-actions">
        {step > 0 && (
          <button type="button" className="step-back" onClick={back} disabled={status === "sending"}>
            Voltar
          </button>
        )}
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : isLast ? "Enviar" : "OK"}
          <Arrow />
        </button>
      </div>
    </form>
  );
}
