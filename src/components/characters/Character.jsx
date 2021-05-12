import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Character = ({ id, name, image }) => {
  return (
    <>
      <Link to={`/details/${id}`}>
        <label style={{ fontSize: '40px' }}>
          {name}
        </label>
      </Link>
    </>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Character;
