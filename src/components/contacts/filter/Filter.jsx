import PropTypes from 'prop-types';
import css from './Filter.module.css'

const Filter = ({ value, onSearch}) => {

    return ( 
        <label className={css.search__container}>
            <span className={css.search__title}>Search</span> 
            <input type="search" name="filter" value={value} onChange={onSearch} className={css.input}></input>
        </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func.isRequired,
};

export default Filter;