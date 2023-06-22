import styled from "styled-components";

export const InputContainerStyle = {
  Container: styled.form`
    padding: 2.4rem;
    border-radius: 1.6rem;
    background: #ffffff20;
    min-width: 360px;
    ${props => props.theme.GlassStyle};
  `,
  Input: styled.input`
    ${props => props.theme.GlassInputStyle};
  `,
  ButtonContainer: styled.div`
    margin-top: 3.2rem;
  `,
  Label: styled.label`
    width: 100%;
    display: block;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 300;
    margin-top: 2rem;
    margin-bottom: 0.8rem;

    &:first-of-type{
      margin-top: 0;
    }
  `
}
