import './work.css'
import reactLogo from '../../assets/images/coming.jpg'

export function Work() {
    return (
        <>
            <section id="work">
                <div className="conteiner">
                    <div className="card">
                        <div className="lines"></div>
                        <div className="imgBx">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </div>
                        <div className="content">
                            <div className="details">
                                <h2>Em Breve</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae praesentium aspernatur aperiam possimus ducimus fugiat voluptas velit ea. Ullam odio ratione quibusdam animi perferendis magni a excepturi cupiditate, blanditiis natus.</p>
                                <a href="#">Ler Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}