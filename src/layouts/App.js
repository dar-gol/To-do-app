import React, { Component } from 'react';
import '../style/layouts/App.css';
import Task from '../Component/Task';
import DataAdder from '../Component/DataAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
      tasksChange: false,
      newPriority: false,
      newDate: '',
    };
  }

  handleTaskModify = (index, e) => {
    if (e.target.name === 'ButtonDuring') {
      const tasks = this.state.tasks.map((task, i) => {
        if (task.isChanged) {
          task.isChanged = false;
        }
        if (i === index) {
          task.during = !task.during;
          return task;
        }
        return task;
      });
      this.setState({
        tasks,
        newTask: '',
        tasksChange: false,
        newPriority: false,
        newDate: '',
      });
    } else if (e.target.name === 'ButtonChange') {
      document.getElementById('new').focus();
      const tasks = this.state.tasks.map((task, i) => {
        if (i === index) {
          // task.isChanged = !task.isChanged;
          if (task.isChanged) {
            task.isChanged = false;
            this.setState({
              tasksChange: false,
            });
          } else {
            task.isChanged = true;
            this.setState({
              tasksChange: true,
            });
          }
          task.during = true;
          return task;
        }
        if (task.isChanged) {
          task.isChanged = false;
        }
        return task;
      });
      const date = this.state.tasks[index].date;
      console.log(this.state.newDate);
      this.setState({
        tasks,
        newTask:
          this.state.tasks[index].name === this.state.newTask
            ? ''
            : this.state.tasks[index].name,
        newPriority:
          this.state.tasks[index].priority === this.state.newPriority
            ? ''
            : this.state.tasks[index].priority,
        newDate:
          typeof date === 'boolean'
            ? ''
            : `${date.getFullYear()}-${
                date.getMonth() + 1 < 10
                  ? '0' + (date.getMonth() + 1)
                  : date.getMonth() + 1
              }-${
                date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
              }` === this.state.newDate
            ? ''
            : `${date.getFullYear()}-${
                date.getMonth() + 1 < 10
                  ? '0' + (date.getMonth() + 1)
                  : date.getMonth() + 1
              }-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`,
      });
    }
  };

  handleAddTask = (e) => {
    if (e.target.type === 'checkbox') {
      this.setState({
        newPriority: !this.state.newPriority,
      });
    } else if (e.target.name === 'time') {
      this.setState({
        newDate: e.target.value,
      });
    } else if (
      (e.type === 'click' && e.target.type === 'submit') ||
      (e.keyCode === 13 && e.target.type === 'text')
    ) {
      this.addTaskToTaskList();
    } else if (e.target.name === 'newTaskInput') {
      this.setState({
        newTask: e.target.value,
      });
    }
  };

  handleTaskDeleteButton = (index) => {
    if (window.confirm('Czy na pewno chcesz usunąć zadanie?')) {
      const tasks = this.state.tasks.filter((task, i) => {
        if (i === index) return false;
        return true;
      });
      this.setState({
        tasks,
      });
    }
  };

  validationDate() {
    if (this.state.newDate !== '') {
      const date = new Date(this.state.newDate);
      if (
        Object.prototype.toString.call(date) === '[object Date]' &&
        !isNaN(date.getTime())
      ) {
        const actual = new Date();
        return actual.getTime() - date.getTime() >= 0 ? false : date;
      } else {
        return false;
      }
    }
    return true;
  }

  addTaskToTaskList = () => {
    let index = undefined;
    this.state.tasks.forEach((task, i) => {
      if (task.isChanged) {
        return (index = i);
      }
    });
    const date = this.validationDate();
    if (this.state.newTask !== '') {
      if (date) {
        let tasks;
        if (index === undefined) {
          const rawTask = {
            name: this.state.newTask,
            during: true,
            isChanged: false,
            priority: this.state.newPriority,
            date: date,
          };
          tasks = [...this.state.tasks];
          tasks.push(rawTask);
        } else {
          tasks = this.state.tasks.map((task, i) => {
            if (i === index) {
              task.name = this.state.newTask;
              task.isChanged = false;
              task.priority = this.state.newPriority;
              task.date = date;
            }
            return task;
          });
        }
        this.setState({
          tasks,
          newTask: '',
          tasksChange: false,
          newPriority: false,
          newDate: '',
        });
      } else return alert('Zły format daty lub data juz minęła!');
    } else return alert('Wpisz nowe zadanie!');
  };

  render() {
    return (
      <>
        <header className="toDoHeader">
          <h2>Lista zadań: </h2>
          <DataAdder
            date={this.state.newDate}
            priority={this.state.newPriority}
            value={this.state.newTask}
            addTask={this.handleAddTask}
            change={this.state.tasksChange}
          />
        </header>
        <main>
          {this.state.tasks.map((task, index) => {
            return (
              <Task
                task={task}
                key={index}
                index={index}
                delete={this.handleTaskDeleteButton}
                modify={this.handleTaskModify}
                value={this.state.newTask}
                addTask={this.handleAddTask}
              />
            );
          })}
        </main>
      </>
    );
  }
}

export default App;
