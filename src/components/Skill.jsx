import styles from './Skill.module.css'

export default function Skill(props) {
    return (
        <>
            <section id="skill" className={styles.skill}>
                <div className={styles.card}>
                    <div className={styles.circle}>
                        <img src={props.front} className={styles.logo} alt="React logo" />
                    </div>
                    <div className={styles.content}>
                        <h2>{props.name}</h2>
                        <p>{props.text}</p>
                        <a href={props.link} target="_blank">Explore</a>
                    </div>
                    <img src={props.end} className={styles.product} alt="React logo" />
                </div>
            </section>
        </>
    )
}