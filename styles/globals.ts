import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    padding: 0px;
    margin: 0 auto;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    color: #fff;
    background-color: rgb(17,17,17);
  }
`;

// Buttons
export const Button = styled.button`
  top: 2em;
  border-radius: 12px;
  border: none;
  color: rgb(230, 233, 237);
  background-color: rgb(79, 69, 105);
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 32px;
  margin: 5px;
  &:hover {
    background-color: rgb(51, 54, 58);
    color: rgb(230, 233, 237);
    outline-style: solid;
    outline-color: rgb(17, 17, 17);
  }
`;

// Navigation Bar
export const NavigationBar = styled.div`
  width: 100%;
  a {
    padding: 1em;
    display: inline-block;
  }
`;

export const Links = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 1em;
  a {
    text-decoration: none;
  }
`;
