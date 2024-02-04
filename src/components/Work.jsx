import styles from './Work.module.css'
import reactLogo from '../assets/images/coming.jpg'

export default function Work() {
    return (
        <>
            <section id="work" className={styles.work}>
                <div className={styles.conteiner}>
                    <div className={styles.card}>
                        <div className={styles.lines}></div>
                        <div className={styles.imgBx}>
                            <img src={reactLogo} className={styles.logo}  alt="React logo" />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.details}>
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

// className={styles.react} img