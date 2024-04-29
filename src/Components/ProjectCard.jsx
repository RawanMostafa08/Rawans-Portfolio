import React from 'react'
import { getImageUrl } from "../utils"
import styles from './ProjectCard.module.css'
export const ProjectCard = ({project}) => {
    return (
        <div className={styles.card}>
            <img src={getImageUrl(project.imageSrc)} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
                {
                    project.skills.map((skill, id) => {
                        return <li key={id}> {skill}</li>
                    })
                }
            </ul>
            <div className={styles.btn}>
            <a href={project.source} target="_blank">Source</a>
            </div>
        </div>
    )
}
