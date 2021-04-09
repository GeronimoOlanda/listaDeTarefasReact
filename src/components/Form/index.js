import React from 'react';

import PropTypes from 'prop-types';
// form
import { FaPlus } from 'react-icons/fa';
// css
import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (

    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
/*
Form.defaultProps = {
  novaTarefa: 'Valor Padrão'
}
*/
Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,

};
