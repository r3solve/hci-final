import { CircleHelp, MessageCircleQuestion } from "lucide-react";
import TasksContainer from "../../compenents/TasksContainer";
import {
  // activeTasks,
  completedTasks,
  inProgressTasks,
} from "../../data/dta-defs";
import useTaskStore from "../../store/tasks.store";
export default function Tasks() {
  const { active, addTask } = useTaskStore();
  return (
    <main className="flex-1 pb-48 mx-8 ">
      <section className="grid grid-cols-3 gap-8">
        <TasksContainer title="Active Tasks" allTasks={active} />
        <TasksContainer title="In Progress" allTasks={inProgressTasks} />
        <TasksContainer title="Completed" allTasks={completedTasks} />
      </section>

      <section>
        <button
          data-tip="click to get help"
          className="p-2  hover:bg-green-600  tooltip  fixed top-[90%] left-[90%] bg-green-500 text-white rounded-full"
        >
          <CircleHelp />
        </button>
      </section>
    </main>
  );
}
