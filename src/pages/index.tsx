import './global.css'
import {Menu} from '../components/Menu'
import { Coming } from "../components/Coming";
import { AboutMe } from "../components/AboutMe";
import { Works } from '../components/Works';
import { Skills } from '../components/Skills';
import { GetOut } from '../components/GetOut';

export function App() {

  return (
    <>
      <header>
        <Menu />
        <Coming />
      </header>
      <main>
        <AboutMe />
        <Works/>
        <Skills/>
      </main>
      <footer>
        <GetOut/>
      </footer>
    </>
  )
}
