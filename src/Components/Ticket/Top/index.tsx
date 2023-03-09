import { InfoContainer } from "../styles";
import { AirplaneContainer, DepartureArrivalContainer, TopContainer } from "./styles";
import ion_airplane from "../../../assets/ion_airplane.svg";

export function TopTicket() {
  return (
    <TopContainer className="grid">
      <InfoContainer className="grid">
        <div>
          <p>Voo</p>
          <strong>RS995</strong>
        </div>
        <div className="text-right">
          <p>Data</p>
          <strong>23/05/2023</strong>
        </div>
      </InfoContainer>
      <InfoContainer>
        <DepartureArrivalContainer >
          <p>São Paulo, Brasil</p>
          <strong>GRU</strong>
          <time>17:00</time>
        </DepartureArrivalContainer>
        <AirplaneContainer className="grid">
          <img src={ion_airplane} alt="ícone de um avião" />
        </AirplaneContainer>
        <DepartureArrivalContainer className="text-right">
          <p>São Francisco, EUA</p>
          <strong>SFO</strong>
          <time>04:48 <sup>+1</sup></time>
        </DepartureArrivalContainer>
      </InfoContainer>
    </TopContainer>
  );
};