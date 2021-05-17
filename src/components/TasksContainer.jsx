import React from 'react';
import { connect } from 'react-redux';

import Task from './Task'

const TasksContainer = ({ tasks }) => {
    return (
        <main className="to-do-list">
            {tasks.map((task, id) => (
                <Task key={id} task={task} />
            ))}
        </main>
    )
};

const mapStateToProps = state => ({
    tasks: state.tasks.list,
})

export default connect(mapStateToProps, {})(TasksContainer);

// {tasks.map(task, id) => 
//     <Task key={id} task={task} />
// }