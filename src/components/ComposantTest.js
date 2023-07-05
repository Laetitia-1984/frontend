import { useState, useEffect } from "react";

export default function ComposantText() {
  // notre composant 

  // le state 
  const [count, setCount] = useState(0);

  const incrementer = () => {
    setCount(count + 1); 
  }

  const decrementer = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    // fonctionne executer ( tu le sera bientot ) 
    incrementer(); 
  }, [])

  return (
    <div>
      <h1>Mon super composant </h1>
      <p>le compteur est à : {count}</p>
      <button onClick={incrementer}>incrementer</button><br />
      <button onClick={decrementer}>desincrementer</button>
    </div>
  )
}