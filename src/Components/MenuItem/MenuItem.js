import React from "react";
import "./MenuItem.scss";

export default function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
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
