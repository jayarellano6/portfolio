import React, { Component } from 'react'
import jay from '../assets/j2.JPG'

export class More extends Component {
  render() {
    return (
        <div>
            <div style={{margin: '2.5% 0 0 5%', display: 'flex'}}>
                <h3 className="ui header animated fadeInDown" style={{color: 'white'}}>
                    <div style={imgDivSty}>
                        <img src={jay} className="ui image" alt='jay' style={imgSty}/>
                    </div>
                    <div className="content" style={contSty}>
                        Jay Anthony Arellano
                    </div>
                </h3>  
            </div>
        </div>
    )
  }
}
const imgDivSty = {
    display: 'inline-block',
    position: 'relative',
    width: '11rem',
    height: '11rem',
    overflow: 'hidden',
    borderRadius: '50%',
    border: '1px solid white'
}
const imgSty = {
    width: '100%',
}
const contSty = {
    margin: '0 0 0 2rem',
    height: '100%',
    verticalAlign: 'middle',
    fontSize: '3.4rem',
    fontWeight: 'normal',
    textDecoration: 'underline',
    letterSpacing: '.1rem',
    wordSpacing: '.2rem'
}

export default More
