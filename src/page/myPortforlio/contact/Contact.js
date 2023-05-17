import {useState, useRef, useEffect} from 'react'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'
import {MdEmail, MdPhoneCallback} from 'react-icons/md'
import {TfiInstagram, TfiTwitter} from 'react-icons/tfi'
import {AiOutlineFacebook} from 'react-icons/ai'
import {TbSend} from 'react-icons/tb'
import emailjs from '@emailjs/browser';
import {Notify} from 'notiflix'
import {TiSocialLinkedin} from 'react-icons/ti'




const Contact = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const FormRef = useRef()
  const inputRef = useRef(null)
  
  useEffect(()=>{
    inputRef.current.focus()
  })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9wik1z', 'template_akm9ars', FormRef.current, 'ql3fbY8DYQz35DtYm')
      .then((result) => {
          console.log(result.text);
          Notify.success('sent successfully');

      }, (error) => {
          console.log(error.text);
          Notify.failure('an error occured')
      });
  };


  return (
    <motion.div 
     className={styles["contact-wrapper"]}
     initial={{width: 0}}
     animate={{width: "100%"}}
     exit={{y: window.innerHeight, transition:{duration:0.5}}} 
     >
      <div className={styles['form-control']}>
        <h2>Get in touch</h2>
        <form onSubmit={sendEmail} ref={FormRef}>
            <input ref={inputRef} type="text" name='fullName' placeholder='FULLNAME' value={fullName} onChange={(e)=>setFullName(e.target.value) }required /> 

            <input type="email" name='email'placeholder='EMAIL' value={email} onChange={(e)=>setEmail(e.target.value)} required /> 
            
            <input type="tel" name='phone' placeholder='ENTER PHONE NUMBER' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required />

            <textarea name="message" cols="30" rows="10" placeholder='MESSAGE' value={message} onChange={(e)=>setMessage(e.target.value)} required ></textarea>

            <button  className={styles["cssbuttons-io"]} type="submit"><span>Submit &nbsp; <TbSend size={20}/></span> </button>
            
        </form>
        
      </div>

      <div className={styles["contact-info"]}>
        <h2>Contact Information</h2>

        <address>
            <div>
                <span>
                    <TiSocialLinkedin size={25}/>
                </span>
                <small>
                    <a href="https://www.linkedin.com/in/silas-ojugo/" target='_blank' rel='noreferrer'>linkedin.com/in/silas-ojugo</a>
                </small>
            </div>
            <div>
                <span>
                    <MdPhoneCallback size={25} />
                </span>
                <small>
                    <a href="tel:+234 902-532-8516">+234 902-532-8516</a>
                </small>
            </div>
            <div>
                <span>
                    <MdEmail size={25}/>
                </span>
                <small>
                    <a href="mailto:silasojugo@gmail.com">silasojugo@gmail.com</a>
                </small>
            </div>
        </address>

        <div className={styles.socials}>
            <a href="https://instagram.com/im_ojhay?igshid=ZGUzMzM3NWJiOQ==" target='_blank' rel='noreferrer'> <TfiInstagram size={25}/> </a>
            <a href="https://www.facebook.com/profile.php?id=100086046116992&mibextid=ZbWKwL"  target='_blank' rel='noreferrer'> <AiOutlineFacebook size={25}/> </a>
            <a href="https://twitter.com/SilasOjugo" target='_blank' rel='noreferrer'> <TfiTwitter size={25} /> </a>
        </div>
    </div>
      
    </motion.div>
  )
}

export default Contact