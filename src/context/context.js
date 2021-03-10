import React from 'react';
import sublinks from '../constants/links';

const GatsbyContext = React.createContext();

//Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [links, setLinks] = React.useState(sublinks);
  return (
    <GatsbyContext.Provider value={{ isSidebarOpen: isSidebarOpen, links }}>
      {children}
    </GatsbyContext.Provider>
  );
};

export { GatsbyContext, GatsbyProvider };
