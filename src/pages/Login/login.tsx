import { useEffect } from 'react';
import './login.scss';

export default function Login() {
  useEffect(() => {
    console.log('login页面挂载成功---');
  }, []);

  return (
    <div className='login'>
      <h2>login页面</h2>
    </div>
  );
}
