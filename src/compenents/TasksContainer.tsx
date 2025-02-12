import { BadgePlus } from "lucide-react";
import TaskCard from "./TaskCard";
import { useRef, useCallback, useEffect } from "react";
import { Modal, Button } from "react-daisyui";

type Props = {
  title: string;
  allTasks: {
    title: string;
    description: string;
    priority: string;
    dateAdded: string;
  }[];
};

export default function TasksContainer({ title, allTasks }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.shiftKey && event.key === "a") {
        alert("Shift + A was pressed!");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [event]);

  return (
    <div className="bg-gray-100 p-4 rounded-xl w-full">
      <Modal ref={ref}>
        <Modal.Header className="font-bold">Add New Task</Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="taskName"
              >
                Task Name
              </label>
              <input
                id="taskName"
                type="text"
                placeholder="Enter task name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                id="priority"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter task description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog" className="space-x-4">
            <Button className="text-green-600 rounded-lg" type="submit">
              Add Task
            </Button>
            <Button type="submit" onClick={() => ref.current?.close()}>
              Close
            </Button>
          </form>
        </Modal.Actions>
      </Modal>
      <button className="flex items-center mb-4 ml-auto">
        <BadgePlus onClick={handleShow} className="text-green-500" />
      </button>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      {allTasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          description={task.description}
          priority={task.priority}
          dateAdded={task.dateAdded}
        />
      ))}
    </div>
  );
}
