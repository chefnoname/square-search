import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage';
import JobsPage from './Components/JobsPage';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      {/* Make it so when you click on 'Jobs' in NavBar it routes to jobs page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </>
  );
};

export default App;
