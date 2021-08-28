import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className={`${size} menu-item__background-image`}></div>
      <div className='menu-item__content'>
        <h1 className='menu-item__title'>{title}</h1>
        <span className='menu-item__subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
