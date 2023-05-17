import React from 'react'
import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import { data } from '../../../components/data'

const Projects = () => {
  return (
    <motion.div 
      className={styles.projects}
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerHeight, transition: {duration:0.5}}}
    >
      <div className={styles["projects-container"]}>
        <h2> Projects </h2>
        <section>
        {data.map((item)=>{
          const{id, title, description, image, site, code}=item
          return(
            <div className={styles['project-wrapper']} key={id}>
              <div className={styles["image-wrap"]}>
                <img src={image} alt="project" />
              </div>
              <h3>{title}</h3>
            </div>
          )
        })}
        </section>

      </div>
    </motion.div>
  )
}

export default Projects