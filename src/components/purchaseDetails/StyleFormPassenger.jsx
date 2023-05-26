import styled from "styled-components";

export const StyleForm = styled.form`
  background-color: #f2f2f2;
  max-width: 700px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
  border: 1px solid #b9b9b9;
  
  h2 {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
     color: #9e1071;

    img {
      width: 40px;
      margin-right: 10px;
      
    }
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #b9b9b9;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    margin-bottom: 30px;
  }

  select {
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #b9b9b9;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    font-weight: 200;
  }

  button {
    padding: 20px;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 18px;
    font-weight: 100;
    letter-spacing: 10px;
    border-radius: 15px;
    background-color: #9e1071;
    display: flex;
    justify-content: center;
    width: 100%;

    &:hover {
      background-color: #9e1071;
      cursor: pointer;
      color: white;
      opacity: 0;
      animation-name: fadeIn;
      animation-duration: 0.9s;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      @keyframes fadeIn {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
`;
