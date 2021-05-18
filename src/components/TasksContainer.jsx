import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions/tasks';

import Task from './Task'

const TasksContainer = ({ tasks, modify, deleteTask }) => {
    return (
        <main className="to-do-list">
            {tasks.map((task, id) => (
                <Task key={id} task={task} modify={modify} index={id} deleteTask={deleteTask} />
            ))}
        </main>
    )
};

const mapStateToProps = state => ({
    tasks: state.tasks.list,
})

const mapDispatchToProps = dispatch => ({
    modify: (task, modifyId) => dispatch(actions.modifyTask(task, modifyId)),
    deleteTask: (deleteId) => dispatch(actions.deleteTask(deleteId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer);

// {tasks.map(task, id) => 
//     <Task key={id} task={task} />
// }