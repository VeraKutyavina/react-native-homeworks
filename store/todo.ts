import { makeAutoObservable } from 'mobx'

type TodoTask = {
  id: string;
  title: string;
  completed: false;
}

class Todo {
  // инициируем массив объектов ToDo листа
  todos = [
    { id: '01', title: 'Hello', completed: false },
    { id: '02', title: 'Hello2', completed: false }
  ]

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this)
  }

  // стор в mobx мутабельный, поэтому просто пушим в него новую задачу
  createTodo(todo: TodoTask) {
    console.log(`create`)
    this.todos.push(todo)
  }

  // удаляем по id задачу, отфильтрованный массив по id
  deleteTodo(id: string) {
    console.log(`delete`)
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  // ставим  true completed выполненной задаче или false в противном случае
  completeTodo(id: string) {
    console.log(`complete`)
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

}

export default new Todo()