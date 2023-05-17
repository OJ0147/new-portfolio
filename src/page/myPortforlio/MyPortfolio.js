import React, { useEffect, useState } from 'react'
import styles from './MyPortfolio.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Projects from './projects/Projects';
import Technologies from './technologies/Technologies';
import Contact from './contact/Contact';
import {FaBars, FaTimes} from 'react-icons/fa'
import Greetings from '../../components/greeting/Greeting';

const MyPortfolio = () => {
    const [isActive, setIsActive]= useState(false)

    useEffect(()=>{
        Greetings()
    })

    // active navbar
    const toggleMenu = () =>{
        setIsActive(!isActive)
    }
  return (
    <div className={styles.container} >
        <nav>
           
            <div className={styles['nav-content']}>
                <div onClick={toggleMenu} className={styles['menu-button']} >
                    {isActive? <FaTimes size={30} color='#333'/> : <FaBars size={30} color='#333'/> }
                </div>
                <div>{Greetings()}</div>
            </div>
            <h2>Ojugo</h2>
        </nav>
        <section className={styles["page-container"]} >
            <div className={isActive? styles["sidebar-wrapper"] + " " + styles['active-sidebar'] : styles["sidebar-wrapper"]} >
                <Sidebar/>
            </div>
            <div className={styles["page-content"]} >
                <Routes >
                    <Route path= 'projects' element={<Projects/>} />
                    <Route path='technologies' element={<Technologies/>} />
                    <Route path='contact' element={<Contact/>} />
                </Routes>
            </div>   
        </section>
    </div>
  )
}

export default MyPortfolio