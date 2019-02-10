import React from "react";

class Article extends React.Component {
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
    const { title, excerpt, date } = this.props;
    return (
      <article>
        <img
          src={this.state.image}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
          alt=""
        />
        <div className="article-info">
          <span>{date}</span>
          <h3>{title}</h3>
          <p>{excerpt}</p>
        </div>
      </article>
    );
  }
}

export default Article;
