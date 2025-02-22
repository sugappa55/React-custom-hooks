import { useLocalStorage, useSessionStorage } from "@/custom-hooks/use-storage";
import React from "react";

const StorageComponent = () => {
  const [name, setName, clearName] = useLocalStorage("name", "test");
  const [age, setAge, clearAge] = useSessionStorage("age", 0);

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='name' />
      <input type='number' value={age} onChange={e => setAge(e.target.value)} placeholder='age' />
      <br />
      <h2>Local storage - {name}</h2>
      <h2>Session storage - {age}</h2>
      <button onClick={clearName}>Clear name</button>
      <button onClick={clearAge}>Clear age</button>
    </div>
  );
};

export default StorageComponent;
