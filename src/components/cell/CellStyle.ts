import styled from "styled-components"

export const CellStyle = {
  Container: styled.td`
    width: 6.4rem;
    min-width: 6.4rem;
    height: 6.4rem;
    min-height: 6.4rem;
    position: relative;
    border: 0.1rem solid #000;
    cursor: pointer;

    text-align: center;
    font-size: 3.2rem;

    &:hover{
      border: 0.1rem solid pink;
    }

    /* &::after, &::before{
      content: "";
      display: block;
      width: 100%;
      height: 0.1rem;
      position: absolute;
      top: 50%;
      left: 0;
      background: #222;
      transform: translateY(-50%);
    }

    &::before{
      transform: rotate(90deg) translateY(-50%);
    } */
  `
}