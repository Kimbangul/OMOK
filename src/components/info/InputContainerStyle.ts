import styled from "styled-components";

export const InputContainerStyle = {
  Container: styled.form`
    padding: 2.4rem;
    border-radius: 1.6rem;
    background: #ffffff20;
    min-width: 360px;
    margin-bottom: 2.4rem;
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
  `,
  RowInfo: styled.div`
    font-size: 2.4rem;
    color: #fff;
  `,
  Loading: {
    Container: styled.div`
      display: flex;
      justify-content: center;     
      gap: 1.6rem;
      position: relative;
      height: 6rem;
      margin-top: 3rem;
    `,
    Spinner: styled.div`
    @keyframes spin { 
      100% { 
        transform: rotate(360deg); 
      } 
    } 
      box-sizing: border-box;
      width: 8rem;
      height: 8rem;
      border-radius: 100%;
      border: 1rem solid rgba(255, 255, 255, 0.2);
      border-top-color: #fff;
      animation: spin 1s infinite linear;
    `,
    Dot: styled.div`
          @keyframes circle{
          0%{
              margin-top:3rem;
              height:0.5rem;
              border-radius: 5rem 5rem 2.5rem 2.5rem;
              transform: scaleX(1.7);
          }
          40%{
              height:1rem;
              border-radius: 50%;
              transform: scaleX(1);
          }
          100%{
             margin-top: 0;
          }
      }     
          width:1rem;
          height:1rem;
       //   position: absolute;
          border-radius: 50%;
          background-color: #fff;
          transform-origin: 50%;
          animation: circle .5s alternate infinite ease;

         &:nth-child(2){
          animation-delay: .2s;
         }
        &:nth-child(3){
          animation-delay: .3s;
         }
    `,
    Text: styled.p`
      color: #fff;
      text-align: center;
      font-size: 1.6rem;
      margin-top: 2.4rem;
      margin-bottom: 0.8rem;
    `
  }
}

export const StartInputContainer = styled(InputContainerStyle.Container)`
  align-self: flex-start;
`;
