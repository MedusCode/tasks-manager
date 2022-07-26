import img from '../assets/images/icons/rocket.png';
import { nanoid } from "nanoid";
import ToDo from "./to-do";

export interface ITag {
  name: string;
  color: string; //TODO: colors
}

export enum TaskTheme {
  DARK = 'dark',
  LIGHT = 'light',
}

export default class Task {
  id: string = nanoid();
  createdAt: Date = new Date();
  name: string;
  description: string;
  tags: Array<ITag>;
  toDo: Array<ToDo>;
  icon: typeof img;
  theme: TaskTheme;
  dates: Array<Date>;

  constructor(
    name: string,
    description: string,
    tags: Array<ITag>,
    toDo: Array<ToDo>,
    icon: typeof img,
    theme: TaskTheme,
    dates: Array<Date>) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.toDo = toDo;
    this.icon = icon;
    this.theme = theme;
    this.dates = dates;
  }
}