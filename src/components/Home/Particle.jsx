import React from 'react'
import Particles from 'react-particles-js'

const Particle = () => {
    return (
        <>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                        shape: {
                            type: 'image',
                            image: [
                                { src: 'https://i.pinimg.com/originals/1b/06/b8/1b06b87d5f493f93130ffcccdac578bf.jpg' }
                            ]
                        },
                        polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 100
                            },
                            url: 'https://i.pinimg.com/originals/1b/06/b8/1b06b87d5f493f93130ffcccdac578bf.jpg'
                        },
                        line_linked: {
            				shadow: {
            					enable: true,
            					color: "red",
            					blur: 5
            				}
            			},
                        color:{
                            value: '#FF0000'
                        }
                    }
                    
                }}

                
                
            />
        </>
    )
}

export default Particle
