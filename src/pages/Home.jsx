import styles from "./Home.module.css";
import Menu from "../components/Menu";
import Coming from "../components/Coming";
import AboutMe from "../components/AboutMe";
import Works from "../components/Works";
import Skills from "../components/Skills";
import GetOut from "../components/GetOut";
import { register } from "swiper/element/bundle";
register();

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Menu />
      </header>
      <main>
        <Coming />
        <AboutMe />
        <Works />
        <Skills />
      </main>
    </>
  );
}
