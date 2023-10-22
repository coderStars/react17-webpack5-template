import { useEffect, useState } from 'react';

export default function About() {
  useEffect(() => {
    console.log('about页面挂载成功---');
  }, []);

  const [first, setfirst] = useState(0);

  function changeFirst() {
    setfirst(1);
    setfirst(2);
  }

  return (
    <div>
      <h2>about页面--{first}</h2>
      <button onClick={e => changeFirst()}>点击</button>
    </div>
  );
}
