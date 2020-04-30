import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,border-style,html{
  margin:0;
  padding:0;
  border:0;
  box-sizing:border-box; 
  outline:none;
}
#root,body,html{
  height:100%;
}
#root{
  background:#121212;
  font-size:10px;
  font-family:sans-serif;
  display:flex;
  justify-content:center;
  align-items:center;
}
`;
