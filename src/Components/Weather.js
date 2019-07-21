import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city} , {this.props.country}</p>}
                {this.props.temprature && <p>Temprature : this.props.temprature</p>}
                {this.props.humidity}
                {this.props.description}
            </div>
        )
    }
}

export default Weather
