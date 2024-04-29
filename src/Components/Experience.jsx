import React from 'react'
import skills from "./data/skills.json"
import history from "./data/history.json"
import { getImageUrl } from '../utils'
import styles from "./Experience.module.css"
export const Experience = () => {
  return (
   <section className={styles.container} id="experience">
<h2 className={styles.title}>Experience</h2>
<div className={styles.content}>
    <div className={styles.skills}>
{
    skills.map((skill,id)=>{
        return <div key={id} className={styles.skill}>
            <div className={styles.skillImgcont}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
            </div>
    })
}
    </div>
    <ul className={styles.history}>
        {
            history.map((hist,id)=>{
                return <li key={id} className={styles.histItm}>
                    <img src={getImageUrl(hist.imageSrc)} alt={`${hist.organisation} logo`} />
                    <div className={styles.histItmDetails}>
                        <h3>{`${hist.role}, ${hist.organisation}`}</h3>
                        <p>{`${hist.startDate} - ${hist.endDate}`}</p>
                        <ul>
                            {
                                hist.experiences.map((exp,id)=>{
                                    return <li key={id}>{exp}</li>
                                })
                            }
                        </ul>
                    </div>
                </li>
            })
        }
    </ul>
</div>
   </section>
  )
}
