import { FC } from "react";
import roadmap from "../utils/roadmap";
import Road from "../components/Roadmap/Road";

export type RoadmapType = {
  id: number;
  title: string;
  points: Array<string>;
};

const Roadmap: FC = () => {
  return (
    <div>
      {roadmap.map((roads) => {
        return <Road key={roads.id} roads={roads} />;
      })}
    </div>
  );
};

export default Roadmap;
