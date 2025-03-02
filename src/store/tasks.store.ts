import { create } from "zustand";
import { activeTasks, completedTasks, inProgressTasks } from "../data/dta-defs";
interface Task {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "active" | "inProgress" | "completed";
}

const useTaskStore = create((set) => ({
  active: [...activeTasks],
  completed: [...completedTasks],
  inProgress: [...inProgressTasks],

  addTask: (which: "active" | "completed" | "inProgress", task: Task) =>
    set((state) => {
      switch (which) {
        case "active":
          return { ...state, active: [...state.active, task] };
        case "completed":
          return { ...state, completed: [...state.completed, task] };
        case "inProgress":
          return { ...state, inProgress: [...state.inProgress, task] };
        default:
          console.error(`Invalid task type "${which}"`);
          return state;
      }
    }),

  removeTask: (id: string, which: "active" | "completed" | "inProgress") =>
    set((state: any) => {
      switch (which) {
        case "active":
          return {
            ...state,
            active: state.active.filter((task: any) => task.id !== id),
          };
        case "completed":
          return {
            ...state,
            completed: state.completed.filter((task: any) => task.id !== id),
          };
        case "inProgress":
          return {
            ...state,
            inProgress: state.inProgress.filter((task: any) => task.id !== id),
          };
        default:
          console.error(`Invalid task type "${which}"`);
          return state;
      }
    }),
}));

export default useTaskStore;
