import React from "react";

class Slide extends React.Component {
  render() {
    const { title, description, img_src } = this.props;
    const slideBg = {
      backgroundImage: `url(${img_src})`
    };
    return (
      <div className="slide" style={slideBg}>
        <h1>{title}</h1>
        <pre>{description}</pre>
      </div>
    );
  }
}

export default Slide;
