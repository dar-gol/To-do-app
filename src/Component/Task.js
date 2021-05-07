import React from 'react';
import './Task.css';

const Task = (props) => {
    const { date } = props.task;
    console.log(typeof date);
    return (
        <div className={`taskBlock ${props.task.during ? (props.task.isChanged ? "changing" : (props.task.priority ? "priority" : "during")) : "done"}`}
            >
            <div className="taskButtons">
                <button
                    name="ButtonDuring"
                    onClick={(e) => props.modify(props.index, e)}
                >{props.task.during ? "SKOŃCZONE" : "W TRAKCIE"}</button>
                <button
                    name="ButtonChange"
                    onClick={(e) => props.modify(props.index, e)}
                >ZMIEŃ</button>
                <button
                    onClick={() => props.delete(props.index)}
                >USUŃ</button>
            </div>
            {props.task.isChanged ?
                <p>...</p>
                : <p> {
                typeof date === "boolean" ? props.task.name : `${props.task.name} (do dnia ${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}.${date.getMonth()+1 < 10 ?  '0'+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()} roku)`}</p>}
        </div>
    );
}

export default Task;
