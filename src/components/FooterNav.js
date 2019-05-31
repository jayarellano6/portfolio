import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class FooterNav extends Component {
  render() {
    return (
        <div className="bottomNav animated slideInUp" 
        style={{
            textAlign: 'center',
            position:'absolute', 
            bottom:'0', width:'100%', 
            padding: '1rem 0 1rem 0',
            backgroundColor: '#0f0f0f',
            color: 'white',
            fontSize: '1.3rem'
        }}>
            <Link to="/" style={{color: 'white'}}>Home</Link> | <Link to="/more" style={{color: 'white'}}>More</Link> | <Link to="/projects" style={{color: 'white'}}>Projects</Link> | <Link to="/languagestools" style={{color: 'white'}}>Languages/Tools</Link>
        </div>
    );
  }
}

export default FooterNav;
