import styles from "./Coming.module.css";
import Saturn from "./Saturn";

export default function Coming() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h3>
            <span>M</span>
            <span>O</span>
            <span>S</span>
          </h3>
          <h4>Web Developer</h4>
          <p>
            Olá!!! Me chamo Matheus, um desenvolvedor web apaixonado por
            transformar ideias em código. Vamos resolver os seus desafios online
            juntos!
          </p>
        </div>

        <div className={styles.saturn}>
          <Saturn />
        </div>
      </div>
    </section>
  );
}
