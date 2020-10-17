import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ title }) => {
  return (
    <Fragment>
      <div className="form-wrapper">
        <h2 className="form__title">{title}</h2>
        <form className="form__mainForm">
          <input type="text" placeholder="Search..." className='form__search-box'/>
          <input type="submit" />
        </form>
      </div>
    </Fragment>
  );
};

Form.defaultProps = {
  title: 'Search For Drink Recipes',
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
