import useForm from '../custom-hooks/use-form';

const Form = () => {
  const { clearForm, handleUpdateForm, formState } = useForm<{
    email: string;
    mobile?: number | string;
  }>({ email: '', mobile: '' });
  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={e => {
        e.preventDefault();
        console.log(formState);
        clearForm();
      }}>
      <input
        className='px-4 py-2 bg-transparent border rounded-lg border-green-600 w-[500px] outline-none dark:hover:border-white'
        type='email'
        name='email'
        placeholder='Enter email'
        value={formState.email}
        onChange={handleUpdateForm}
      />
      <input
        className='px-4 py-2 bg-transparent border rounded-lg border-green-600 w-[500px] outline-none'
        type='number'
        name='mobile'
        placeholder='Enter mobile'
        value={formState.mobile}
        onChange={handleUpdateForm}
      />
      <button className='px-4 py-2 border rounded-lg border-green-600' type='submit'>
        Submit
      </button>
      <button className='px-4 py-2 border rounded-lg border-red-600' onClick={clearForm}>
        Clear form
      </button>
    </form>
  );
};

export default Form;
