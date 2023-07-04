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
    `
  }
}