"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

const WHATSAPP_NUMBER = "5519981037808";

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({
    nome: "",
    cidade: "",
    metragem: "",
    tipo: "apartamento-padrão",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tipoLabel: Record<string, string> = {
      "apartamento-padrão": "Apartamento Padrão",
      "apartamento-garden": "Apartamento Garden",
      "apartamento-duplex": "Apartamento Duplex",
      "casa-terrea": "Casa Térrea",
      sobrado: "Sobrado",
    };

    const msg = [
      `Olá Letícia! Me chamo *${fields.nome}* e gostaria de conversar sobre um projeto.`,
      ``,
      `📍 *Cidade:* ${fields.cidade || "—"}`,
      `🏠 *Tipo:* ${tipoLabel[fields.tipo] ?? fields.tipo}`,
      `📐 *Metragem:* ${fields.metragem || "—"}`,
      fields.mensagem ? `\n💬 *Sobre o projeto:*\n${fields.mensagem}` : "",
    ]
      .join("\n")
      .trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contato" className="contato">
      <div className="wrap">
        <RevealWrapper className="section-head">
          <p className="eyebrow">06 · Contato</p>
          <h2>
            Vamos começar
            <br />
            <em>o seu projeto?</em>
          </h2>
        </RevealWrapper>

        <div className="contact-grid">
          {sent ? (
            <div className="form-sent">
              <div className="leaf-icon" />
              <b>obrigada!</b>
              <p>
                O WhatsApp foi aberto com sua mensagem pronta — é só enviar!
                Logo entrarei em contato.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="field">
                  <label htmlFor="cf-nome">Seu nome e sobrenome</label>
                  <input
                    id="cf-nome"
                    name="nome"
                    type="text"
                    placeholder="Como posso te chamar"
                    required
                    value={fields.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-cidade">Cidade</label>
                  <input
                    id="cf-cidade"
                    name="cidade"
                    type="text"
                    placeholder="Onde fica o projeto"
                    value={fields.cidade}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="cf-email">Metragem quadrada</label>
                  <input
                    id="cf-metragem"
                    name="metragem"
                    type="text"
                    placeholder="Quantos metros quadrados possui o seu imóvel? "
                    required
                    value={fields.metragem}
                    onChange={handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-tipo">Tipo de imóvel</label>
                  <select id="cf-tipo" name="tipo" value={fields.tipo} onChange={handleChange}>
                    <option value="apartamento-padrão">
                      Apartamento Padrão
                    </option>
                    <option value="apartamento-garden">
                      Apartamento Garden
                    </option>
                    <option value="apartamento-duplex">
                      Apartamento Duplex
                    </option>
                    <option value="casa-terrea">Casa térrea</option>
                    <option value="sobrado">Sobrado</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Sobre o projeto</label>
                <textarea
                  id="cf-msg"
                  name="mensagem"
                  rows={3}
                  placeholder="Conta um pouco - o que sonha, se já está com as chaves, quem mora com você…"
                  value={fields.mensagem}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">
                Enviar mensagem
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h12M8 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          )}

          <div className="contact-info">
            <p className="lede">
              Me mande uma mensagem e logo entrarei em contato com você! Será um
              prazer te ouvir e ajudar a realizar esse sonho!
            </p>

            <div className="row">
              <div>
                <b>Estúdio</b>
                <p>
                  Rua Maria Monteiro, 1791
                  <br />
                  Cambuí · Campinas, SP
                </p>
              </div>
              <div>
                <b>Por escrito</b>
                <p>projeto@leticiamoraes.arq.br</p>
              </div>
            </div>

            <div className="socials">
              <a
                href="https://www.instagram.com/leticiamoraes.arquiteta/"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=19981037808&text&type=phone_number&app_absent=0"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
