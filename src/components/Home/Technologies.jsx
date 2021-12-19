import React from 'react'
import Next from './img/next1.png'

const Technologies = () => {
    return (
        <>
            <div className="technologies" id='tech'>
                <h1>Technologies:-</h1>
                <div className="technologies-desc">
                    <div className="desc">
                        <i class="fab fa-react"></i>
                        <h2>React Js</h2>
                    </div>
                    <div className='desc'>
                        <i class="fab fa-node-js"></i>
                        <h2>Node Js</h2>
                    </div>
                    <div className='desc'>
                    <i class="fab fa-sass"></i>
                        <h2>SASS</h2>
                    </div>
                    <div className='desc'>
                        <img src="https://expressjs.com/images/express-facebook-share.png" alt="" />
                        <h2>Express Js</h2>
                    </div>
                    <div className='desc'>
                    <img src="https://img.icons8.com/color/96/000000/mongodb.png"/>
                        <h2>MongoDB</h2>
                    </div>
                    <div className='desc'>
                    <img src={Next} alt="" />
                        <h2>NEXT JS</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologies
