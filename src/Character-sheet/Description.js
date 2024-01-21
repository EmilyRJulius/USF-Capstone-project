import React from "react";

function Description(props){

    function handleDescription(e) {
        const { value, name } = e.target;
        props.setCharacter({
          equipment: {
            ...props.character.equipment,
            [name]: value,
          },
        });
      }

    return(
        <div>
            <label>
                Height
                <input
                  type="text"
                  name="height"
                  value={props.character.description?.height}
                  onChange={handleDescription}
                />
              </label>
              <label>
                Weight
                <input
                  type="text"
                  name="weight"
                  value={props.character.description?.weight}
                  onChange={handleDescription}
                />
              </label>
              <br />
              <label>
                Age
                <input
                  type="text"
                  name="age"
                  value={props.character.description?.age}
                  onChange={handleDescription}
                />
              </label>
              <label>
                Gender
                <input
                  type="text"
                  name="weight"
                  value={props.character.description?.gender}
                  onChange={handleDescription}
                />
              </label>
              <br />
              <label>
                Hair
                <input
                  type="text"
                  name="hair"
                  value={props.character.description?.hair}
                  onChange={handleDescription}
                />
              </label>
              <br />
              <label>
                Eyes
                <input
                  type="text"
                  name="eyes"
                  value={props.character.description?.eyes}
                  onChange={handleDescription}
                />
              </label>
              <br />
              <label>
                Skin
                <input
                  type="text"
                  name="skin"
                  value={props.character.description?.skin}
                  onChange={handleDescription}
                />
              </label>
        </div>
    )
}
export default Description;