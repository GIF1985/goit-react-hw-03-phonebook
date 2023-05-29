import React from 'react';
import styles from './ContactListItemWithDelete.module.css';

const ContactListItemWithDelete = ({ contact, onDelete }) => {
  const { id, name, number, creationDate } = contact;

  return (
    <li className={styles.contactListItem}>
      <p>{name}</p>
      <p>{number}</p>
      <p>{creationDate}</p>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItemWithDelete;
