import React from 'react'

 const Weather = (props) =>{
    return (
        <div>
            {props.city && props.country && <p>Location: {props.city} , {props.country}</p>}
            {props.temprature && <p>Temprature : {props.temprature}</p>}
            {props.humidity && <p>Humidity : {props.humidity} </p>}
            {props.description && <p>Description : {props.description}</p>}
            {props.error && <p>Error : {props.error} </p>}
        </div>
    )
}

export default Weather
