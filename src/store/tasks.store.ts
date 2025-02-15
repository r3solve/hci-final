import { create } from 'zustand';
import { activeTasks, completedTasks, inProgressTasks } from '../data/dta-defs';

const useTaskStore = create((set) => ({
  active: [...activeTasks],
  completedTasks: [...completedTasks],
  inProgressTasks: [...inProgressTasks],

  addTask: (which: string, element: any) =>
    set((state:any) => {
      switch (which) {
        case 'active':
          return { ...state, active: [...state.active, element] };
        case 'completed':
          return { ...state, completedTasks: [...state.completedTasks, element] };
        case 'inProgress':
          return { ...state, inProgressTasks: [...state.inProgressTasks, element] };
        default:
          console.error(`Invalid task type "${which}"`);
          return state;
      }
    }),
}));

export default useTaskStore; 
