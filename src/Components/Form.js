import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.getWeather}>
                    <input type = 'text' name = "City" placeholder = "City..."></input>
                    <input type  = 'text' name = "Country" placeholder = "Country..."></input>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
}

export default Form
