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
  Heading,
} from "@react-email/components";
import * as React from "react";

export const Sandbox = () => (
  <Html>
    <Head />
    <Preview>
      A layer 2 off-chain network built on top of blockchain to help extend
      network capabilities.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://ci3.googleusercontent.com/meips/ADKq_NZEvsggByQ6CTpOXuaYctJg0xWsmwAJgA385VtqGwrZfel7iM_asI-T0KmAwpT4UmUeJ2Sh7onuRKgZys7r4vGHvtFmnSPoyI-uTHK9_RzIkrub9l4TFSjtC8abxptjKp7TRHgHKC5EvOiAZbGDwO7qz0cmxGsi-x1AXJvbY4Dhpfhq0-CJ-lgL98pP7ntp=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/65f0f326a47860004dfc97b7/original.png?1710289701"
          alt="logo"
          style={logo}
        />

        <Text style={paragraph}>
          We are excited to share that we now support Layer 2 networks,
          providing quicker transactions and lower fees
        </Text>

        <Text style={paragraph}>
          To experience these improvements, please update your profile by
          clicking the button below.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://layer2-sand-box.pages.dev/">
            UPDATE
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Sandbox;

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
  padding: "10px 0 0 0",
  width: "120px",
  height: "60px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#0384ff",
  borderRadius: "25px",
  color: "#fff",
  fontSize: "17px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "inline-block",
  padding: "12px",
  width: "200px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
