import React, { useState } from "react";

const Card = ({ title, getCount }) => {
  const [count, setCount] = useState(0);
  // int a = 9; => count
  // a = 10; => setCount
  const clickTambah = () => {
    setCount(count + 1);
    getCount();
  };

  return (
    <div>
      <p>{title}</p>
      <p>Jumlah : {count}</p>
      <button onClick={clickTambah}>Tambah</button>
    </div>
  );
};

export default Card;
