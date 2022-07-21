import React from 'react';
import Navs from './Navs';
import Title from './Title';

// eslint-disable-next-line react/function-component-definition
const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Navs />

      {children}
    </div>
  );
};

export default MainPageLayout;
