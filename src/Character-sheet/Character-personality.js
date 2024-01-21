import React from "react";

function CharPersonality(props) {

    function handlePersonality(e){
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
        <h3>Personality</h3>
        <textarea
          name="personality"
          class="small-text"
          value={props.character.charPersonality?.personality}
          onChange={handlePersonality}
        />
      </label>
      <label>
        <h3>Ideals</h3>
        <textarea
          name="ideals"
          class="small-text"
          value={props.character.charPersonality?.ideals}
          onChange={handlePersonality}
        />
      </label>
      <label>
        <h3>Bonds</h3>
        <textarea
          name="bonds"
          class="small-text"
          value={props.character.charPersonality?.bonds}
          onChange={handlePersonality}
        />
      </label>
      <label>
        <h3>Flaws</h3>
        <textarea
          name="flaws"
          class="small-text"
          value={props.character.charPersonality?.flaws}
          onChange={handlePersonality}
        />
      </label>
      <label>
        <h3>Features & Traits</h3>
        <textarea
          name="features_traits"
          class="long-text"
          value={props.character.charPersonality?.features_traits}
          onChange={handlePersonality}
        />
      </label>
    </div>
  );
}

export default CharPersonality;
