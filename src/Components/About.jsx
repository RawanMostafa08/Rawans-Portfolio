import React from 'react'
import { getImageUrl } from "../utils"
import pic from "../../Assets/about/responsive.png"
import styles from "./About.module.css"
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="about pic" className={styles.aboutImg}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}><img src={getImageUrl("about/cursor.png")} alt="Cusror icon" />
                        <div className={styles.aboutItemTxt}>
                            <h3>Frontend Developer</h3>
                            <p>I’m a front-end developer with experience
                                in building elite sites with cool features</p>

                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/responsive.png")} alt="responsive icon" />
                        <div className={styles.aboutItemTxt}>
                            <h3>Responsive Websites</h3>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/animation.png")} alt="animation icon" />
                        <div className={styles.aboutItemTxt}>
                            <h3>Animated Websites</h3>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/optimization.png")} alt="optimization icon" />
                        <div className={styles.aboutItemTxt}>
                            <h3>Optimized Websites</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
