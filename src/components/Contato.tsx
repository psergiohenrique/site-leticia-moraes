"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

export default function Contato() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
                Sua mensagem chegou. Te respondo em até dois dias úteis — fica
                de olho no e-mail.
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
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-cidade">Cidade</label>
                  <input
                    id="cf-cidade"
                    name="cidade"
                    type="text"
                    placeholder="Onde fica o projeto"
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
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-tipo">Tipo de imóvel</label>
                  <select id="cf-tipo" name="tipo">
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
