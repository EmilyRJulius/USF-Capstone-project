import React, { useState, useEffect } from "react";
import axios from "axios";

function AbilityScores(props) {
  const [abilities, setAbilities] = useState([]);
  const abilIdx = ["cha", "con", "dex", "int", "wis", "str"];

  useEffect(() => {
    async function getData() {
      try {
        // const example = await axios.get("http://localhost:5000/characters")
        // console.log(example);
        const promises = abilIdx.map((index) =>
          axios.get(`https://www.dnd5eapi.co/api/ability-scores/${index}`)
        );
        const responses = (await Promise.all(promises)).map(
          (response) => response.data
        );
        setAbilities(responses);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  function handleProficiency(e){
    const { value } = e.target;
    props.setCharacter({
      abilities: {...props.character.abilities,
      proficiency: value}
    })
  }

  function handleAbilities(e){
    const { value, name } = e.target
    props.setCharacter({
      abilities: {
        ...props.character.abilities,
        [name]: value
      }
    })
  }

  return (
    <div>
      <p>
        Proficiency Bonus:
        <input
          type="text"
          name="proficiency"
          class = "small-input"
          value={props.character.proficiency}
          onChange={handleProficiency}
        />
      </p>
      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>Modifier</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
        {abilities.map((ability) => (
          <tr key={ability.index}>
            <td>
            <input
              type="text"
              name= {`${ability.index}_Score`}
              class = "small-input" 
              value={props.character.abilities?.[`${ability.index}_Score`]}
              onChange={handleAbilities}
            />
            {ability.full_name}
            {ability.skills.map((skill) => (
              <li key={skill.index}>
                {/* <pre>{JSON.stringify(skill.name)}</pre>
                <pre>{JSON.stringify(skill.index)}</pre> */}
                {skill.name}
                <input
                  type="text"
                  name={skill.index}
                  class = "small-input"
                  value={props.character.abilities?.[`${skill.index}`]}
                  onChange={handleAbilities}
                />
              </li>
            ))}
            </td>
            <td>
            <input
              type="text"
              name={`${ability.index}_Modifier`}
              id={`${ability.index}_Modifier`}
              class = "small-input"
              value= {props.character.abilities?.[`${ability.index}_Modifier`]}
              onChange={handleAbilities}
            />
            </td>
            <td>
            <input
              type="text"
              name={`${ability.index}_Save`}
              class = "small-input"
              value={props.character.abilities?.[`${ability.index}_Save`]}
              onChange={handleAbilities}
            />
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      {/* <ul>
        {abilities.map((ability) => (
          <ul key={ability.index}>
            <input
              type="text"
              name= {`${ability.index}_Score`}
              class = "small-input" 
              value={props.character.abilities?.[`${ability.index}_Score`]}
              onChange={handleAbilities}
            />
            {ability.full_name}
            <label htmlFor = {`${ability.index}_Modifier`}> Modifier </label>
            <input
              type="text"
              name={`${ability.index}_Modifier`}
              id={`${ability.index}_Modifier`}
              class = "small-input"
              placeholder = "Modifier"
              value= {props.character.abilities?.[`${ability.index}_Modifier`]}
              onChange={handleAbilities}
            />
            <input
              type="text"
              name={`${ability.index}_Save`}
              class = "small-input"
              value={props.character.abilities?.[`${ability.index}_Save`]}
              onChange={handleAbilities}
            />
            {ability.skills.map((skill) => (
              <li key={skill.index}>
                {/* <pre>{JSON.stringify(skill.name)}</pre>
                <pre>{JSON.stringify(skill.index)}</pre> */}
                {/* {skill.name}
                <input
                  type="text"
                  name={skill.index}
                  class = "small-input"
                  value={props.character.abilities?.[`${skill.index}`]}
                  onChange={handleAbilities}
                />
              </li>
            ))}
          </ul>
        ))}
      </ul> */}
      <label>
        Other Proficiencies:
        <textarea
          name="Other_prof"
          class = "other-prof"
          value={props.character.abilities?.Other_prof}
          onChange={handleAbilities}
        />
      </label>
    </div>
  );
}

export default AbilityScores;
