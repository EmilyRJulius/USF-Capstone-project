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
                  value={props.character.extras?.enemies}
                  onChange={handleExtras}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
            <label>
                Backstory:
                <textarea
                  name="backstory"
                  value={props.character.extras?.backstory}
                  onChange={handleExtras}
                />
              </label>
            </td>
          </tr>
          <tr>
            <td>
            <label>
                Session Notes:
                <textarea
                  name="session_notes"
                  value={props.character.extras?.session_notes}
                  onChange={handleExtras}
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Extras;
