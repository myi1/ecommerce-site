import React, { Component } from "react";
import "./Directory.scss";
import { SECTIONS_DATA } from "../../data/SECTIONS_DATA";
import MenuItem from "../MenuItem/MenuItem";

export default class Directory extends Component {
  state = {
    sections: SECTIONS_DATA,
  };
  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
