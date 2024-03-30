import "./App.css";
import Box from "./components/Boxgenerator";
import { useState } from "react";
import FormBox from "./components/Formbox";

function App() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (newBox) => {
        setBoxes([newBox, ...boxes]);
    };

    return (
        <div className="App">
            <FormBox addBox={addBox} />

            {boxes.map((box, index) => (
                <Box key={index} size={box.size} color={box.color} />
            ))}
        </div>
    );
}

export default App;