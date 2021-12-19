import React from 'react'
import Loadable from 'react-loadable'
import { Link } from 'react-scroll'
import Typist from 'react-typist'
import Footer from '../Footer/Footer'

const Loading = () => null

const AsyncParticle = Loadable({
    loader: () => import('./Particle'),
    loading: Loading
})
const AsyncAbout = Loadable({
    loader: () => import('./About'),
    loading: Loading
})
const AsyncTech = Loadable({
    loader: () => import('./Technologies'),
    loading: Loading
})
const AsyncProjects=Loadable({
    loader:()=>import('./projects'),
    loading: Loading
})


const Home = () => {
    return (
        <>
            <AsyncParticle />
            <main>
                <div className="intro" id='home'>
                    <Typist cursor={{ show: false }}>
                        <Typist.Delay ms={500} />
                        <h3>Hi There,I'M </h3>
                        <h1>Nilesh Jaiswar.</h1>
                        <h2>Web Developer.</h2>
                        <h4>Can Bring your Idea To Reality.</h4>
                    </Typist>
                </div>
                <div className="contact">
                    <Link to='about' smooth={true} duration={1000}>
                        <button>
                            Learn More
                        </button>
                    </Link>
                    <a href="mailto:jaiswarnilesh2002@gmail.com">
                        <button>
                            Contact Me
                        </button>
                    </a>
                </div>

                <hr />
                <AsyncAbout />
                <hr />
                <AsyncTech />
                <hr />
                <AsyncProjects />
                <Footer />
            </main>
        </>
    )
}

export default Home
