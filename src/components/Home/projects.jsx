import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            <div className='projects' id='projects'>
                <h1>Projects:-</h1>
                <div className="projects-cards">
                    <div className="card" data-aos='fade-up' >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1637766982/Portpolio/GPT3_oym89o.png" alt="" />
                        <div className="card-overlay">
                            <a href="https://new-gpt3.netlify.app/" target="_blank"><button>Visit</button></a>
                        </div>
                    </div>
                    <div className="card" data-aos='fade-up' >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1633701631/Portpolio/redfluk_guvjii.webp" alt="" />
                        <div className="card-overlay">
                            <a href="https://redfluk.netlify.app" target="_blank"><button>Visit</button></a>
                        </div>
                    </div>
                    <div className="card" data-aos='fade-up' >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1633701631/Portpolio/acoustic_nht510.webp" alt="" />
                        <div className="card-overlay">
                            <a href="https://www.amanacoustic.com" target="_blank"><button>Visit</button></a>
                        </div>
                    </div>
                    <div className="card" data-aos='fade-up' >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1633701631/Portpolio/CryptoVerse_xbrmik.webp" alt="" />
                        <div className="card-overlay">
                            <a href="https://crypto-news-app.netlify.app" target="_blank"><button>Visit</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
