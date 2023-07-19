import './Hero.css'

const Hero = (props) => {

    return (
        <div className='main-hero bg-secondary'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>Welcome to my React Website</h6>
                <h4 className='hero-title'> <em>Browse</em> Our Games Here</h4>

                <div className='main-button btn '>
                    <a className='text-white' href='browse.html'>Browse Now</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
