import React from 'react';

class Header extends React.Component {
  render() {
    return (
      // the <> syntax is partial and "acts" like a parent element
      <>
        <div>
          <h1>Horned Beast</h1>
          <nav>
            <ul>
              <li>Nav one</li>
              <li>Nav one</li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
}

export default Header;
