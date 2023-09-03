import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);
  const addCash = cash => {
    dispatch({ type: 'addCash', payload: cash });
  };

  const getCash = cash => {
    dispatch({ type: 'getCash', payload: cash });
  };
  return (
    <>
      <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
      <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
      <p>Cash: {cash}</p>
    </>
  );
};
