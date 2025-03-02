import {
  BadgePlus,
  CirclePlus,
  CircleSlash2,
  NotebookPen,
  Plus,
} from "lucide-react";
import TaskCard from "./TaskCard";
import { useRef, useCallback, useEffect } from "react";
import { Modal, Button } from "react-daisyui";
import useTaskStore from "../store/tasks.store";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm();
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  const { addTask, active } = useTaskStore();

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

  const notify = () => toast.success("Task added ! 👌", { autoClose: 3000 });

  const submiteNewTask = (data: any) => {
    // console.log(data);
    const newData = {
      ...data,
      dateAdded: new Date().toLocaleString(),
    };
    reset();
    addTask("active", newData);
    notify();
    console.log(active);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl w-full">
      <Modal ref={ref}>
        <Modal.Header className="font-bold">Add New Task</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submiteNewTask)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="taskName"
              >
                Task Name
              </label>
              <input
                {...register("title", { required: true })}
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
                {...register("priority", { required: true })}
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
                {...register("description", { required: true })}
                id="description"
                placeholder="Enter task description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Actions>
          <form
            onSubmit={handleSubmit(submiteNewTask)}
            method="dialog"
            className="space-x-4"
          >
            <Button className="text-green-600 rounded-lg" type="submit">
              Add Task
            </Button>
          </form>
          <form method="dialog" className="space-x-4">
            <Button type="submit" onClick={() => ref.current?.close()}>
              Close
            </Button>
          </form>
        </Modal.Actions>
      </Modal>

      <button
        data-tip="press Ctrl + A to add a new task"
        className="flex items-center mb-4 ml-auto tooltip tooltip-bottom"
      >
        <CirclePlus size={25} onClick={handleShow} className="text-green-500" />
      </button>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>

      <div className="pb-24 max-h-96 overflow-y-auto col-span-2">
        {allTasks.length === 0 && (
          <div className="text-gray-400 text-center">
            No Tasks
            <CircleSlash2 className="mx-auto text-gray-600" size={40} />
          </div>
        )}
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
      <ToastContainer />
    </div>
  );
}
