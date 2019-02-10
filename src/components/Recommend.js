import React from "react";

class Recommend extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: props.img_src };
  }

  onMouseEnterHandler = () => {
    const { img_hover_src } = this.props;
    this.setState({ image: img_hover_src });
  };

  onMouseLeaveHandler = () => {
    const { img_src } = this.props;
    this.setState({ image: img_src });
  };

  render() {
    const { title, date } = this.props;
    return (
      <article>
        <img
          src={this.state.image}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
          alt=""
        />
        <div className="recommend-info">
          <h4>{title}</h4>
          <span>{date}</span>
        </div>
      </article>
    );
  }
}

export default Recommend;
