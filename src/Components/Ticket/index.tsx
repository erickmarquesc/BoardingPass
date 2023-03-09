import { TicketContainer } from "./styles";
import { TopTicket } from "./Top";
import { Middle } from "./Middle";
import { Footer } from "./Footer";

export function Ticket() {
  return (
    <TicketContainer>
      <TopTicket/>
      <Middle/>
      <Footer/>
    </TicketContainer>
  );
};