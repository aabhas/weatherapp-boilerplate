import sun_icon from './../graphics/sun-regular.svg';

function LandingPage() {
    
    return(
        <div>
            
            <header className="appHeader">
                <img src={sun_icon} className="Sun-icon" alt="sun_icon" />
                <p>
                    Check the weather.
                </p>
            </header>

            <div className='weatherWidget'>

                <button className="weatherButton">
                    Refresh weather data
                </button>

            </div>
            
        </div>
    )

}

export default LandingPage;