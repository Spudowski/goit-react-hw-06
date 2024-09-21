import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contactsSlice.js";
import styles from "./ContactList.module.css";

const ContactList = ({ isActive }) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.container}>
            {contact.name} ({contact.number})
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        ))
      ) : (
        isActive && <li className={styles.noContacts}>No contacts</li>
      )}
    </ul>
  );
};

export default ContactList;