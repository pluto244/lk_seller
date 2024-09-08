import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif; /* Замените на вашу основную семейство шрифтов */
    background-color: #fff; 
    color: #333; /* Основной цвет текста */
    line-height: 1.6;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit; /* Чтобы ссылки наследовали цвет текста */
  }

  ul {
    list-style: none; /* Убирает маркеры у списка */
  }

  button {
    font-family: inherit; /* Наследует шрифты от родителя */
    cursor: pointer;
  }
`;

export default GlobalStyles;