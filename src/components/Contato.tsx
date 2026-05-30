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
              <p>Sua mensagem chegou. Te respondo em até dois dias úteis — fica de olho no e-mail.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="field">
                  <label htmlFor="cf-nome">Seu nome</label>
                  <input id="cf-nome" name="nome" type="text" placeholder="Como posso te chamar" required />
                </div>
                <div className="field">
                  <label htmlFor="cf-cidade">Cidade</label>
                  <input id="cf-cidade" name="cidade" type="text" placeholder="Onde fica o projeto" />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="cf-email">E-mail</label>
                  <input id="cf-email" name="email" type="email" placeholder="seuemail@exemplo.com" required />
                </div>
                <div className="field">
                  <label htmlFor="cf-tipo">Tipo de projeto</label>
                  <select id="cf-tipo" name="tipo">
                    <option value="residencial">Residencial completo</option>
                    <option value="consultoria">Consultoria à distância</option>
                    <option value="reforma">Retrofit / reforma</option>
                    <option value="outro">Ainda não sei</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Sobre o projeto</label>
                <textarea
                  id="cf-msg"
                  name="mensagem"
                  rows={3}
                  placeholder="Conta um pouco — quem mora, o que sonha, prazo..."
                />
              </div>
              <button type="submit">
                Enviar mensagem
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          )}

          <div className="contact-info">
            <p className="lede">
              Atendo até quatro projetos por trimestre. Me conta a sua
              história — respondo em até dois dias úteis.
            </p>

            <div className="row">
              <div>
                <b>Estúdio</b>
                <p>
                  R. das Hortênsias, 128
                  <br />
                  Cambuí · Campinas, SP
                </p>
              </div>
              <div>
                <b>Por escrito</b>
                <p>ola@leticiamoraes.arq.br</p>
              </div>
              <div>
                <b>Por voz</b>
                <p>+55 19 99876 4321</p>
              </div>
            </div>

            <div className="socials">
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Pinterest">Pinterest</a>
              <a href="#" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
