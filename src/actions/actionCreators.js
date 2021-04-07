import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, RESET_FORM, FILTER_SERVICE } from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}};
}

export function editService(id, name, price) {
  return {type: EDIT_SERVICE, payload: {id, name, price}};
}

export function resetForm() {
  return {type: RESET_FORM, payload: {}}
}

export function filterService(name, value) {
  return {type: FILTER_SERVICE, payload: {name, value}}
}
