import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    console.log('about页面挂载成功---');
  }, []);

  return (
    <div>
      <h2>about页面</h2>
    </div>
  );
}
