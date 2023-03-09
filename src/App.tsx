import { Container } from "./Components/Conteinar/styles";
import { Ticket } from "./Components/Ticket";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <Container>
      <GlobalStyle/>
      <h1>Cartão de embarque</h1>
      <Ticket />
      <footer>
        Qualquer problema procure o balcão de atendimento da sua companhia aérea
      </footer>
    </Container>
  );
};
