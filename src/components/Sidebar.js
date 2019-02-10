import React from "react";
import recommends from "../recommends.json"; // recommends data
import Recommend from "./Recommend";

class Sidebar extends React.Component {
  renderRecommends() {
    return recommends.map((item, key) => {
      return (
        <Recommend
          key={key}
          title={item.title}
          img_src={item.img_src}
          img_hover_src={item.img_hover_src}
          date={item.date}
        />
      );
    });
  }

  render() {
    return (
      <aside className="sidebar">
        <a href="dummy" className="dummy-banner">
          Dummy banner
        </a>
        <a href="dummy" className="recommend-section">
          <h2 className="align-center">Recommend</h2>
          {this.renderRecommends()}
        </a>
        <div className="dummy-banners">
          <a href="dummy">Dummy banner</a>
          <a href="dummy">Dummy banner</a>
          <a href="dummy">Dummy banner</a>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
