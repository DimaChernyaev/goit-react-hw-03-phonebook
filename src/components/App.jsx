import { Component } from "react";
import { nanoid } from 'nanoid'
import ContactsList from "./contacts/contactList/ContactsList";
import Form from "./contacts/form/Form";
import Filter from "./contacts/filter/Filter";
import css from './App.module.css'

const KEY_CONTACTS = 'contacts';


class App extends Component {
  
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount () {
    const saveContacts = JSON.parse(localStorage.getItem(KEY_CONTACTS));

    if (saveContacts.length && !this.state.contacts.length) {
      this.setState({
        contacts: saveContacts
      })
    }
  }

  componentDidUpdate(_, nextState) {
    if (nextState.contacts !== this.state.contacts) {
      localStorage.setItem(KEY_CONTACTS, JSON.stringify(this.state.contacts))
      console.log(localStorage);
    }
  }

  newContact = ({name, number}) => {
    const repeatName = this.state.contacts.find(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
    if (repeatName) {
      alert(`${name} is already in contacts`)
      return
    } else {
      const contact = {
        id: nanoid(),
        name,
        number
      }
  
      this.setState((prevState) => {
        return {contacts: [contact, ...prevState.contacts]}
      })
    }
  }

  deleteContact = (id) => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  contactSearch = (event) => {
    const {target} = event;

    this
    .setState({
      filter: target.value.toLowerCase(),
    })
  }

  getContactSearch = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
  }


  

  render () {
    const visableContacts = this.getContactSearch();

    return (
      <div className={css.container}>
        <h1 className={css.title__phonebook}>Phonebook</h1>
        <Form
          onSubmitForm={this.newContact}
        />

        <h2 className={css.title__contacts}>Contacts</h2>
        {!this.state.contacts.length ? (
          <p className={css.no__contacts}>You don't have any contacts</p>) 
          : (
            <div className={css.contacts}>
              <Filter 
                value={this.state.value}
                onSearch={this.contactSearch}
              />
              <ContactsList 
                contacts={visableContacts}
                onDeleteContact={this.deleteContact}
              />
            </div>
        )}
      </div>
    )
  }
};

export default App