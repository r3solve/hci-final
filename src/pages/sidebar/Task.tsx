import TasksContainer from "../../compenents/TasksContainer";
import {
  // activeTasks,
  completedTasks,
  inProgressTasks,
} from "../../data/dta-defs";
import useTaskStore from "../../store/tasks.store";
export default function Tasks() {

  const {active, addTask} = useTaskStore();
  return (
    <main className="flex-1 pb-48 mx-8 ">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl text-gray-600">Untitled</h2>
      </header>
     
      <section className="grid grid-cols-3 gap-8">
        <TasksContainer title="Active Tasks" allTasks={active} />
        <TasksContainer title="In Progress" allTasks={inProgressTasks} />
        <TasksContainer title="Completed" allTasks={completedTasks} />
      </section>
    </main>
  );
}
