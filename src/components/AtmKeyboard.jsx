import React from 'react';
import { NumButton } from "../ui/NumButton/NumButton";
import { NumPadContainer } from "../styles/styles";

export const AtmKeyboard = () => {
    return (
        <NumPadContainer>
            <NumButton text="1"/>
            <NumButton text="2"/>
            <NumButton text="3"/>
            <NumButton text="4"/>
            <NumButton text="5"/>
            <NumButton text="6"/>
            <NumButton text="7"/>
            <NumButton text="8"/>
            <NumButton text="9"/>
        </NumPadContainer>
    );

};
