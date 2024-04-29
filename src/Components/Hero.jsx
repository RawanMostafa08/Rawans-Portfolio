import React from 'react'
import { getImageUrl } from '../utils'
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Rawan</h1>
                <p className={styles.description}>I’m a front-end developer with 3 years
                    of experience.
                    Open to New Job Opportunities <br /> 
                    Conatct me if you're interested </p>
                <a href="mailto:rawanmostafa401@gmail.com" className={styles.contactBtn} target="_blank">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="hero img" className={styles.heroImg}/>
                <div className={styles.topBlur}/>
                <div className={styles.bottomBlur}/>

        </section>
    )
}
