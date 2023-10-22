/*
 * @Author: albert 15935628109@163.com
 * @Date: 2022-09-12 09:56:42
 * @LastEditors: albert 15935628109@163.com
 * @LastEditTime: 2023-08-06 10:03:36
 * @FilePath: /react17-webpack5-template/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About/about';
import Login from './pages/Login/login';
import Tiptap from './pages/Tiptap/tiptap.jsx';

export default function App() {
  useEffect(() => {
    // console.log('挂载成功---');
  }, []);

  return (
    <div>
      <h1>App</h1>
      <Link to="/about">关于</Link>
      <Link to="/login">登录</Link>
      <Link to="/editor">富文本</Link>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<Tiptap />} />
      </Routes>
    </div>
  );
}
