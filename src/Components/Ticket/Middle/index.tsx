import { MiddleContainer } from "./styles";

export function Middle() {
  return (
    <MiddleContainer className="grid">
      <div>
        <p>Passageiro</p>
        <strong>Erick Marques</strong>
      </div>
      <div className="seat text-right">
        <p>Assento</p>
        <strong>28A</strong>
      </div>
    </MiddleContainer>  
  );
};