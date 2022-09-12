import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About/about';
import Login from './pages/Login/login';

export default function App() {
  useEffect(() => {
    console.log('挂载成功---');
  }, []);

  return (
    <div>
      <h1>App</h1>
      <Link to="/about">关于</Link>
      <Link to="/login">登录</Link>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Login />} />
      </Routes>
    </div>
  );
}
