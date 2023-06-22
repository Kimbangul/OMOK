import styled from "styled-components";

export const TableStyle = {
  Wrap: styled.div`
  padding: 2.4rem;
  border-radius: 1.6rem;
   ${props => props.theme.GlassStyle};
  `,
  Container: styled.table`
    border-collapse: collapse;
  `
}