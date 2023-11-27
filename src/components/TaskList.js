import React, {useEffect, useState} from 'react';
import TaskCard from './TaskCard';
import TaskCreator from './TaskCreator';

const TaskList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const tasks = localStorage.getItem("taskList");
        if (tasks) {
            setTaskList(JSON.parse(tasks));
        }
    }, []);

    const saveToLocalStorage = (tasks) => {
        localStorage.setItem("taskList", JSON.stringify(tasks));
        setTaskList(tasks);
    };

    const removeItem = (index) => {
        const newTasks = [...taskList];
        newTasks.splice(index, 1);
        saveToLocalStorage(newTasks);
    };

    const modifyArray = (obj, index) => {
        const newTasks = [...taskList];
        newTasks[index] = obj;
        saveToLocalStorage(newTasks);
    };

    const toggle = () => setModal(!modal);

    const saveTask = (task) => {
        const newTasks = [...taskList, task]
        saveToLocalStorage(newTasks);
    };

    return (
        <>
            <div className="topbar">
                <h3>Todo List</h3>
                <button className="btn1" onClick={() => setModal(true)}>Create Task</button>
            </div>
            <div className="tl-container">
                {taskList.map((obj, index) => (
                    <TaskCard
                        key={index}
                        task={obj}
                        index={index}
                        removeItem={removeItem}
                        modifyArray={modifyArray}
                    />
                ))}
            </div>
            <TaskCreator modal={modal} toggle={toggle} save={saveTask}/>
        </>
    );
};

export default TaskList;