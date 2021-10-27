import { FC } from "react";
import configs from "../utils/configs";
import { Container } from "../styles/heading";

const Heading: FC = () => {
  return (
    <Container>
      <h1>{configs.app_name}</h1>
      <h1>{configs.app_header}</h1>
      <p>{configs.description}</p>
    </Container>
  );
};

export default Heading;
