import styled from 'styled-components';
import { Button } from './LoginPage/LoginPage.styles';


export const ContainerProductDetails = styled.div `
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    span {
      font-weight: bold;
    }
   ` 
  export const ContainerAllProductDetails = styled.div`
    display: flex;
    flex-direction: row;
  
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-size: 1.7rem;
    font-weight: bold;
    span {
      font-weight: bold;
    }
  `