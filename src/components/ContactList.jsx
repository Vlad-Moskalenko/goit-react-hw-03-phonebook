import { ContactListItem } from './ContactsListItem';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <ol className="contacts-list">
      {contacts.map(
        ({ id, name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) && (
            <ContactListItem
              id={id}
              key={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          )
      )}
    </ol>
  );
};

