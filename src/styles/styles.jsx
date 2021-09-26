import styled from 'styled-components';

export const NumButtonContainer = styled.button`
  flex-basis: calc((100% / 3) - 20px);
  margin: 0 0 20px 20px;
  width: 60px;
  height: 80px;
  border: 1px solid #ccc;
  //box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  box-shadow: 0px 5px 0px #c4c4c4;
  cursor: pointer;
  
  &:active {
    position: relative;
    top: 5px;
    //box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    box-shadow: none;
  }
`;

export const NumPadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  //margin-left: -10px;
  max-width: 400px;
  //border: 2px solid #000;
`;