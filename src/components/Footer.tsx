import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-submark">
          <Image
            src="/assets/submark-positiva.png"
            alt="Letícia Moraes — Design de Interiores"
            width={88}
            height={88}
          />
        </div>
        <div>© 2026 · feito com cuidado em Campinas</div>
      </div>
    </footer>
  );
}
