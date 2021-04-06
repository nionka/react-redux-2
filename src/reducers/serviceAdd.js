import {CHANGE_SERVICE_FIELD, RESET_FORM, EDIT_SERVICE} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case RESET_FORM:
      return initialState;
    case EDIT_SERVICE:
      const form = action.payload;
      return {...state, ...form}
    default:
      return state;
  }
}
