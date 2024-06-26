import './App.css';
import React, { Component } from 'react';
import Navbar from './components/navbar';
import News from './components/news';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
const countries = [
  'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 
  'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 
  'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      PgSz: 9,
    };
  }

  render() {
    const { PgSz } = this.state;

    return (
      <Router>
        <div>
          <Navbar />
          <div className="container my-3">
            <Routes>
              <Route exact path="/About" element={<About></About>}/>
              <Route exact path="/" element={<News key="default" pageSize={PgSz} country="in" category="general" />} />
              {countries.map((country) => (
                <Route key={`general-${country}`} exact path={`/${country}`} element={<News key={`general-${country}`} pageSize={PgSz} country={country} category="general" />} />
              ))}
              {countries.map((country) => (
                <Route key={`sports-${country}`} exact path={`/${country}/sports`} element={<News key={`sports-${country}`} pageSize={PgSz} country={country} category="sports" />} />
              ))}
              {countries.map((country) => (
                <Route key={`business-${country}`} exact path={`/${country}/business`} element={<News key={`business-${country}`} pageSize={PgSz} country={country} category="business" />} />
              ))}
              {countries.map((country) => (
                <Route key={`technology-${country}`} exact path={`/${country}/technology`} element={<News key={`technology-${country}`} pageSize={PgSz} country={country} category="technology" />} />
              ))}
              {countries.map((country) => (
                <Route key={`science-${country}`} exact path={`/${country}/science`} element={<News key={`science-${country}`} pageSize={PgSz} country={country} category="science" />} />
              ))}
              {countries.map((country) => (
                <Route key={`entertainment-${country}`} exact path={`/${country}/entertainment`} element={<News key={`entertainment-${country}`} pageSize={PgSz} country={country} category="entertainment" />} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
