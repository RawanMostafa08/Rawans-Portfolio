import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from "../utils"
export const Contact = () => {
    return (
        <footer className={styles.container} id='contact'>
            <div className={styles.text}>
                <h2>Contacts</h2>
                <p>feel free to reach out!</p>
            </div >
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                    <a href="mailto:rawanmostafa401@gmail.com" target="_blank" >rawanmostafa401@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
                    <a href="https://github.com/RawanMostafa08" target="_blank">RawanMostafa08</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/rawan-mostafa/" target="_blank">rawan mostafa</a>
                </li>
                
            </ul>
        </footer>
    )
}
