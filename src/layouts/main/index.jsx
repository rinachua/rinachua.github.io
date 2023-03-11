import React, { Fragment } from 'react';

import HelloWorld from 'views/hello-world';
import AboutMe from 'views/about-me';
import Skills from 'views/skills';
import Projects from 'views/projects';

const Main = () => {
  return (
    <Fragment>
      <HelloWorld/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </Fragment>
  );
};

export default Main;
