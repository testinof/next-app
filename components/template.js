import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export const Template = () => (
  <Html>
    <Head />
    <Preview>Upgrade your Profile to Claim Layer 2 Benfits</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://miro.medium.com/v2/resize:fit:1200/1*nrwLA4CF6owjCQxWjeMt0g.jpeg"
          alt="Connect-logo"
          width="200"
          height="80"
          style={logo}
        />

        <Text style={paragraph}>
          We are pleased to announce support for Layer 2 networks, providing
          faster transactions and lower fees.
        </Text>
        <Text style={paragraph}>
          To upgrade your wallet to enjoy the Layer-2 benefits, please click
          button below.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://getkoala.com">
            UPGRADE
          </Button>
        </Section>
        <Text style={paragraph}>
          Best Regards.
          <br />
          {/* For further assistance, visit our{" "}
          <Link href="https://google.com">Support Page</Link> . */}
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Template;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#7E8EF1",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
