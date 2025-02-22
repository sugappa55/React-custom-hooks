import useFetch from '../custom-hooks/use-fetch';

const params = {
  limit: 5
};

const FetchData = () => {
  const {
    data = [],
    loading,
    error
  } = useFetch<{ title: string; id: number }[], any>('https://fakestoreapi.com/product', params);

  if (loading) return <div className='flex justify-center items-center text-3xl'> Loading....</div>;
  if (error) <div className='flex justify-center items-center text-3xl text-red-600'> {error.message}</div>;
  return (
    <ul className='list-disc'>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default FetchData;
