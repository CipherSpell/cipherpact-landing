import { FC } from "react";
import configs from "../utils/configs";

const Heading: FC = () => {
  return (
    <div>
      <h1>{configs.app_name}</h1>
      <h1>{configs.app_header}</h1>
      <p>{configs.description}</p>
    </div>
  );
};

export default Heading;
