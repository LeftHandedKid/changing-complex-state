import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const handleChange = (event) => {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    // ESSENTIALLY inputName BECOMES event.target.name
    // AND newValue BECOMES event.target.value

    // BUT WITH DESTRUCTURING, THE VALUES OF 
    // inputName and newValue are substituted with value and name
    // since they both use the event.target attribute
    // and we are using event.target multiple times for the
    // first and last name so it makes like an array thing

    const {value, name} = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input 
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          value={fullName.fName}
        />


        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
