import { FC } from 'react';
import { DescriptionType } from '../../sections/Descriptions';

type DescriptionProps = {
  description: DescriptionType;
};

const Description: FC<DescriptionProps> = ({ description }) => {
  return (
    <div>
      <h1>{description.title}</h1>
      <p>{description.description}</p>
    </div>
  );
};

export default Description;
