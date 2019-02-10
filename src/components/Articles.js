import React from "react";
import articles from "../articles.json"; // json data for the articles
import Article from "./Article";

class Articles extends React.Component {
  renderArticles() {
    return articles.map((item, key) => {
      return (
        <Article
          key={key}
          title={item.title}
          excerpt={item.excerpt}
          img_src={item.img_src}
          img_hover_src={item.img_hover_src}
          date={item.date}
        />
      );
    });
  }

  render() {
    return (
      <div className="article-section">
        <a href="dummy">{this.renderArticles()}</a>
        <div className="align-center">
          <a href="dummy" className="more-btn">
            More<span>></span>
          </a>
        </div>
      </div>
    );
  }
}

export default Articles;
