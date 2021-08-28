import React, { Component } from "react";
import "./Directory.scss";
import { Sections } from "../../util";
import MenuItem from "../MenuItem/MenuItem";

export default class Directory extends Component {
  state = {
    sections: Sections,
  };
  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
