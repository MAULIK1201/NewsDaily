import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const countries = [
  { code: 'in', name: 'India' },
  { code: 'us', name: 'United States' },
  { code: 'ru', name: 'Russia' },
  { code: 'ca', name: 'Canada' },
  { code: 'ae', name: 'United Arab Emirates' },
  { code: 'za', name: 'South Africa' },
  { code: 'cn', name: 'China' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'de', name: 'Germany' },
  { code: 'ch', name: 'Switzerland' },
  { code: 'eg', name: 'Egypt' },
  { code: 'fr', name: 'France' },
  { code: 'nz', name: 'New Zealand' },
  { code: 'sa', name: 'Saudi Arabia' },
  { code: 'se', name: 'Sweden' },
  { code: 'sg', name: 'Singapore' },

];

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      collapsed: true,
      countryClicked: true,
      selectedCountry: 'in',
    };
  }

  handleCatClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  handleCountryClick = () => {
    this.setState((prevState) => ({ countryClicked: !prevState.countryClicked }));
  };

  handleCountrySelect = (country) => {
    this.setState({ selectedCountry: country, countryClicked: false });
  };

  ToggleIt = () => {
    this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
  };

  render() {
    const { clicked, collapsed, countryClicked, selectedCountry } = this.state;

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">News Daily</Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={this.ToggleIt}
              aria-controls="navbarSupportedContent"
              aria-expanded={!collapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="categoryDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={clicked ? "true" : "false"}
                    onClick={this.handleCatClick}
                  >
                    Category
                  </Link>
                  <ul className={`dropdown-menu ${clicked ? 'show' : ''}`} aria-labelledby="categoryDropdown">
                    <li><Link className="dropdown-item" to={`/${selectedCountry}/business`}>Business</Link></li>
                    <li><Link className="dropdown-item" to={`/${selectedCountry}/entertainment`}>Entertainment</Link></li>
                    <li><Link className="dropdown-item" to={`/${selectedCountry}/`}>General</Link></li>
                    <li><Link className="dropdown-item" to={`/${selectedCountry}/science`}>Science</Link></li>
                    <li><Link className="dropdown-item" to={`/${selectedCountry}/sports`}>Sports</Link></li>
                    <li><Link className="dropdown-item" to={`/${selectedCountry}/technology`}>Technology</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="countryDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={countryClicked ? "true" : "false"}
                    onClick={this.handleCountryClick}
                  >
                    Country
                  </Link>
                  <ul className={`dropdown-menu overflow-auto ${countryClicked ? 'show' : ''}`} aria-labelledby="countryDropdown" style={{ maxHeight: '200px' }}>
                    {countries.map((country) => (
                      <li key={country.code}>
                        <Link
                          className="dropdown-item"
                          to={`/${country.code}/`}
                          onClick={() => this.handleCountrySelect(country.code)}
                        >
                          {country.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
