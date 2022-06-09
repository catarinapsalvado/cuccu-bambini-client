import styled from "styled-components";

export const Cardtag = styled.div`
  margin: 30px;
  width: 25%;
  display: flex;
  display: inline-block;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  border-radius: 0.3rem;
/*   border: 1px solid black; */
  .title {
    text-align: center;
  }

  img {
    height: 10%;
    margin: 2px;
    @media only screen and (max-width:700px ){
    

  }
  }
  @media only screen and (max-width:700px ){
    
    flex-direction: column;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;
    
    
  }
`;
