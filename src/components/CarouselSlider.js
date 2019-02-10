import React from "react";
import data from "../carousel-sliders.json"; // json data for the slides
import scrollTo from "../smoothSlide"; // for smooth slide animation
import Slide from "./Slide";

class CarouselSlider extends React.Component {
  state = {
    navIndicator: 1,
    navClass: "selected1"
  };

  incrementCounter = () => {
    this.setState({
      navIndicator: this.state.navIndicator + 1,
      navClass: `selected${this.state.navIndicator + 1}`
    });
  };

  decreaseCounter = () => {
    this.setState({
      navIndicator: this.state.navIndicator - 1 || 1,
      navClass: `selected${this.state.navIndicator - 1 || 1}`
    });
  };

  handleClick = e => {
    const clickValue = e.currentTarget.value;
    const { viewport } = this.refs;
    let widthOfSlide = viewport.offsetWidth;
    let scrollPosition = viewport.scrollLeft + widthOfSlide;

    if (clickValue === "right") {
      if (this.state.navIndicator < 3) {
        scrollTo(viewport, scrollPosition, 100, "scrollLeft");
        this.incrementCounter();
      }
    } else if (clickValue === "left") {
      this.decreaseCounter();
      let scrollPosition = viewport.scrollLeft - widthOfSlide;
      scrollTo(viewport, scrollPosition, 100, "scrollLeft");
    } else if (clickValue === "3") {
      this.setState({
        navIndicator: 3,
        navClass: "selected3"
      });
      let scrollPosition = widthOfSlide * 2;
      scrollTo(viewport, scrollPosition, 100, "scrollLeft");
    } else if (clickValue === "2") {
      this.setState({
        navIndicator: 2,
        navClass: "selected2"
      });
      let scrollPosition = widthOfSlide;
      scrollTo(viewport, scrollPosition, 100, "scrollLeft");
    } else {
      this.setState({
        navIndicator: 1,
        navClass: "selected1"
      });
      scrollTo(viewport, 0, 100, "scrollLeft");
    }
  };
  renderSlides() {
    return data.map((item, key) => {
      return (
        <Slide
          key={key}
          title={item.title}
          description={item.description}
          img_src={item.img_src}
        />
      );
    });
  }
  render() {
    return (
      <div className="carousel-container">
        <button
          className="slide-arrow left"
          onClick={this.handleClick}
          value="left"
        >
          <img src="/images/left-arrow.png" alt="" />
        </button>
        <div className="carousel-viewport" ref="viewport">
          {this.renderSlides()}
          <div className="slider-nav">
            <button
              id="nav1"
              value="1"
              onClick={this.handleClick}
              className={this.state.navClass}
            />
            <button
              id="nav2"
              value="2"
              onClick={this.handleClick}
              className={this.state.navClass}
            />
            <button
              id="nav3"
              value="3"
              onClick={this.handleClick}
              className={this.state.navClass}
            />
          </div>
        </div>
        <button
          className="slide-arrow right"
          onClick={this.handleClick}
          value="right"
        >
          <img src="/images/right-arrow.png" alt="" />
        </button>
      </div>
    );
  }
}

export default CarouselSlider;
