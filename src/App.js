import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro'
import FooterNav from './components/FooterNav'
import LanguagesTools from './components/LaguagesTools'
import Proj from './components/Proj.js'
import More from './components/More'

class App extends Component{
  state = {
    bgImgs: ['https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
               'https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 
               'https://images.pexels.com/photos/1115880/pexels-photo-1115880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/1139556/pexels-photo-1139556.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
               'https://images.pexels.com/photos/373893/pexels-photo-373893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/427747/pexels-photo-427747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/1306699/pexels-photo-1306699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/822321/pexels-photo-822321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/342008/pexels-photo-342008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
               'https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              ]
  }
  render(){

    return (
        <Router>
          <div className="App">
            <div className='container' style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('+ this.state.bgImgs[Math.floor(Math.random()*this.state.bgImgs.length)] + ')',
              backgroundSize: 'cover',
            }}>
              <Route exact path="/" component={Intro}/>
              <Route path="/languagestools" component={LanguagesTools}/>
              <Route path="/projects" component={Proj}/>
              <Route path="/more" component={More}/>
              <FooterNav/>
            </div>
          </div>
        </Router>
    );

  }
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
