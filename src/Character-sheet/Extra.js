import React from "react";

function Extras(props) {
  function handleExtras(e) {
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
        <tbody>
          <tr>
            <td>
              <label>
                Subclass Features & Traits:
                <textarea
                  name="subclass_features"
                  class="medium-text"
                  value={props.character.extras?.subclass_features}
                  onChange={handleExtras}
                />
              </label>
            </td>
            <td>
              <label>
                extra Equipment:
                <textarea
                  name="extra_equipment"
                  class="medium-text"
                  value={props.character.extras?.extra_equipment}
                  onChange={handleExtras}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                Contacts/Friends:
                <textarea
                  name="contacts_friends"
                  class="medium-text"
                  value={props.character.extras?.contacts_friends}
                  onChange={handleExtras}
                />
              </label>
            </td>
            <td>
              <label>
                Enemies:
                <textarea
                  name="enemies"
                  class="medium-text"
                  value={props.character.extras?.enemies}
                  onChange={handleExtras}
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
      <label>
        Backstory:
        <textarea
          name="backstory"
          class="large-text"
          value={props.character.extras?.backstory}
          onChange={handleExtras}
        />
      </label>
      <label>
        Session Notes:
        <textarea
          name="session_notes"
          class="large-text"
          value={props.character.extras?.session_notes}
          onChange={handleExtras}
        />
      </label>
    </div>
  );
}
export default Extras;
