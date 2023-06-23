import styled from "styled-components";

export const AppStyle = {
  Container: styled.section`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right,#002f4bA0,#dc4225A0);
	  /* opacity: 0.6;  */
  `,
  Inner: styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  `,
  Menu: styled.div`
    align-self: flex-start;
  `
}