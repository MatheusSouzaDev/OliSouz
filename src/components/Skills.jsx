import styles from "./Skills.module.css";
import Skill from "./Skill";
import htmllogo from "../assets/images/htmlname.svg";
import htmlsimbol from "../assets/images/htmlsimbol.svg";
import csslogo from "../assets/images/cssname.svg";
import csssimbol from "../assets/images/csssimbol.svg";
import jslogo from "../assets/images/jsname.svg";
import jssimbol from "../assets/images/jssimbol.svg";
import reactlogo from "../assets/images/reactname.svg";
import reactsimbol from "../assets/images/reactsimbol.svg";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <Skill
        name="HTML"
        text="É uma linguagem de marcação utilizada na construção de páginas na web."
        link="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
        front={htmllogo}
        end={htmlsimbol}
      />
      <Skill
        name="CSS"
        text="É uma linguagem de estilo utilizada para adicionar estilo a uma páginas web."
        link="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
        front={csslogo}
        end={csssimbol}
      />
      <Skill
        name="JS"
        text="É uma linguagem de programação utilizada para fazer páginas web interativas. Junto com HTML e CSS é uma das três principais tecnologias da web."
        link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
        front={jslogo}
        end={jssimbol}
      />
      <Skill
        name="React"
        text="É uma bibioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
        link="https://pt-br.reactjs.org/"
        front={reactlogo}
        end={reactsimbol}
      />
    </section>
  );
}
