import React from 'react';
import PropTypes from 'prop-types';

export const AddItem = ({ name, price, onChange, onSubmit }) => (
    <div className="row justify-content-center">
      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            value={name}
            name="name"
            onChange={onChange}
            className="form-control mb-2 mr-sm-2"
            placeholder="Item"
        />

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              value={price}
              name="price"
              onChange={onChange}
              className="form-control"
              placeholder="Price"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
      </form>
    </div>
);

AddItem.defaultProps ={
  name: '',
  price: '',
}

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


