import React from 'react';
import sun_icon from './../graphics/sun-regular.svg';
import { getWeatherData } from './../services/weather.js';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temperatureData: '' 
        };

        this.handleWeatherFetch = this.handleWeatherFetch.bind(this);

    }

    async handleWeatherFetch() {

        const data = await getWeatherData()

        if(data) {
            console.log('in react component: ' + data)
            this.setState({
                temperatureData: data[0].type + "'F"
            })
        }

        else {
            console.log('in react component: I did nothing')
        }
        
    }
    
    render() {
        return(
            <div>
                
                <header className="appHeader">
                    <img src={sun_icon} className="Sun-icon" alt="sun_icon" />
                    <p>
                        The weather in San Francisco is {this.state.temperatureData}.
                    </p>
                </header>

                <div className='weatherWidget'>

                    <button 
                        className="weatherButton"
                        onClick={this.handleWeatherFetch}
                    >
                        Refresh weather data
                    </button>

                </div>
                
            </div>
        );
    }

}

export default LandingPage;