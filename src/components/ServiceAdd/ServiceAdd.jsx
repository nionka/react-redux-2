import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, resetForm, removeService} from '../../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (item.name.trim() === '' || item.price.trim() === '') return null

		if (item.id) {
			dispatch(removeService(item.id));
		}

		dispatch(addService(item.name, item.price));
		dispatch(resetForm())
	}

	const handleChange = (e) => {
		const {name, value} = e.target;
		dispatch(changeServiceField(name, value));
	}

	const handleCansel = (e) => {
		dispatch(resetForm())
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name="name" value={item.name} onChange={handleChange}></input>
			<input name="price" value={item.price} onChange={handleChange}></input>
			<button type="submit">Save</button>
			{item.id && <button type="button" onClick={handleCansel}>Cansel</button>}
		</form>
	)
}

export default ServiceAdd