import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TaskEditPopup = ({modal, toggle, updateTask, task}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if(task) {
            setTaskName(task.Name || '');
            setDescription(task.Description || '');
        }
    }, [task]);

    const createChangeHandler = (fieldName) => (value) => {
        if (fieldName === "taskName") {
            setTaskName(value);
        } 
        else if (fieldName === "description") {
            setDescription(value);
        } 
    };

    const changeData = (e) => {
        const {name, value} = e.target;
        const handler = createChangeHandler(name);
        handler(value);
    };

    const handleUpdate = () => {
        const updatedTask = {
            Name: taskName,
            Description: description
        };
        updateTask(updatedTask);
        toggle();
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <label>Task Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={taskName}
                        onChange={changeData}
                        name="taskName"
                    ></input>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        rows="5"
                        className="form-control"
                        value={description}
                        onChange={changeData}
                        name="description"
                    ></textarea>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button className="btn2" onClick={handleUpdate}>Update</Button>{' '}
                <Button className="btn3" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default TaskEditPopup;