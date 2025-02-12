import TasksContainer from "../../compenents/TasksContainer";
import {
  activeTasks,
  completedTasks,
  inProgressTasks,
} from "../../data/dta-defs";
export default function Tasks() {
  return (
    <main className="flex-1 pb-48 mx-8 ">
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-2xl text-gray-600">Untitled</h2>
      </header>
      <section className="mb-8 flex flex-row">
        <div className="flex justify-evenly space-x-4">
          <div className=" bg-gray-200  flex-1 rounded-xl p-4">
            <p>Last Added: 12/04/2021</p>
            <p>Last Modified: 21/04/2021</p>
            <p>Last Deleted: Adyl, Azhar, Arthur</p>
          </div>
          <div className="flex flex-1 rounded-xl p-4 bg-gray-200 max-h-32">
            <p className="overflow-y-auto">
              This is a comprehensive internal management tool designed
              specifically for our organizational needs.
            </p>
          </div>

          <div className="bg-gray-200 p-4 px-8 rounded-2xl w-1/4  flex-1">
            <p>All tasks: 6</p>
            <p>Done: 0</p>
            <p>Deferred: 1</p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-8">
        <TasksContainer title="Active Tasks" allTasks={activeTasks} />
        <TasksContainer title="In Progress" allTasks={inProgressTasks} />
        <TasksContainer title="Completed" allTasks={completedTasks} />
      </section>
    </main>
  );
}
