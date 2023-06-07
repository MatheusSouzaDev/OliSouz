import './skill.css'

export function Skill(props:any) {
    return (
        <>
            <section id="skill">
                <div className="card">
                    <div className="circle">
                        <img src={props.front} className="logo" alt="React logo" />
                    </div>
                    <div className="content">
                        <h2>{props.name}</h2>
                        <p>{props.text}</p>
                        <a href={props.link} target="_blank">Explore</a>
                    </div>
                    <img src={props.end} className="product" alt="React logo" />
                </div>
            </section>
        </>
    )
}