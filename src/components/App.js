import React from "react";
import Header from "./Header";
import CarouselSlider from "./CarouselSlider";
import Body from "./Body";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CarouselSlider />
        <Body />
        <Footer />
        <a href="#" className="scroll-top">
          <img src="/images/arrow-up.png" alt="" />
        </a>
      </React.Fragment>
    );
  }
}

export default App;
