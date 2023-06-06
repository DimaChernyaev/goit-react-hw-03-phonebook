import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import { FaUserAlt, FaRegTrashAlt } from "react-icons/fa";

// FaUserLarge, FaTrash

const ContactsList = ({ contacts, onDeleteContact}) => {

    return ( 
        <ul className={css.contact__list}>
            {contacts.map(({ id, name, number}) => ( 
            <li key={id} className={css.contact__item}>
            <FaUserAlt/>
            <div className={css.item__text}>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
            </div>
                <button type="button" className={css.button__delete} onClick={() => onDeleteContact(id)}><FaRegTrashAlt/></button>
            </li>))}
        </ul>

    );
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
      })),
  };

export default ContactsList;