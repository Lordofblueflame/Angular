import { Task } from "./task.interface";

export interface Project {
    id: string;
    name: string;
    tasks: Task[];
  }