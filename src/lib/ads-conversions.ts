/**
 * Google Ads conversion labels for AW-18221438067.
 * A value that still ends in `_LABEL` is a placeholder and is never sent.
 */
export const GOOGLE_ADS_ID = "AW-18221438067";

export const ADS_CONVERSION_SEND_TO = {
  whatsapp: `${GOOGLE_ADS_ID}/8qnRCIbYjLIdEPOo1PBD`,
  instagram: `${GOOGLE_ADS_ID}/QjAJCInYjLIdEPOo1PBD`,
  email: `${GOOGLE_ADS_ID}/20D6CNCXlbIdEPOo1PBD`,
  form: `${GOOGLE_ADS_ID}/sJFsCIPYjLIdEPOo1PBD`,
} as const;

export type AdsConversionAction = keyof typeof ADS_CONVERSION_SEND_TO;

/**
 * Query the Respondi thank-you redirect must land on to count a form lead.
 * In the form's Agradecimento field, choose "Redirecionar para link" and use
 * https://www.leticiamoraes.arq.br/?contato=enviado
 */
export const FORM_CONVERSION_PARAM = "contato";
export const FORM_CONVERSION_VALUE = "enviado";

const WHATSAPP_PHONE_DIGITS = "19981037808";

export function isConfiguredSendTo(sendTo: string): boolean {
  if (!sendTo.startsWith(`${GOOGLE_ADS_ID}/`)) return false;
  const label = sendTo.slice(GOOGLE_ADS_ID.length + 1);
  if (!label || label.endsWith("_LABEL")) return false;
  if (/placeholder|<|>|\s/i.test(label)) return false;
  return true;
}

export function classifyOutboundHref(href: string): AdsConversionAction | null {
  let url: URL;
  try {
    url = new URL(href, "https://leticiamoraes.arq.br");
  } catch {
    return null;
  }

  if (url.protocol === "mailto:") return "email";

  const host = url.hostname.replace(/^www\./, "");
  if (host === "instagram.com") return "instagram";

  if (
    host === "api.whatsapp.com" ||
    host === "wa.me" ||
    host === "whatsapp.com"
  ) {
    const digits = `${url.searchParams.get("phone") ?? ""}${url.pathname}`.replace(
      /\D/g,
      "",
    );
    if (digits.includes(WHATSAPP_PHONE_DIGITS)) return "whatsapp";
  }

  return null;
}
