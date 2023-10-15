import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    items: [],
    name: "",
    email: "",
  });

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data or perform other actions here
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleEmailChange}
      />
      <div>
        <label>Items:</label>
        <ul>
          {formData.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
