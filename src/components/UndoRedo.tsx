import useUndoRedo from '../custom-hooks/use-undo-redo';

const UndoRedo = () => {
  const { value, setValue, back, next, history, pointer } = useUndoRedo(0);
  return (
    <div>
      <p>Count - {value}</p>
      <p>Stack - {history.toString()}</p>
      <p>pointer - {pointer}</p>
      <div className='mt-4 flex gap-2'>
        <button
          onClick={() => setValue((v: number) => v + 1)}
          className='rounded-lg px-4 py-2 border border-green-600 '>
          Increment
        </button>
        <button
          onClick={() => setValue((v: number) => v - 1)}
          className='rounded-lg px-4 py-2 border border-green-600 '>
          Decrement
        </button>
        <button onClick={back} className='rounded-lg px-4 py-2 border border-green-600 disabled:text-gray-400'>
          Undo
        </button>
        <button onClick={next} className='rounded-lg px-4 py-2 border border-green-600 disabled:text-gray-400 '>
          Redo
        </button>
      </div>
    </div>
  );
};

export default UndoRedo;
