import React, { Component } from 'react'

export class Intro extends Component {
		   
  render() {
    return (
      <div style={introStyle} >
        <p className="title animated fadeIn" style={nameStyle} onMouseOver={this.mover}>Hi, I'm Jay</p>
				<p className="aboutMe animated fadeIn" style={aboutMeStyle} onMouseOver={this.mover}>
					I'm a prospective software engineer and I graduated Magna Cum Laude with a computer science degree
					from California State University, Monterey Bay. Take a look around my site to 
					see what I'm all about! <span role='img' aria-label="Smile">😁</span>
				</p>
      </div>
    )
	}
	
}

const introStyle = {
		paddingTop: '17%',
    textAlign: 'center'
}
const nameStyle = {
		fontSize: '5rem',
		margin: '5px',
		color: 'white'
}
const aboutMeStyle = {
	fontSize: '1.5rem',
	textAlign: 'center',
	color: 'white',
	margin: '1rem 15rem 2rem 15rem'
}

export default Intro
