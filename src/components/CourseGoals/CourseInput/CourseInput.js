import React, { useState } from "react";
import Button from '../../UI/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = event => {
        if(event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if(enteredValue.trim().length === 0){
            setIsValid(false)
            return (
                <form onSubmit={formSubmitHandler}>
                    <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                        <label>Course Goal</label>
                        <input type="text" onChange={goalInputChangeHandler} />
                    </div>
                    <button type="submit">Add Goal</button>
                </form>
            )
        }
        props.onAddGoal(enteredValue);
    };
}