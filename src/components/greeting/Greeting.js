import React from 'react'
import styles from './Greet.module.css'
import sun from '../../assets/sun.svg'
import sunny from '../../assets/sunny.svg'
import moon from '../../assets/moon.svg'

const Greetings = () => {
    let myDate = new Date();
    let hours= myDate.getHours();

    if (hours < 12){
        return(
            <div className={styles.greet__wrap}>
                <p> Good morning</p>
                <img src={sunny} alt="sunny" />
            </div>
        )
    }else if (hours >= 12 && hours <= 17){
        return(
            <div className={styles.greet__wrap}>
                <p>Good afternoon</p>
                <img src={sun} alt="sun" />                
            </div>
        )
    }else if (hours >= 17 && hours <= 24){
        return(
        <div className={styles.greet__wrap}>
            <p>Good evening</p>   
            <img src={moon} alt="moon" /> 
        </div>
        )
    }
       
    
}

export default Greetings 
// const Greetings = () => {
//     let myDate = new Date();
//     let hours= myDate.getHours();
//     let greet;

//     if (hours < 12)
//         greet =  "morning 🌞";    
//     else if (hours >= 12 && hours <= 17)
//         greet = "afternoon ⛅";
//     else if (hours >= 17 && hours <= 24)
//        greet = "evening 🌒";
    
//     return <span style={{fontSize:"3rem", fontWeight:"700", color:"#333"}}>Good {greet}</span>
// }

// export default Greetings 