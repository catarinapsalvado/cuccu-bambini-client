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
  color: #BB8FCE;
  font-size: 50px;
  padding: 16px;
  font-weight:830;
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

export const ButtonLogin = styled.button`
  
  min-width:10vw;
  margin: 2%;
  height: 10vh;
  align-content: center;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  color: #fff;
  background-color: #D2B4DE ;
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
  :hover {
      background-color:#BB8FCE;
      transition: 0.7s;
  }
`;


export const Button = styled.button`
  
  min-width: 10vw;
  min-height: 7vh;
  margin: 2%;
  align-content: center;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  color: #fff;
  background-color:	#D2B4DE;
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;

  :hover {
      background-color:#BB8FCE;
      transition: 0.7s;
  }
`;

