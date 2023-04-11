import React from 'react';
import './HOC.css'
import { useState } from 'react';
import Func from './Func';

function HOC() {
    const [count, setCount] = useState(0);

    const handleOnClickfunc = () => {
        setCount(!count);
      }

  return (
    <div>
      <button className='btn1' onClick={handleOnClickfunc}>HOC Button</button>
      {count? <Func/>: null} 

    </div>
  )
}

export default HOC ;
