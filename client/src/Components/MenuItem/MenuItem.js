import React from "react";
import { withRouter } from "react-router-dom";
import {
  BackgroundImageContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
  ContentContainer,
} from "./MenuItem.styles";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);
