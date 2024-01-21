import React, { useState, useEffect } from "react";
import AbilityScores from "./Ability-scores";
import Header from "./Header";
import HitPointsAC from "./HP-AC";
import Equipment from "./Equipment";
import Exploration from "./Exploration";
import CharPersonality from "./Character-personality";
import Spells from "./Spells";
import Description from "./Description";
import Languages from "./Languages";
import Extras from "./Extra";
import axios from "axios";
import { useParams } from 'react-router-dom';


function CharacterSheet(isEditing) {
  const { curr_user, character_id } = useParams();
  const [character, setCharacter] = useState({
    header:{
      name: "x",
      player: "x",
      campaign: "x",
      char_class: "x",
      subclass: "x",
      race: "x",
      deity: "x",
      alignment: "x",
      level: "1"
    },
    abilities: {
      proficiency: "1",
      cha_Score: "1",
      cha_Modifier: "1",
      cha_Save: "1",
      con_Score: "1",
      con_Modifier: "1",
      con_Save: "1",
      dex_Score: "1",
      dex_Modifier: "1",
      dex_Save: "1",
      int_Score: "1",
      int_Modifier: "1",
      int_Save: "1",
      wis_Score: "1",
      wis_Modifier: "1",
      wis_Save: "1",
      str_Score: "1",
      str_Modifier: "1",
      str_Save: "1",
      deception: "1",
      intimidation: "1",
      performance: "1",
      persuasion: "1",
      acrobatics: "1",
      "sleight-of-hand": "5",
      stealth: "1",
      arcana: "1",
      history: "1",
      investigation: "1",
      nature: "1",
      religion: "1",
      "animal-handling": "5",
      insight: "1",
      medicine: "1",
      perception: "1",
      survival: "1",
      athletics: "1",
      Other_prof: "1"
    },
    HP:{
      hp: "1",
      ac: "1",
      Initiative: "1",
      TempHP: "1",
      MaxHP: "1",
      HitDice: "1"
    },
    equipment:{
      weapon1: "2",
      attack1: "2",
      damage1: "2",
      weapon2: "2",
      attack2: "2",
      damage2: "2",
      weapon3: "2",
      attack3: "2",
      damage3: "2",
      weapon4: "2",
      attack4: "2",
      damage4: "2",
      weapon5: "2",
      attack5: "2",
      damage5: "2",
      name1: "2",
      weight1: "2",
      location1: "2",
      worth1: "2",
      name2: "2",
      weight2: "2",
      location2: "2",
      worth2: "2",
      name3: "2",
      weight3: "2",
      location3: "2",
      worth3: "2",
      name4: "2",
      weight4: "2",
      location4: "2",
      worth4: "2",
      name5: "2",
      weight5: "2",
      location5: "2",
      worth5: "2",
      copper: "2",
      silver: "2",
      electrum: "2",
      gold: "2",
      platinum: "2"
    },
    exploration: {
      passive_perception: "1",
      speed: "1",
      overland_mph: "1",
      overland_mpd: "1"
    },
    charPersonality: {
      personality: "y",
      ideals: "y",
      bonds: "y",
      flaws: "y",
      features_traits: "y"
    },
    spells:{
      casting_ability: "3",
      save_dc: "3",
      attack_bonus: "3",
      cantrip1: "3",
      cantrip2: "3",
      cantrip3: "3",
      cantrip4: "3",
      cantrip5: "3",
      cantrip6: "3",
      cantrip7: "3",
      cantrip8: "3",
      cantrip9: "3",
      cantrip10: "3",
      cantrip11: "3",
      cantrip12: "3",
      cantrip13: "3",
      cantrip14: "3",
      cantrip15: "3",
      cantrip16: "3",
      slots_level1: "3",
      expended_level1: "3",
      prepared_level1: "3",
      level1_spell1: "3",
      level1_spell2: "3",
      level1_spell3: "3",
      level1_spell4: "3",
      level1_spell5: "3",
      level1_spell6: "3",
      level1_spell7: "3",
      level1_spell8: "3",
      level1_spell9: "3",
      level1_spell10: "3",
      level1_spell11: "3",
      level1_spell12: "3",
      slots_level2: "3",
      expended_level2: "3",
      prepared_level2: "3",
      level2_spell1: "3",
      level2_spell2: "3",
      level2_spell3: "3",
      level2_spell4: "3",
      level2_spell5: "3",
      level2_spell6: "3",
      level2_spell7: "3",
      level2_spell8: "3",
      level2_spell9: "3",
      level2_spell10: "3",
      level2_spell11: "3",
      level2_spell12: "3",
      slots_level3: "3",
      expended_level3: "3",
      prepared_level3: "3",
      level3_spell1: "3",
      level3_spell2: "3",
      level3_spell3: "3",
      level3_spell4: "3",
      level3_spell5: "3",
      level3_spell6: "3",
      level3_spell7: "3",
      level3_spell8: "3",
      level3_spell9: "3",
      level3_spell10: "3",
      level3_spell11: "3",
      level3_spell12: "3",
      slots_level4: "3",
      expended_level4: "3",
      prepared_level4: "3",
      level4_spell1: "3",
      level4_spell2: "3",
      level4_spell3: "3",
      level4_spell4: "3",
      level4_spell5: "3",
      level4_spell6: "3",
      level4_spell7: "3",
      level4_spell8: "3",
      level4_spell9: "3",
      level4_spell10: "3",
      level4_spell11: "3",
      level4_spell12: "3",
      slots_level5: "3",
      expended_level5: "3",
      prepared_level5: "3",
      level5_spell1: "3",
      level5_spell2: "3",
      level5_spell3: "3",
      level5_spell4: "3",
      level5_spell5: "3",
      level5_spell6: "3",
      level5_spell7: "3",
      level5_spell8: "3",
      level5_spell9: "3",
      level5_spell10: "3",
      level5_spell11: "3",
      level5_spell12: "3",
      slots_level6: "3",
      expended_level6: "3",
      prepared_level6: "3",
      level6_spell1: "3",
      level6_spell2: "3",
      level6_spell3: "3",
      level6_spell4: "3",
      level6_spell5: "3",
      level6_spell6: "3",
      level6_spell7: "3",
      level6_spell8: "3",
      level6_spell9: "3",
      level6_spell10: "3",
      level6_spell11: "3",
      level6_spell12: "3",
      slots_level7: "3",
      expended_level7: "3",
      prepared_level7: "3",
      level7_spell1: "3",
      level7_spell2: "3",
      level7_spell3: "3",
      level7_spell4: "3",
      level7_spell5: "3",
      level7_spell6: "3",
      level7_spell7: "3",
      level7_spell8: "3",
      level7_spell9: "3",
      level7_spell10: "3",
      level7_spell11: "3",
      level7_spell12: "3",
      slots_level8: "3",
      expended_level8: "3",
      prepared_level8: "3",
      level8_spell1: "3",
      level8_spell2: "3",
      level8_spell3: "3",
      level8_spell4: "3",
      level8_spell5: "3",
      level8_spell6: "3",
      level8_spell7: "3",
      level8_spell8: "3",
      level8_spell9: "3",
      level8_spell10: "3",
      level8_spell11: "3",
      level8_spell12: "3",
      slots_level9: "3",
      expended_level9: "3",
      prepared_level9: "3",
      level9_spell1: "3",
      level9_spell2: "3",
      level9_spell3: "3",
      level9_spell4: "3",
      level9_spell5: "3",
      level9_spell6: "3",
      level9_spell7: "3",
      level9_spell8: "3",
      level9_spell9: "3",
      level9_spell10: "3",
      level9_spell11: "3",
      level9_spell12: "3"
    },
    description:{
      height: "z",
      weight: "z",
      age: "z",
      gender: "z",
      hair: "z",
      eyes: "z",
      skin: "z"
    },
    languages:{
      language1: "a",
      language2: "a",
      language3: "a",
      language4: "a",
      language5: "a",
      language6: "a",
      language7: "a",
      language8: "a",
      language9: "a",
      language10: "a",
      language11: "a",
      language12: "a",
      language13: "a",
      language14: "a",
      language15: "a",
      language16: "a",
      language17: "a",
      language18: "a"
    },
    extras:{
      subclass_features: "s",
      extra_equipment: "s",
      contacts_friends: "s",
      enemies: "s",
      backstory: "s",
      session_notes: "s"
    },
    user_id: 1
  });

  useEffect(() => {
    async function getCharData(){
      if (isEditing){
        try{
          const response = axios.get(`http://localhost:5000/${curr_user}/${character_id}`)
          setCharacter(response);
        }catch(error){
          console.log(error)
        }
      }
    }
    getCharData();
  }, [isEditing, curr_user, character_id])

  async function handleSubmit(){
    if(isEditing){
      const response = await axios.put('http://localhost:5000/create-character', character,  { headers: { 'Content-Type': 'application/json' } })
    }else{
      const response = await axios.post('http://localhost:5000/create-character', character,  { headers: { 'Content-Type': 'application/json' } });
    }
  }

  return (
    <div>
      <Header character = {character} setCharacter = {setCharacter}/>
      <table>
        <tbody>
          <tr>
            <td>
            <AbilityScores character = {character} setCharacter = {setCharacter}/>
            </td>
            <td>
            <HitPointsAC character = {character} setCharacter = {setCharacter} />
            <Equipment character = {character} setCharacter = {setCharacter} />
            </td>
            <td>
              <Exploration character = {character} setCharacter = {setCharacter}/>
              <CharPersonality character = {character} setCharacter = {setCharacter}/>
            </td>
          </tr>
        </tbody>
      </table>
      <Spells character = {character} setCharacter = {setCharacter}/>
      <table>
        <tbody>
          <tr>
            <td>
            <Description character = {character} setCharacter = {setCharacter}/>
            </td>
            <td>
            <Languages character = {character} setCharacter = {setCharacter}/>
            </td>
          </tr>
        </tbody>
      </table>
      <Extras character = {character} setCharacter = {setCharacter}/>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default CharacterSheet;
