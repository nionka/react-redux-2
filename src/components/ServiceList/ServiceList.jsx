import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService } from '../../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const {filter} = useSelector(state => state.serviceFilter);
  const dispatch = useDispatch();

  const filtered = (obj) => { 
    for (let i = 0; i < filter.length; i++) {
      if (obj.name[i].toLowerCase() !== filter[i].toLowerCase()) {
        return null
      } 
    }
    return obj
  }

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id) => {
    const {name, price} = items.find(item => id === item.id);
    dispatch(editService(id, name, price.toString()));
  }

  return (
    <ul>
      {filter === '' ? items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>✎</button>
          <button onClick={() => handleRemove(o.id)}>x</button>
        </li>
      )) : 
        items.filter(filtered)
        .map(e => (
          <li key={e.id}>
          {e.name} {e.price}
          <button onClick={() => handleEdit(e.id)}>✎</button>
          <button onClick={() => handleRemove(e.id)}>x</button>
        </li>
        ))
      }
    </ul>
  )
}

export default ServiceList