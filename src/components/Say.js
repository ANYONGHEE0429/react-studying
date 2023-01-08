import React, { useState } from 'react';

const Say = () => {
  //message: 상태값 저장 함수 setMesaage: 상태값 갱신함수
  const [message, setMessage] = useState('');

  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히가세요');
  const array = [
    { id: 1, value: false },
    { id: 2, value: true },
    { id: 3, value: false },
  ];

  let nextArray = array.concat({ id: 4, value: true });
  nextArray.filter((item) => item.id !== 2);
  nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item));

  console.log('result', nextArray);

  const [color, setColor] = useState('black');
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간맛
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란맛
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록맛
      </button>
    </div>
  );
};

export default Say;
