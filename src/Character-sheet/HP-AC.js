import React from "react";

function HitPointsAC(props) {

  function handleHP(e){
    const { value, name } = e.target
    props.setCharacter({
      HP: {
        ...props.character.HP,
        [name]: value
      }
    })
  }

  return (
    <div>
      <label>
        HP
        <input
        type="text"
        name="hp"
        class = "medium-input"
        value={props.character.HP?.hp}
        onChange={handleHP}
      ></input>
      </label>
      <label>
        AC
      <input
        type="text"
        name="ac"
        class = "medium-input"
        value={props.character.HP?.ac}
        onChange={handleHP}
      ></input>
      </label>
      <label>
        Initiative
      <input
        type="text"
        name="Initiatve"
        class = "medium-input"
        value={props.character.HP?.Initiative}
        onChange={handleHP}
      ></input>
      <br />
      </label>
      Temp HP
      <input
        type="text"
        name="TempHP"
        class = "medium-input"
        value={props.character.HP?.TempHP}
        onChange={handleHP}
      ></input>
      <label>
        Max HP
      <input
        type="text"
        name="MaxHP"
        class = "medium-input"
        value={props.character.HP?.MaxHP}
        onChange={handleHP}
      ></input>
      </label>
      <label>
        Hit Dice
      <input
        type="text"
        name="HitDice"
        class = "medium-input"
        value={props.character.HP?.HitDice}
        onChange={handleHP}
      ></input>
      </label>
    </div>
  );
}

export default HitPointsAC;