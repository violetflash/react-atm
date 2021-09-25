import styled from 'styled-components';

export const NumButtonContainer = styled.button`
  flex-basis: calc((100% / 3) - 10px);
  margin: 0 0 10px 10px;
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  cursor: pointer;
  
  &:active {
    position: relative;
    top: 1px;
    right: 1px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
`;

export const NumPadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -10px;
  max-width: 400px;
  border: 2px solid #000;
`;