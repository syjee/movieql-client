import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset};
  body{
    font-family: 'Maven Pro', sans-serif;
    background-color: #ff0000;
  }
  a{
      color:inherit;
  }
  main{
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;
