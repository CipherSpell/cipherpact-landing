import { FC } from "react";
import descriptions from "../utils/description";
import Description from "../components/Description/Description";

// Style
import { Container } from "../styles/description";

export type DescriptionType = {
  id: number;
  title: string;
  description: string;
};

const Descriptions: FC = () => {
  return (
    <Container>
      {descriptions.map((description) => {
        return <Description key={description.id} description={description} />;
      })}
    </Container>
  );
};

export default Descriptions;
