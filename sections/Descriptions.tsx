import { FC } from "react";
import descriptions from "../utils/description";

import Description from "../components/Description/Description";

export type DescriptionType = {
  id: number;
  title: string;
  description: string;
};

const Descriptions: FC = () => {
  return (
    <div>
      {descriptions.map((description) => {
        return <Description key={description.id} description={description} />;
      })}
    </div>
  );
};

export default Descriptions;
