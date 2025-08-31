import CourseGoal from "./CourseGoal";
import { type CourseGoalProps } from "../App";
type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} onDelete={onDeleteGoal} title={goal.title}>
            {goal.description}
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
