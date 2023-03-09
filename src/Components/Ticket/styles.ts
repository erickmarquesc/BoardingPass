import styled from "styled-components";

export const TicketContainer = styled.main`
  .grid{
    display: grid;
  }
  
  .column{

    grid-auto-flow: column;
  }
    
  .text-right {
      filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.25));
      text-align: right;
    }
`;

export const InfoContainer = styled.div`
  gap: 0.8rem;
  align-items: center;
  grid-auto-flow: column;

  dl.grid {
    gap: 1.6rem;
    min-width: 9.5rem;
  }

  dt time {
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    background: #633bbc;
    border-radius: 0.8rem;
    padding: 0.4rem 0.8rem;
    display: inline-block;
    margin-top: 0.2rem;
  }
`;
