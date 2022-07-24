import Task, { TaskTheme } from "./classes/task";
import icon from './assets/images/icons/rocket.png'

export const initTasks = () => {
  const date = new Date('2011-10-10')
  const tasksArray = [];
  tasksArray.push(new Task(
    'To do',
    'Very important to do it!',
    [{name: 'hello', color: 'hey'}, {name: 'world', color: 'hey'}],
    [{task: 'add button', isDone: false}, {task: 'delete button', isDone: false}],
    icon,
    TaskTheme.LIGHT,
    [date]
  ))
  tasksArray.push(new Task(
    'Name of task',
    'Very important to do it very well!',
    [{name: 'hello', color: 'hey'}, {name: 'something', color: 'hey'}],
    [{task: 'add button', isDone: false}, {task: 'delete button', isDone: false}, {task: 'change button', isDone: false}],
    icon,
    TaskTheme.LIGHT,
    [date]
  ))
  tasksArray.push(new Task(
    'Name of task new new new very very task task',
    '',
    [{name: 'hello', color: 'hey'}, {name: 'something', color: 'hey'}, {name: 'superman', color: 'hey'}],
    [{task: 'add button', isDone: false}, {task: 'delete button', isDone: false}, {task: 'change button', isDone: false}, {task: 'delete button', isDone: false}, {task: 'change button', isDone: false}],
    icon,
    TaskTheme.LIGHT,
    [date]
  ))
 tasksArray.push(new Task(
    'Name of task new new new very very task task',
    'do something',
    [{name: 'hello', color: 'hey'}, {name: 'something', color: 'hey'}, {name: 'superman', color: 'hey'}, {name: 'cringe', color: 'hey'}, {name: 'everything', color: 'hey'}, {name: 'good', color: 'hey'}, {name: 'man', color: 'hey'}, {name: 'WoW', color: 'hey'}, {name: 'Andreev', color: 'hey'}],
    [{task: 'add button', isDone: false}, {task: 'delete button', isDone: false}, {task: 'change button', isDone: false}],
    icon,
    TaskTheme.LIGHT,
    [date]
  ))
}
