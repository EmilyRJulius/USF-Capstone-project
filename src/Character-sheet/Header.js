import React, { useState } from "react";

const Header = (props) => {
  // const {header, setHeader} = useState([]);
  // Function to handle form input changes
  const handleChange = (e) => {
    const { value, name } = e.target
    props.setCharacter({
      header: {
        ...props.character.header,
        [name]: value
      }
    })
  };

  return (
    <form 
    // onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={props.character.header?.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Player:
        <input
          type="text"
          name="player"
          value={props.character.header?.player}
          onChange={handleChange}
        />
      </label>
      <label>
        Campaign:
        <input
          type="text"
          name="campaign"
          value={props.character.header?.campaign}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Class:
        <input
          type="text"
          name="char_class"
          value={props.character.header?.char_class}
          onChange={handleChange}
        />
      </label>
      <label>
        Subclass:
        <input
          type="text"
          name="subclass"
          value={props.character.header?.subclass}
          onChange={handleChange}
        />
      </label>
      <label>
        Race:
        <input
          type="text"
          name="race"
          value={props.character.header?.race}
          onChange={handleChange}
        />
      </label>
      <label>
        Deity:
        <input
          type="text"
          name="deity"
          value={props.character.header?.deity}
          onChange={handleChange}
        />
      </label>
      <label>
        Alignment:
        <input
          type="text"
          name="alignment"
          value={props.character.header?.alignment}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Level:
        <input
          type="text"
          name="level"
          value={props.character.header?.level}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit">Save</button>
    </form>
  );
};

export default Header;