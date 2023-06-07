import './coming.css'
import { Saturn } from '../Saturn'

export function Coming() {
    
    return(
        <section id="home">
            <div className="wrapper">
                <div className="logo">
                    <h3>MOS</h3>
                    <p>Web Developer</p>
                </div>

                <div className="saturn">
                    <Saturn />
                </div>
            </div>
        </section>
    )
}