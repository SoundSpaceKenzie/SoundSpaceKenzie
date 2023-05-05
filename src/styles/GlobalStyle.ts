import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: Inter;
}

:root{
  font-family: 'Inter', sans-serif;
  
  --color-primary:#1A001D;
  --color-secundary:#11DCDA;
  --grey-5:#191C1F;
  --grey-4:#212529;
  --grey-3: #343A40;
  --grey-2: #ADB5BD;
  --grey-1:#CED4DA;
  --grey-0:#F5F5F5;
}

button{
  cursor: pointer;
}
`;
