import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="align-center">
          <a href="/">
            <img src="/images/logo.png" alt="" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
