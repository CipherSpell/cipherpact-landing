import { FC } from 'react';
import configs from '../utils/configs';

//Styles
import {
  Container,
  Content,
  Title,
  Headline,
  Description,
} from '../styles/heading';
import { Button } from '../styles/globals';

const Heading: FC = () => {
  return (
    <Container>
      <Content>
        <Title>{configs.app_name}</Title>
        <Headline>{configs.app_header}</Headline>
        <Description>{configs.description}</Description>
        <Button>Start Now</Button>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};

export default Heading;
