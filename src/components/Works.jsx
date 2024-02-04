import styles from './Works.module.css'
import Work from './Work'

export default function Works() {
    return (
        <>
            <section id="works" className={styles.works}>
                <Work/>
                <Work/>
            </section>
        </>
    )
}