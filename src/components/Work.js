import React, {useState} from 'react'
import Component from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PROJECTS from '../data/projects'
import 'react-tabs/style/react-tabs.css';
import Projects from './Projects'

export const Work = props => {

  return (
    <div className="container work" id="work">
      <h1>Work</h1>

      <Tabs>
        <TabList>
          <Tab><div className="java tab-title">Java</div></Tab>
          <Tab><div className="python tab-title">Python</div></Tab>
          <Tab><div className="cplusplus tab-title">C++</div></Tab>
          <Tab><div className="js tab-title">Haskell</div></Tab>
        </TabList>

        <TabPanel>
          <Projects projects={PROJECTS.filter(project => project.type === 'Java')} type="Java" />
        </TabPanel>
        <TabPanel>
          <Projects projects={PROJECTS.filter(project => project.type === 'Python')} type="Python" />
        </TabPanel>
        <TabPanel>
          <Projects projects={PROJECTS.filter(project => project.type === 'C++')} type="C++" />
        </TabPanel>
        <TabPanel>
          <Projects projects={PROJECTS.filter(project => project.type === 'Haskell')} type="Haskell" />
        </TabPanel>
      </Tabs>
    </div>

    // return React.createElement('div', {className: "App"}, null, React.createElement('h1', null, 'I\'m a React App'));
  )
}

export default Work
