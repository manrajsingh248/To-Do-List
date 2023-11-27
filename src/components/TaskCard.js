import React, {useState} from 'react';
import TaskEdit from './TaskEdit';

const TaskCard = ({task, index, removeItem, modifyArray}) => {
    const [modal, setModal] = useState(false);

    const changeState = () => setModal(!modal);

    const taskModify = (updatedTask) => {
        modifyArray(updatedTask, index);
        changeState();
    }

    const taskRemoval = () => {
        removeItem(index);
    }

    return (
        <div className="taskcard">
            <div className="tc-container">
                <div className="tc-name">{task.Name}</div>
                <div className="tc-description">{task.Description}</div>
                <div>
                    <div className="icons">
                        <i className="fas fa-pencil-alt" onClick={changeState}></i>
                        <i className="fas fa-times-circle" onClick={taskRemoval}></i>
                    </div>
                </div>
            </div>
            <TaskEdit
                modal={modal}
                toggle={changeState}
                updateTask={taskModify}
                task={task}
            />
        </div>
    );
};

export default TaskCard;