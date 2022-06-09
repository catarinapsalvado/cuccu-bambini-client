import styled from "styled-components";

export const Cardtag = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border-radius: 0.3rem;
  .cardContainer {
    width: 28%;
  }
  .title {
    text-align: center;
  }

  img {
    height: 300px;
  }
  @media only screen and (max-width: 700px) {
    .cardContainer {
      width: 100%;
    }
  }
`;

// flex-direction: column;
// display: grid;
// grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// grid-gap: 10px;
