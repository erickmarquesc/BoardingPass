import styled from "styled-components";

export const SectionInfo = styled.section`

  border-radius: 0 0 2.4rem 2.4rem;

  --mask: radial-gradient(1.2rem at 1.2rem top, #0000 93%, black) -1.2rem;
  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;

`;

export const QrcodeContainer = styled.div`
  justify-items: center;
  display: grid;
`;

export const Attention = styled.p`
  text-align: center;
  margin-top: 2.4rem;
  font-size: 1.6rem;
  line-height: 2rem;
  color: rgba(0, 0, 0, 0.8);
`;
