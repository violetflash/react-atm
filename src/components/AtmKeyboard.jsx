import React from 'react';
import { NumButton } from "../ui/NumButton/NumButton";
import { NumPadContainer } from "../styles/styles";

export const AtmKeyboard = () => {
  const numPad = Array.from(Array(9).keys()).map((n) => {
    const num = n + 1;
    return <NumButton key={num} text={num}/>
  });

  return (
    <NumPadContainer>
      {numPad}
    </NumPadContainer>
  );
};
