import styles from "./GetOut.module.css";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";

export default function GetOut() {
  return (
    <section id="getout" className={styles.getout}>
      <div className={styles.wrapper}>
        <div className={styles.credit}>
          <span>Email para Ccontato: 1002matheussouza@gmail.com</span>
          <span>Feito por Matheus Souza</span>
          <span>
            Icon de saturno:{" "}
            <a
              href="https://www.flaticon.com/br/icones-gratis/saturno"
              title="saturno ícones"
              target="_blank"
            >
              Flaticon
            </a>
          </span>
        </div>
        <div className={styles.icons}>
          <a href="https://github.com/MatheusSouzaDev/" target="_blank">
            <img src={github} alt="icon do github" />
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-souza-3691a3236"
            target="_blank"
          >
            <img src={linkedin} alt="icon do linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}
