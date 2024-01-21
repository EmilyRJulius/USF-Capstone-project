import React from "react";

function Exploration(props) {

    function handleExploration(e){
        const { value, name } = e.target
        props.setCharacter({
          equipment: {
            ...props.character.equipment,
            [name]: value
          }
        })
      }

  return (
    <div>
      <label>
        Passive Perception
        <input
          type="text"
          name="passive_perception"
          class="medium-input"
          value={props.character.exploration?.passive_perception}
          onChange={handleExploration}
        ></input>
      </label>
      <br />
      <label>
        Speed(ft)
        <input
          type="text"
          name="speed"
          class="medium-input"
          value={props.character.exploration?.speed}
          onChange={handleExploration}
        ></input>
      </label>
      <br />
      <label>
        Overland
        <input
          type="text"
          name="overland_mph"
          class="medium-input"
          value={props.character.exploration?.overland_mph}
          onChange={handleExploration}
        ></input>
        (mph)
      </label>
      <br />
      <label>
        Overland
        <input
          type="text"
          name="overland_mpd"
          class="medium-input"
          value={props.character.exploration?.overland_mpd}
          onChange={handleExploration}
        ></input>
        (mpd)
      </label>
    </div>
  );
}
export default Exploration;