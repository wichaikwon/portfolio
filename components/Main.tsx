import React, { Fragment } from 'react';
import Introduce from './sections/Introduce';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Project from './sections/Project';
const Main: React.FC = () => {
    return (
        <Fragment>
            <Introduce />
            <Skills />
            <Education />
            <Experience />
            <Project />
        </Fragment>
    );
};

export default Main;