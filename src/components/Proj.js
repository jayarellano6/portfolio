import React, { Component } from 'react'

export class Proj extends Component {
  render() {
    return (
      <div>
        <div style={{margin: '6.5% 0 4% 4%'}}>
          <h3 className="ui header animated fadeInDown" style={{color: 'white'}}>
            <div className="content" style={contSty}>
                Some of my Projects
            </div>
          </h3>  
        </div>

        <div className="ui divided list">
          <div className="item animated slideInLeft" style={{animationDelay: '0s', padding: '.5% 4% .9% 4%'}}>
            <div className="content">
              <h1 className="header" style={{color: 'white'}}>Logic Proof Checker</h1>
              <div className="description" style={{color: 'white', paddingTop: '1%'}}>
                Constructed a web application, in a team of two, for an ‘Intro to logic’ course at Cal State Monterey Bay, 
                based on the course textbook, to provide a place for students to easily check their logical proofs and receive 
                instant feedback on whether or not they were correct and where in the proof they went wrong. The professor was 
                also provided an admin page where they would be able to create proofs for the students to solve and download their 
                students proofs data into a csv file. The logic checking was derived from the open source ‘Open Logic Project’ in 
                PHP. Frontend was implemented in vanilla javascript, HTML, CSS and the Semantic development framework. Backend was 
                developed using Java, Spring boot, and Mongodb to save user and proof data.
              </div>
              <i className="fa fa-github" style={{fontSize:"150%", color:"white", paddingTop: '1%'}}></i>
              <a className="aProj" href="https://github.com/logic-proof-checker" style={{color: 'white', verticalAlign: 'text-top', marginLeft: '1%'}}>view on github</a>
            </div>
          </div>
          <div className="item animated slideInLeft" style={{animationDelay: '.5s', padding: '.5% 4% .9% 4%'}}>
            <div className="content">
              <h1 className="header" style={{color: 'white'}}>Reported (iOS App)</h1>
              <div className="description" style={{color: 'white', paddingTop: '1%'}}>
              Developed a crowd sourcing iOS application, in a team of three, where users would be able to create an account and 
              create posts (Reports) on various issues like potholes, graffiti, and excessive amounts of litter. These issues would 
              then be displayed on the map page where a user could tap on a respective issue and view the full details of that issue. 
              The application also contains and alerts page and a profile page. The alerts page is where every issue within a 40 
              mile radius of the user's current location will appear to them. In the profile page a user can view all of the reports
              they have made.I The project was implemented the app using Swift, Mapkit, and Parse for the database.
              </div>
              <i className="fa fa-github" style={{fontSize:"150%", color:"white", paddingTop: '1%'}}></i>
              <a className="aProj" href="https://github.com/threesannin" style={{color: 'white', verticalAlign: 'text-top', marginLeft: '1%'}}>view on github</a>
            </div>
          </div>
          <div className="item animated slideInLeft" style={{animationDelay: '1s', padding: '.5% 4% .9% 4%'}}>
            <div className="content">
              <h1 className="header" style={{color: 'white'}}>Pet Supply Shop Web App</h1>
              <div className="description" style={{color: 'white', paddingTop: '1%'}}>
              Created a web application, in a team of two, in which sample user could choose from a small list of items in a 
              database to place in their cart and purchase with user ‘credits’. The user would be able to view all of the items 
              in a list view in which the user can see the items picture, name and price. The user could click on a specific 
              item to view that items detailed description along with the same information from the list view. Implemented the 
              project in a team, using Angular/Typescript, HTML, and CSS for the frontend and Java, Mongodb, and Spring Boot 
              for the backend.
              </div>
              <i className="fa fa-github" style={{fontSize:"150%", color:"white", paddingTop: '1%'}}></i>
              <a className="aProj" href="https://github.com/cst438petshop7" style={{color: 'white', verticalAlign: 'text-top', marginLeft: '1%'}}>view on github</a>
            </div>
          </div>
      </div>
      <hr></hr>
      <div style={{
        textAlign: 'center',
        marginTop: '100px',
        marginBottom: '60px'
      }}>
          <h4 className="ui icon header animated fadeIn" style={{color: 'white'}}>
            <i className="fa fa-github" style={{fontSize:'3rem'}}></i>
            <div className="content">
              View more of my projects on github
              <div className="sub header" style={{color: 'white'}}><a className="aProj" href="https://github.com/jayarellano6" style={{color: "white"}}>take me to github</a><i className='fas fa-external-link-alt' style={{paddingLeft:'5px', fontSize: '1rem'}}></i></div>
            </div>
          </h4>
      </div>
      </div>
    )
  }
}
const contSty = {
  height: '100%',
  verticalAlign: 'middle',
  fontSize: '3.4rem',
  fontWeight: 'normal',
  textDecoration: 'underline',
  letterSpacing: '.1rem',
  wordSpacing: '.2rem'
}

export default Proj
