import { css } from 'styled-components';

export const GlassStyle = css`
    background: #ffffff20;
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.08);
    border: 0.1rem solid rgba(255,255,255,0.2);
    border-right: 0.1rem solid rgba(255,255,255,0.08);
    border-bottom: 0.1rem solid rgba(255,255,255,0.08);
    backdrop-filter: blur(2rem);
`

export const GlassInputStyle = css`
    outline: none;
    width: 50%;
    padding: 1.6rem 2.4rem;
    letter-spacing: 0.1rem;
    border-radius: 0.8rem;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    box-shadow:rgba(0, 0, 0, 0.05) 0px 0.5rem 0.5rem, rgba(0, 0, 0, 0.03) 0px 0.5rem 0.3rem inset;
    /* border: 0.1rem solid rgba(255, 255, 255, 0.5);
    border-right: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2); */
    width: 100%;
    border: none;

    transition: background 0.3s, color 0.3s, box-shadow 0.3s;

    &:focus{
      background: rgba(200, 200, 200, 0.3);
      box-shadow:rgba(0, 0, 0, 0.05) 0px 0.5rem 0.5rem, rgba(0, 0, 0, 0.05) 0px 0.5rem 0.3rem inset;
      color: #222;
    }
`

export const ButtonStyle = css<{color?: string}>`
  padding: 0.8rem 1.6rem;
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  ${
    props => props.color ?
    `background-image: ${props.color};`
    :
    `background-image: linear-gradient(to right,#FA7CBBC0  ,#F14658C0);`
  }
  //background-image: linear-gradient(to right,#FA7CBBC0  ,#F14658C0);
  /* background-image: linear-gradient(to right, #ff101d,#1a78e0); */
  /* border-right: 0.1rem solid rgba(255, 255, 255, 0.2); */
  border-top: 0.2rem solid rgba(255, 255, 255, 0.3);
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  text-shadow: rgba(0, 0, 0, 0.2) 0px 0.2rem 0.2rem;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.12);
  letter-spacing: 0.1em;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
`;

const Theme = {
  GlassInputStyle,
  GlassStyle,
  ButtonStyle
}

export default Theme;