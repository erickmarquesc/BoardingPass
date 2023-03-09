import styled from "styled-components";

export const TopContainer = styled.section`
  gap: 2.4rem;
  display: grid;
  border-radius: 2.4rem 2.4rem 0 0;

  --mask: radial-gradient(1.2rem at 1.2rem bottom, #0000 93%, black) -1.2rem;
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;
`;

export const DepartureArrivalContainer = styled.div`
  width: 12.5rem;
  display: grid;
  strong{
    font-size: 4rem;
    line-height: 4.7rem;
  }
`;