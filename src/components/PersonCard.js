import React, { useState } from "react";
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor} = props;
    const [state, setState] = useState({
        age: age
    });

    const ageButton = () => {
        setState({
            age: state.age + 1
        });
    }
    return(
        <div>
            <h2> {lastName}, {firstName}</h2>
            <span>Age: {state.age}</span>
            <span>Hair Color: {hairColor}</span>
            <button onClick={ageButton}> Add Year to {firstName} {lastName} </button>
        </div>
    )
}

export default PersonCard;