import styled from "styled-components";

export const Cardtag = styled.div`
  margin: 30px;
  width: 25%;
  display: flex;
  display: inline-block;
 
  align-items: center;
 /*  */
  justify-content: space-between;
  border-radius: 15px;
  border-radius: 0.3rem;
/*   border: 1px solid black; */
  .title {
    text-align: center;
  }

  img {
    height: 40vh;
    margin: 2px;
    
  }
  @media only screen and (max-width:700px){
    flex-direction: column;
  /*   flex-wrap: wrap; */
  }
`;
