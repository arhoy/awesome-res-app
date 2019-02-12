import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  cols,
  rows
}) => {
  return (
    <div className="form__group">
      <textarea
        className= "form__textarea"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        cols = {cols}
        rows = {rows}
      />
      <div>
        {info && <small className="form__info">{info}</small>}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
