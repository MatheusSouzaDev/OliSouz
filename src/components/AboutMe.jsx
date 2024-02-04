import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="aboutme" className={styles.aboutme}>
      <div className={styles.wrapper}>
        <h2>Sobre mim</h2>
        <p>
          Ao longo da minha jornada como desenvolvedor, adquiri habilidades
          sólidas em front-end, incluindo HTML, CSS e JavaScript, juntamente com
          o framework ReactJS. No back-end, sou proficiente em NodeJS e SQL.
          Cada descoberta e desafio ultrapassado alimentam minha paixão pelo
          desenvolvimento web. Estou constantemente buscando aprendizado e estou
          entusiasmado para aplicar meu conhecimento, contribuindo para soluções
          inovadoras. Vamos construir algo incrível juntos!
        </p>
      </div>
    </section>
  );
}
