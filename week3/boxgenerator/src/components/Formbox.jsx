import React, { useState } from "react";


const FormBox  = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const addBox = (e) => {
        e.preventDefault();
        const newBox = {
            size,
            color,
        };
        props.addBox(newBox);
        setColor("");
        setSize("");
    };

    return (
        <div>

            <form  onSubmit={addBox}>
                <label>Color: </label>
                <input  type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>

                <label> Size </label>
                <input   name="size" value={size} onChange={(e) => setSize(e.target.value)}/>

                <button type="submit" class="btn btn-primary" >ADD </button>
            </form>

        </div>
    );
};

export default FormBox;