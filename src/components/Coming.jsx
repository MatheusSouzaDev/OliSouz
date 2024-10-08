import styles from "./Coming.module.css";
import SpaceBackgroundVideo from "../assets/video/SpaceBackground.mp4";
import Saturn from "../assets/images/Saturn.svg";

export default function Coming() {
  return (
    <section id="home" className={styles.home}>
      <div className="background-video-container">
        <video className="background-video" autoPlay loop muted>
          <source src={SpaceBackgroundVideo} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
      <div className={styles.wrapper}>
        <div className={`${styles.Logo} ${styles.GradeOne}`}>
          <h3>
            <span>m</span><span>o</span><span>s</span>
          </h3>
          <h4>Web Developer</h4>
        </div>
        <p className={styles.GradeTwo}>
          Olá!!! Me chamo Matheus, um desenvolvedor web apaixonado por
          transformar ideias em codigo.
        </p>
        <p className={styles.GradeThree}>
          Vamos resolver os seus desafios online juntos!
        </p>
        <img
          className={styles.GradeFour}
          src={Saturn}
          alt="Imagem de saturno"
        />
      </div>
    </section>
  );
}
