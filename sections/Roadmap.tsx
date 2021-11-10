import { FC } from 'react';
import roadmap from '../utils/roadmap';
import Road from '../components/Roadmap/Road';
import { Container } from '../styles/roadmap';

export type RoadmapType = {
  id: number;
  title: string;
  points: Array<string>;
};

const Roadmap: FC = () => {
  return (
    <Container>
      {roadmap.map((roads) => {
        return <Road key={roads.id} roads={roads} />;
      })}
    </Container>
  );
};

export default Roadmap;
