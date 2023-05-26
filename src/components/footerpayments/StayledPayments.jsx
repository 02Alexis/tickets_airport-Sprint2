import styled from "styled-components";

export const StyledTitle = styled.h3`
margin-bottom: 1rem;
`;

export const StayledArticle = styled.article`
display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 20px;
box-shadow:0 10px 20px -10px rgba(0, 0, 0, 0.2);
padding: 10px;
border: 1px solid rgb(238, 238, 238);
padding: 40px 40px 40px;
margin-bottom: 3rem;

h4 {
    margin-bottom: 1rem;
    font-weight: lighter;
  }

ul {
    display: flex;
    gap: 2rem;
    cursor: pointer;
}

`;
