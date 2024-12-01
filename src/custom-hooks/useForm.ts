import { useCallback, useState } from 'react';

const useForm = <T>(initState: T) => {
  const [formState, setFormState] = useState(initState);
  const handleUpdateForm = useCallback((e: any) => {
    const { name, value } = e.target || {};
    setFormState(p => ({ ...p, [name]: value }));
  }, []);

  const clearForm = useCallback(() => setFormState(initState), []);

  return { formState, handleUpdateForm, clearForm };
};

export default useForm;
