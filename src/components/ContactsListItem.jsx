export const ContactListItem = ({ name, number, deleteContact, id }) => (
  <li id={id}>
    {name}: {number}
    <button onClick={deleteContact} type="button">
      Delete
    </button>
  </li>
);
