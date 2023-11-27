import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

const TaskCreator = ({modal, toggle, save}) => {
    const [cardName, setcardName] = useState('');
    const [description, setdescription] = useState('');

    const changeData = (e) => {
        const{name, value} = e.target;
        if (name === "cardName") {
            setcardName(value);
        }
        else if (name === "description") {
            setdescription(value);
        }
        };
    
    const handleSave = () => {
        const newTask = {Name: cardName, Description: description};
        save(newTask);
        setcardName('');
        setdescription('');
        toggle();
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <div className = "form-group">
                    <label>Task Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={changeData}
                        name="cardName"
                        value={cardName}
                    />
                </div>
                <div className = "form-group">
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
                <Button className="btn2" onClick={handleSave}>Create</Button>{' '}
                <Button className="btn3" onClick={toggle}>Cancel</Button>{' '}
            </ModalFooter>
        </Modal>
    );
};

export default TaskCreator;