import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav id={styles.menu}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <li>
            &lt; <span>Olisouz</span> &gt;
          </li>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#aboutme">Sobre Mim</a>
          </li>
          <li>
            <a href="#works">Projetos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            &lt; <span>/Olisouz</span> &gt;
          </li>
        </ul>
      </div>
    </nav>
  );
}
