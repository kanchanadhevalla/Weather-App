import React, {Component} from 'react';
import data from './weather.json'
import './Weather.css'

class WeatherApp extends Component{
    constructor(props) {
        super(props)
        this.state = {weather:[], city: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }
      
  handleClick(){
     Object.keys(data.States).forEach((st) => {
          data.States[st].cities.forEach((ci) => {
            if(ci.name === this.state.city){
              this.setState({weather: ci.forecast})     
            }
          })
       })
      }
      
   handleChange(e){
       this.setState({
         city: e.target.value
       })
   }
      
    render() {
        return (
          <div style={{margin: '10px'}}>
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
            <br/>
            <button style={{margin: '10px'}} onClick={this.handleClick}> Button Click</button>
            <br/>
              <h1>{this.state.city}</h1>
            {
           this.state.weather.map(function(item, i){
           return( <div className="card">
        <div className="header">
           <p>{item.Date}</p>
        </div>
            <div className="container">
           <p>Time : {item.Time}</p>
           <p>Temprature :{item.temprature}</p>
           <p>Feels: {item.feels}</p>
        </div>
    </div>
           )})
          }
          </div> 
        )
      }
}

export default WeatherApp