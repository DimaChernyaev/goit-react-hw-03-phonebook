import { Component } from "react";
import css from './Form.module.css'


class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    createContactName = (event) => {
        const { name, value } = event.target;
        this.setState({
        [name]: value
        })
    }

    reset = () => {
        this.setState({
            name: '',
            number: '',
        })
    }
    
    submitForm = (event) => {
        event.preventDefault();
        
        this.props.onSubmitForm(this.state);
        this.reset();
    }

    render() {
        return(
        <form onSubmit={this.submitForm} className={css.form__container}>
            <label className={css.label__container}>
                <span className={css.input__title}>Name</span>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.createContactName}
                    className={css.input}
                />
            </label>
            <label className={css.label__container}>
                    <span className={css.input__title}>Number</span>
                    <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.createContactName}
                    className={css.input}
            />
            </label>
            <button type="submit" className={css.button}>Add contact</button>
        </form>
        )
    }
}

export default Form;