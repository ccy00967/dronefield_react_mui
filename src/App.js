import './App.css';
import { HomePage } from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/LoginPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  </div>
  );
}

export default App;
