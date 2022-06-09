import styled from 'styled-components';




export const ImageCard = styled.img`
width: 50%;
height: auto;
@media only screen and (max-width:900px ){
  margin-left: 25%;
  margin-right:25%;
}


`;

  export const ContainerAllProductDetails = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    @media only screen and (max-width:900px ){
    flex-direction: column;
    align-content:center;
    justify-content: center; 
}
   
  `;

export const ContainerProductDetails = styled.div `
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    box-sizing: border-box;
    margin-left: 10%;
   ` ;