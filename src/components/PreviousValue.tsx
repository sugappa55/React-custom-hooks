import { useState } from 'react';
import usePrevious from '../custom-hooks/usePrevious';

const PreviousValue = () => {
  const [count, setCount] = useState(0);
  const previousValue = usePrevious(count);

  const handleUpdateCount = (increment = true) => {
    setCount(v => (increment ? v + 1 : v - 1));
  };

  return (
    <div className=''>
      <p>Count - {count}</p>
      <p>Previous count - {previousValue}</p>
      <div className='flex gap-2'>
        <button className='px-4 py-2 border border-green-600 rounded-lg' onClick={() => handleUpdateCount()}>
          Increment
        </button>
        <button className='px-4 py-2 border border-green-600 rounded-lg' onClick={() => handleUpdateCount(false)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default PreviousValue;
