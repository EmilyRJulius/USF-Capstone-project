import React from "react";

function Spells(props) {
  function handleSpells(e) {
    const { value, name } = e.target;
    props.setCharacter({
      equipment: {
        ...props.character.equipment,
        [name]: value,
      },
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <label>
                <input
                  type="text"
                  name="casting_ability"
                  class = "medium-input"
                  value={props.character.spells?.casting_ability}
                  onChange={handleSpells}
                />
                Casting Ability
              </label>
              <label>
                <input
                  type="text"
                  name="save_dc"
                  class = "medium-input"
                  value={props.character.spells?.save_dc}
                  onChange={handleSpells}
                />
                Save DC
              </label>
              <label>
                <input
                  type="text"
                  name="attack_bonus"
                  class = "medium-input"
                  value={props.character.spells?.attack_bonus}
                  onChange={handleSpells}
                />
                Attack Bonus
              </label>
            </th>
            <th>
              <label>
                0(cantrips)
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="cantrip1"
                          value={props.character.spells?.cantrip1}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip2"
                          value={props.character.spells?.cantrip2}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip3"
                          value={props.character.spells?.cantrip3}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip4"
                          value={props.character.spells?.cantrip4}
                          onChange={handleSpells}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="cantrip5"
                          value={props.character.spells?.cantrip5}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip6"
                          value={props.character.spells?.cantrip6}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip7"
                          value={props.character.spells?.cantrip7}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip8"
                          value={props.character.spells?.cantrip8}
                          onChange={handleSpells}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="cantrip9"
                          value={props.character.spells?.cantrip9}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip10"
                          value={props.character.spells?.cantrip10}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip11"
                          value={props.character.spells?.cantrip11}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip12"
                          value={props.character.spells?.cantrip12}
                          onChange={handleSpells}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="cantrip13"
                          value={props.character.spells?.cantrip13}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip14"
                          value={props.character.spells?.cantrip14}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip15"
                          value={props.character.spells?.cantrip15}
                          onChange={handleSpells}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="cantrip16"
                          value={props.character.spells?.cantrip16}
                          onChange={handleSpells}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3>1</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level1"
                  class = "small-input"
                  value={props.character.spells?.slots_level1}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level1"
                  class = "small-input"
                  value={props.character.spells?.expended_level1}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level1"
                  class = "small-input"
                  value={props.character.spells?.prepared_level1}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level1_spell1"
                value={props.character.spells?.level1_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell2"
                value={props.character.spells?.level1_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell3"
                value={props.character.spells?.level1_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell4"
                value={props.character.spells?.level1_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell5"
                value={props.character.spells?.level1_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell6"
                value={props.character.spells?.level1_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell7"
                value={props.character.spells?.level1_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell8"
                value={props.character.spells?.level1_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell9"
                value={props.character.spells?.level1_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell10"
                value={props.character.spells?.level1_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell11"
                value={props.character.spells?.level1_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level1_spell12"
                value={props.character.spells?.level1_spell12}
                onChange={handleSpells}
              />
            </td>
            <td>
              <h3>2</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level2"
                  class = "small-input"
                  value={props.character.spells?.slots_level2}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level2"
                  class = "small-input"
                  value={props.character.spells?.expended_level2}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level2"
                  class = "small-input"
                  value={props.character.spells?.prepared_level2}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level2_spell1"
                value={props.character.spells?.level2_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell2"
                value={props.character.spells?.level2_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell3"
                value={props.character.spells?.level2_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell4"
                value={props.character.spells?.level2_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell5"
                value={props.character.spells?.level2_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell6"
                value={props.character.spells?.level2_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell7"
                value={props.character.spells?.level2_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell8"
                value={props.character.spells?.level2_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell9"
                value={props.character.spells?.level2_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell10"
                value={props.character.spells?.level2_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell11"
                value={props.character.spells?.level2_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level2_spell12"
                value={props.character.spells?.level2_spell12}
                onChange={handleSpells}
              />
            </td>
            <td>
              <h3>3</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level3"
                  class = "small-input"
                  value={props.character.spells?.slots_level3}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level3"
                  class = "small-input"
                  value={props.character.spells?.expended_level3}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level3"
                  class = "small-input"
                  value={props.character.spells?.prepared_level3}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level3_spell1"
                value={props.character.spells?.level3_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell2"
                value={props.character.spells?.level3_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell3"
                value={props.character.spells?.level3_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell4"
                value={props.character.spells?.level3_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell5"
                value={props.character.spells?.level3_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell6"
                value={props.character.spells?.level3_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell7"
                value={props.character.spells?.level3_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell8"
                value={props.character.spells?.level3_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell9"
                value={props.character.spells?.level3_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell10"
                value={props.character.spells?.level3_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell11"
                value={props.character.spells?.level3_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level3_spell12"
                value={props.character.spells?.level3_spell12}
                onChange={handleSpells}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>4</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level4"
                  class = "small-input"
                  value={props.character.spells?.slots_level4}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level4"
                  class = "small-input"
                  value={props.character.spells?.expended_level4}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level4"
                  class = "small-input"
                  value={props.character.spells?.prepared_level4}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level4_spell1"
                value={props.character.spells?.level4_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell2"
                value={props.character.spells?.level4_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell3"
                value={props.character.spells?.level4_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell4"
                value={props.character.spells?.level4_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell5"
                value={props.character.spells?.level4_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell6"
                value={props.character.spells?.level1_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell7"
                value={props.character.spells?.level4_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell8"
                value={props.character.spells?.level4_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell9"
                value={props.character.spells?.level4_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell10"
                value={props.character.spells?.level4_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell11"
                value={props.character.spells?.level4_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level4_spell12"
                value={props.character.spells?.level4_spell12}
                onChange={handleSpells}
              />
            </td>
            <td>
              <h3>5</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level5"
                  class = "small-input"
                  value={props.character.spells?.slots_level5}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level5"
                  class = "small-input"
                  value={props.character.spells?.expended_level5}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level5"
                  class = "small-input"
                  value={props.character.spells?.prepared_level5}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level5_spell1"
                value={props.character.spells?.level5_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell2"
                value={props.character.spells?.level5_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell3"
                value={props.character.spells?.level5_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell4"
                value={props.character.spells?.level5_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell5"
                value={props.character.spells?.level5_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell6"
                value={props.character.spells?.level5_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell7"
                value={props.character.spells?.level5_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell8"
                value={props.character.spells?.level5_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell9"
                value={props.character.spells?.level5_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell10"
                value={props.character.spells?.level5_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell11"
                value={props.character.spells?.level5_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level5_spell12"
                value={props.character.spells?.level5_spell12}
                onChange={handleSpells}
              />
            </td>
            <td>
              <h3>6</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level6"
                  class = "small-input"
                  value={props.character.spells?.slots_level6}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level6"
                  class = "small-input"
                  value={props.character.spells?.expended_level6}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level6"
                  class = "small-input"
                  value={props.character.spells?.prepared_level6}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level6_spell1"
                value={props.character.spells?.level6_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell2"
                value={props.character.spells?.level6_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell3"
                value={props.character.spells?.level6_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell4"
                value={props.character.spells?.level6_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell5"
                value={props.character.spells?.level6_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell6"
                value={props.character.spells?.level6_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell7"
                value={props.character.spells?.level6_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell8"
                value={props.character.spells?.level6_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell9"
                value={props.character.spells?.level6_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell10"
                value={props.character.spells?.level6_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell11"
                value={props.character.spells?.level6_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level6_spell12"
                value={props.character.spells?.level6_spell12}
                onChange={handleSpells}
              />
            </td>
          </tr>
          <tr>
            <td>
              <h3>7</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level7"
                  class = "small-input"
                  value={props.character.spells?.slots_level7}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level7"
                  class = "small-input"
                  value={props.character.spells?.expended_level7}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level7"
                  class = "small-input"
                  value={props.character.spells?.prepared_level7}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level7_spell1"
                value={props.character.spells?.level7_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell2"
                value={props.character.spells?.level1_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell3"
                value={props.character.spells?.level7_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell4"
                value={props.character.spells?.level7_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell5"
                value={props.character.spells?.level7_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell6"
                value={props.character.spells?.level7_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell7"
                value={props.character.spells?.level7_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell8"
                value={props.character.spells?.level7_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell9"
                value={props.character.spells?.level7_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell10"
                value={props.character.spells?.level7_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell11"
                value={props.character.spells?.level7_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level7_spell12"
                value={props.character.spells?.level7_spell12}
                onChange={handleSpells}
              />
            </td>
            <td>
              <h3>8</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level8"
                  class = "small-input"
                  value={props.character.spells?.slots_level8}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level8"
                  class = "small-input"
                  value={props.character.spells?.expended_level8}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level8"
                  class = "small-input"
                  value={props.character.spells?.prepared_level8}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level8_spell1"
                value={props.character.spells?.level8_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell2"
                value={props.character.spells?.level8_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell3"
                value={props.character.spells?.level8_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell4"
                value={props.character.spells?.level8_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell5"
                value={props.character.spells?.level8_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell6"
                value={props.character.spells?.level8_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell7"
                value={props.character.spells?.level8_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell8"
                value={props.character.spells?.level8_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell9"
                value={props.character.spells?.level8_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell10"
                value={props.character.spells?.level8_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell11"
                value={props.character.spells?.level8_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level8_spell12"
                value={props.character.spells?.level8_spell12}
                onChange={handleSpells}
              />
            </td>
            <td>
              <h3>9</h3>
              <label>
                Slots:
                <input
                  type="text"
                  name="slots_level9"
                  class = "small-input"
                  value={props.character.spells?.slots_level9}
                  onChange={handleSpells}
                />
              </label>
              <label>
                Expended:
                <input
                  type="text"
                  name="expended_level9"
                  class = "small-input"
                  value={props.character.spells?.expended_level9}
                  onChange={handleSpells}
                />
              </label>
              <label>
                x/
                <input
                  type="text"
                  name="prepared_level9"
                  class = "small-input"
                  value={props.character.spells?.prepared_level9}
                  onChange={handleSpells}
                />
                Prepared
              </label>
              <br />
              <input
                type="text"
                name="level9_spell1"
                value={props.character.spells?.level9_spell1}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell2"
                value={props.character.spells?.level9_spell2}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell3"
                value={props.character.spells?.level9_spell3}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell4"
                value={props.character.spells?.level9_spell4}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell5"
                value={props.character.spells?.level9_spell5}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell6"
                value={props.character.spells?.level9_spell6}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell7"
                value={props.character.spells?.level9_spell7}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell8"
                value={props.character.spells?.level9_spell8}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell9"
                value={props.character.spells?.level9_spell9}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell10"
                value={props.character.spells?.level9_spell10}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell11"
                value={props.character.spells?.level9_spell11}
                onChange={handleSpells}
              />
              <br />
              <input
                type="text"
                name="level9_spell12"
                value={props.character.spells?.level9_spell12}
                onChange={handleSpells}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Spells;
