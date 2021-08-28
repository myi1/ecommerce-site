import React from "react";
import "./Homepage.scss";

export default function Homepage() {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='menu-item__content'>
            <h1 className='menu-item__title'>HATS</h1>
            <span className='menu-item__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='menu-item__content'>
            <h1 className='menu-item__title'>JACKETS</h1>
            <span className='menu-item__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='menu-item__content'>
            <h1 className='menu-item__title'>SHOES</h1>
            <span className='menu-item__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='menu-item__content'>
            <h1 className='menu-item__title'>MENS</h1>
            <span className='menu-item__subtitle'>SHOP NOW</span>
          </div>
        </div>
        <div className='menu-item'>
          <div className='menu-item__content'>
            <h1 className='menu-item__title'>WOMENS</h1>
            <span className='menu-item__subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
}
