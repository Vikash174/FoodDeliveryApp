import { createContext, useContext, useState } from 'react';

const HelpPageDataContext = createContext();

const HelpPageDataProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <HelpPageDataContext.Provider value={{ apiData, fetchData }}>
      {children}
    </HelpPageDataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(HelpPageDataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export { HelpPageDataProvider, useData };
