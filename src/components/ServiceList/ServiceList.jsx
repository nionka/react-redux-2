import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id) => {
    const {name, price} = items.find(item => id === item.id);
    dispatch(editService(id, name, price.toString()));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>x</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList