import { nanoid } from "nanoid";

export default class ToDo {
  id: string = nanoid()
  task: string;
  isDone: boolean = false;

  constructor(task: string) {
    this.task = task;
  }

  public swapIsDone () {
    this.isDone = !this.isDone;
  }
}