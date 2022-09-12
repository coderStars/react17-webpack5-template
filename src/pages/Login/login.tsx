import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    console.log('login页面挂载成功---');
  }, []);

  return (
    <div>
      <h2>login页面</h2>
    </div>
  );
}
