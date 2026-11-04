import Image from "next/image";

const ITEMS = [
  "interiores que respiram",
  "design biofílico",
  "5 anos de estúdio",
  "maringá e londrina",
];

export default function SubmarkStrip() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="submark-strip" aria-hidden="true">
      <div className="submark-track">
        {doubled.map((word, i) => (
          <div key={i} style={{ display: "contents" }}>
            <Image
              src="/assets/submark-positiva.png"
              alt=""
              width={100}
              height={100}
            />
            <span className="word">{word}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
