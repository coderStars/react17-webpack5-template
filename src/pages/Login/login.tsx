import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    console.log('login页面挂载成功---')
  }, [])

  return <div>
    <h2>login页面</h2>
  </div>
}
