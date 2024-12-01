// import DebouncedInput from './components/DebouncedInput';
// import FetchData from './components/FetchData';
import { ChangeEvent, useState } from 'react';
import Form from './components/Form';
// import UndoRedo from './components/UndoRedo';
// import PreviousValue from './components/PreviousValue';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleMode = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) setDarkMode(e.target.id === 'dark');
  };
  return (
    <div
      className={`w-screen h-screen flex justify-center items-center 
        ${darkMode ? 'dark' : 'light'}`}>
      {/* <DebouncedInput /> */}
      {/* <PreviousValue /> */}
      {/* <FetchData /> */}
      {/* <UndoRedo /> */}

      <div className='w-screen h-screen flex justify-center items-center  dark:bg-black dark:text-white'>
        <div className='absolute top-0 right-0 flex gap-4 p-4'>
          <div>
            <input type='radio' defaultChecked={!darkMode} name='mode' id='light' onChange={handleToggleMode} />
            <label htmlFor='light' className='ml-2 cursor-pointer'>
              light
            </label>
          </div>
          <div>
            <input type='radio' name='mode' id='dark' defaultChecked={darkMode} onChange={handleToggleMode} />
            <label htmlFor='dark' className='ml-2 cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
