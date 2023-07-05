import styled from "styled-components"

export const ScoreStyle = {
  Container: styled.div`
    margin-top: 2.4rem;
    padding: 2.4rem;
    border-radius: 1.6rem;
    ${props => props.theme.GlassStyle};
  `,
  Title: styled.h2`
    color: #fff;
    font-size: 2.4rem;
    font-weight: 400;
  `,
  Player: {
    Container: styled.ul`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      margin-top: 2.4rem;
    `,
    Item: styled.li`
      color: #fff;
      font-size: 1.4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      /* &:nth-child(2n+1){
        &::after{
          content: ':';
          display: block;
        }
      } */
    `,
    Score: styled.span`
      font-size: 4rem;
      margin-top: 0.4rem;
    `
  }
}