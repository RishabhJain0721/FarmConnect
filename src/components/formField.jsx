import React, { useState } from "react";

const FormField = ({ name, placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);

    // Call the onChange prop if provided
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="field">
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className="ip"
      />
    </div>
  );
};

export default FormField;
