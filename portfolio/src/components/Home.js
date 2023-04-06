import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const Home = ()=>{
    return(
        <div className='container flex-col' id='home-container'>
            <h1 className='txt-white bg-style'>Welcome to My Portfolio website</h1>
            <div className='left-content flex flex-col'>
               
                <h1 id='main-head' className='bg-style'>Creating solutions, exploring the cosmos - I am a developer who loves space</h1>
                <div className='social-icons flex'>
                    <a target = '_blank' href='https://www.twitter.com/paras_eth'> <FontAwesomeIcon icon={faTwitter}  className='icon' size='lg'/></a>
                    <a target = '_blank' href='https://www.github.com/paraskalyan'> <FontAwesomeIcon icon={faGithub}   className='icon' size='lg'/></a>
                    <a target = '_blank' href='https://www.linkedin.com/in/paras-kalyan-630017191/'> <FontAwesomeIcon icon={faLinkedin} className='icon' size='lg'/></a>
                </div>                                                                                                  
            </div>
        </div>
    )
}

export default Home;