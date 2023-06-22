import styled, {css} from "styled-components"

export const CellStyle = {
  Container: styled.td<{state: null | number}>`
    width: 6.4rem;
    min-width: 6.4rem;
    height: 6.4rem;
    min-height: 6.4rem;
    position: relative;
    /* border: 0.1rem solid #ffffff35; */
    border: transparent;
    border-radius: 100%;
    cursor: pointer;
    background: transparent;
    transition: background 0.3s,;
    text-align: center;
    font-size: 3.2rem;

    &:hover{
      background-image: linear-gradient(to bottom,#ffffff40  ,#ffffff10);
    }

    ${props => typeof props.state === 'number' && 
      css`
        cursor: default;

        &:hover{
          background: transparent;
        }
      `
    };


    &::after, &::before{
      content: "";
      display: block;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      top: 50%;
      left: 0;
      background: #ffffff45;
      transform: translateY(-50%);
      z-index: -1;
    }

    &::before{
      transform: rotate(90deg) translateY(-50%);
    }
  `,

  Stone: styled.span`
    text-shadow: 0.2rem 0.4rem 0.5rem rgba(0,0,0,0.2), -0.2rem -0.4rem 0.4rem rgba(255,255,255,0.2);
  `
}