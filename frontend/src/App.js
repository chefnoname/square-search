import { Route, Routes, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Home from './Components/HomePage';
import JobsPage from './Components/JobsPage';
import NavBar from './Components/NavBar';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
