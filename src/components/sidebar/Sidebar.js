import React from 'react'
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { FaBriefcase, FaGithubSquare, FaHome, FaInstagramSquare, FaLinkedin, FaPhoneAlt, FaRobot} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <aside>
        <ul className={styles['socials']}>
            <li>
                <a href="https://www.linkedin.com/in/silas-ojugo/" target='_blank' rel='noreferrer' className={styles.linkedin} ><small>linkedin</small> <FaLinkedin size={40}/> </a>
            </li>
            <li>
                <a href="https://github.com/OJ0147" target='_blank' rel='noreferrer' className={styles.github} > <small>Github</small> <FaGithubSquare size={40}/></a>
            </li>
            <li>
                <a href="https://instagram.com/im_ojhay?igshid=ZGUzMzM3NWJiOQ==" target='_blank' rel='noreferrer' className={styles.instagram}> <small>instagram</small> <FaInstagramSquare size={40}/> </a>
            </li>
        </ul>
        <ul className={styles["routes"]} >
            <li>
                <NavLink to='/'> 
                    <span className={styles.routes__icon}><FaHome size={25}/></span> 
                    <span className={styles.routes__name}>Home</span> 
                </NavLink>
            </li>
         
            <li>
                <NavLink to='/portfolio/projects'>
                    <span className={styles.routes__icon} ><FaBriefcase size={25}/></span> 
                    <span className={styles.routes__name}>Projects</span> 
                </NavLink>
            </li>
            <li>
                <NavLink to='/portfolio/technologies'>
                    <span className={styles.routes__icon} ><FaRobot size={25}/></span> 
                    <span className={styles.routes__name}>Technologies</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/portfolio/contact'>
                    <span className={styles.routes__icon}><FaPhoneAlt size={25}/> 
                    </span>  <span className={styles.routes__name}>Contact</span> 
                </NavLink>
            </li>

        </ul>
    </aside>
  )
}

export default Sidebar