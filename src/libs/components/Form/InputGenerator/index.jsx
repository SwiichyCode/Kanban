import React from "react";
import { Button } from "../../Button";
import { Input } from "../Input";
import iconClose from "../../../../assets/icon-cross.svg";
import { Container } from "./style";

export const InputGenerator = ({ label, inputFields, setInputFields }) => {
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = { name: "", tasks: [] };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  return (
    <Container>
      <label>{label}</label>

      <div className="input-container">
        {inputFields.map((input, index) => {
          return (
            <div key={index} className="input-wrapper">
              <Input
                name="name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
                maxW={385}
              />
              <img src={iconClose} alt="" onClick={() => removeFields(index)} />
            </div>
          );
        })}
        <Button
          onClick={addFields}
          text="+Add New Column"
          theme="primary"
          type="button"
        />
      </div>
    </Container>
  );
};