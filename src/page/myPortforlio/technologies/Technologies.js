import React from 'react'
import styles from './Technologies.module.css'
import { motion } from 'framer-motion'


const Technologies = () => {
  return (
    <motion.div
     className={styles.technology}
     initial={{width: 0}}
     animate={{width: "100%"}}
     exit={{x: window.innerWidth, transition: {duration:0.5}}}    
    >
      <h1> Technologies </h1>
    </motion.div>
  )
}

export default Technologies