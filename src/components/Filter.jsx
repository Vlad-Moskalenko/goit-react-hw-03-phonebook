export const Filter = ({ onChange }) => {
  return (
    <label className="findContacts">
      Find my contacts
      <input
        onChange={onChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Contact will contain only letters, apostrophe, dash and spaces"
      />
    </label>
  );
};
