import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Articles extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="align-center dummy-page">
          <iframe
            title="Dummy Page"
            src="https://giphy.com/embed/hEc4k5pN17GZq"
            width="580"
            height="340"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
          <h1>This is a Dummy Page</h1>
          <a href="/" className="back-btn">
            Go back to Homepage
          </a>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Articles;
