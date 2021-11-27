import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  top: -20px;
`;

export const ContentWrapper = styled.div`
max-width: 1234px;
margin: 0 auto;

`

export const Search = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 10px;
  flex-grow: 0.75;
  font-family: "poppins", sans-serif;
  transition: all 0.5s ease-in-out;

  &::placeholder {
    color: #818181;
  }
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 10px ;
  outline: none;
  border: none;
  cursor: pointer;
  background: #108ee9;
  color: white;
  transition: all 0.5s ease-in-out;
 
  

&:active{
    transform: scale(0.9);
    opacity: 0.8;
}
`;

export const ImageWrapper = styled.div`
  margin: 50px 10px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);

    & :nth-child(9) {
      grid-column-start: span 2;
    }

    & :nth-child(10) {
      grid-column-start: span 2;
    }
  }

  @media screen and (max-width: 500px){
    grid-template-columns: repeat(2,1fr);

    & :nth-child(9){
      grid-column-start: span 1;
    }
     & :nth-child(10){
       grid-column-start: span 1;
     }
  }

  


`;

export const ImageCard = styled.div`
max-width: 100%;
height: 300px;

`

export const Image = styled.img`
width: 100%;
height: 100%;
`

export const ButtonWrapper = styled.div`
max-width: 100%;
display: flex;
justify-content: space-evenly;

`