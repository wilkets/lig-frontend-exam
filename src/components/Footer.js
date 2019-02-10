import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-left">
            <p>
              <a href="javascript:void(0)">運営会社</a>
              <a href="javascript:void(0)">個人情報保護について</a>
            </p>
          </div>
          <div className="footer-right">
            <p>&copy;2016 Sample</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
