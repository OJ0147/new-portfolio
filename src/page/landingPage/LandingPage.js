import React from 'react'
import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import homeboy from '../../assets/silo-deep.png'

const LandingPage = () => {
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.5}}}
    className={styles['home']}
    >

        <main className={styles["landing-page"]}>
            <div className={styles["text-side"]}>
                <nav>
                    <h2 data-text='Ojugo'>Ojugo</h2>
                </nav>
                <div className={styles["text-sideContent"]}>

                <h1>
                    I AM A WEB DEV
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt sit accusamus earum odio sint obcaecati minima 
                    consectetur adipisci corrupti omnis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt sit accusamus earum odio sint obcaecati minima 
                    consectetur adipisci corrupti omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt sit accusamus earum odio sint obcaecati minima 
                    consectetur adipisci corrupti omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt sit accusamus earum odio sint obcaecati minima 
                    consectetur adipisci corrupti omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sunt sit accusamus earum odio sint obcaecati minima 
                    consectetur adipisci corrupti omnis.
                </p>
                <Link to ='/portfolio/projects'>
                    <button className={styles["button-49"]} >Get to know me</button>
                </Link>
                </div>

            </div>
            <section className={styles["image-side"]}>
                <div className={styles["image-wrapper"]}>
                   <img src={homeboy} alt="" /> 
                </div>
            </section>

        </main>
    </motion.div>
  )
}

export default LandingPage