import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const mySkills = ["HTML","CSS","JS","Python", "React", "Nodejs", "MySQL","C/C++","Linux","Git/Github"];
    const iconColor = "rgb(255, 136, 0";

    return (
        <>
            <div className='container' id='about-container'>
                <div id='about-content' className='inside-about-container flex flex-col bg-style'>
                    <h1>Paras Kalyan</h1>
                    <p>For me, programming isn't just a job - it's a calling. I'm driven by a fascination with the cosmos and a desire to use technology to better understand our place in the universe. And as someone who's truly proud of humanity's accomplishments, I'm always striving to create solutions that make a positive impact on the world.</p>
                    <div id='contact' className='flex flex-col' >
                        <p><FontAwesomeIcon icon={faLocationDot} color={iconColor}/> Mohali, India</p>
                        <p><FontAwesomeIcon icon={faPhone} color={iconColor}/> +916283000629 </p>
                        <p><FontAwesomeIcon icon={faEnvelope} color={iconColor}/> paraskalyan20@gmail.com</p>
                    </div>
                </div>
                <br />
                <h3 className='bg-style txt-center'>My Skills</h3>
                <div id='skills' className='inside-about-container flex flex-col'>
                    {mySkills.map((skill)=>{
                       return <p className='bg-style'>{skill}</p>
                    })}
                </div>
            </div>
        </>
    )
}

export default About;