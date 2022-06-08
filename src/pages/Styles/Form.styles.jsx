import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
`; 

export const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  min-width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  padding: 30px 20px;
  width:40vw;
`;

export const Title = styled.h3`
  color: #444;
  font-size: 40px;
  padding: 16px;
`;

export const UserInput = styled.input`
  height: 40px;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #444;
  font-size: 16px;

  :focus {
    border-color: #ddd;
  }

  :hover {
    border-color: #ddd;
  }
`;

export const Button = styled.button`
  
  min-width:10vw;
  margin: 2%;
  height: 40px;
  align-content: center;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  color: #fff;
  background-color:	#93b9dc;
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
`;
