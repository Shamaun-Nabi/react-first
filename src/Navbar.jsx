import React, { useState } from "react";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState("AUS");

  const handleCountryChange = (country) => {
    console.log(selectedCountry);
    setSelectedCountry(country);
  };

  const renderMenuList = () => {
    const countries = ["BGD", "AUS", "GER", "SIN", "UAE", "UK", "USA"];

    return (
      <ul className="menu-list">
        {countries.map((country) => (
          <li
            key={country}
            // className={country === selectedCountry ? "active" : ""}
            onClick={() => handleCountryChange(country)}
          >
            {country}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="navbar">
      <div
        className="menu-item"
        onMouseEnter={() => handleCountryChange(selectedCountry)}
      >
        {selectedCountry}
        {selectedCountry && renderMenuList()}
      </div>
      <div className="menu-item">
        Find a Store
        {/* Add Find a Store content here */}
      </div>
      <div className="menu-item">
        Customer Service
        {/* Add Customer Service content here */}
      </div>
    </nav>
  );
};

export default Navbar;
