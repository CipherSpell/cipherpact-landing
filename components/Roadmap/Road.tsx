import { FC } from "react";
import { RoadmapType } from "../../sections/Roadmap";

type RoadProps = {
  roads: RoadmapType;
};

const Road: FC<RoadProps> = ({ roads }) => {
  return (
    <div>
      <h1>{roads.title}</h1>
      {roads.points.map((point, i) => {
        return (
          <ul key={i}>
            <li>{point}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Road;
