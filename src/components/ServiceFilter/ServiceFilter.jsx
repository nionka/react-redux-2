import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {filterService} from '../../actions/actionCreators';

function ServiceFilter() {
	const filter = useSelector(state => state.serviceFilter)
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const {name, value} = e.target
		dispatch(filterService(name, value))
	}

	return (
		<div className="filter">
			<label>
				<input name="filter" value={filter.filter} onChange={handleChange}></input>
				<span>Фильтр</span>
			</label>	
		</div>		
	)
}

export default ServiceFilter