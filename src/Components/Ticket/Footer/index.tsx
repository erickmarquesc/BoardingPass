import { InfoContainer } from "../styles";
import { Attention, QrcodeContainer, SectionInfo } from "./styles";
import qr_code from "../../../assets/qr-code.png";

export function Footer() {
  return (
    <SectionInfo>
      <InfoContainer className="grid">
        <dl className="grid">
          <dt>
            <p>Embarque</p>
            <time>16:15</time>
          </dt>
          <dt>
            <p>Terminal</p>
            <strong>2</strong>
          </dt>
          <dt>
            <p>Portão</p>
            <strong>15</strong>
          </dt>
        </dl>

        <QrcodeContainer className="grid">
          <img src={qr_code} alt="imagem de um qrcode" />
          <p>Grupo de embarque: 3</p>
        </QrcodeContainer>
      </InfoContainer>
      <Attention><strong>Atenção:</strong> o portão fecha 16:45</Attention>
    </SectionInfo>
  );
};