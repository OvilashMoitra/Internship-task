import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Page Container/Home/Home';
import NotFound from './Page Container/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
