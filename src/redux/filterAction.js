export const ActionsType = {
  FILTER_START: 'FILTER_START',
  FILTER_SUCCESS: 'FILTER_SUCCESS',
  FILTER_ERROR: 'FILTER_START',
  CONTACT_ADD: 'CONTACT_ADD',
  CONTACT_DELETE: 'CONTACT_DELETE',
  INPUT_FILTER: 'INPUT_FILTER',
};

export const filerStartActions = () => ({
  type: ActionsType.FILTER_START,
});

export const filerSuccessActions = contacts => ({
  type: ActionsType.FILTER_SUCCESS,
  payload: contacts,
});

export const contactAddAction = name => ({
  type: ActionsType.CONTACT_ADD,
  payload: name,
});

export const contactDeleteAction = id => ({
  type: ActionsType.CONTACT_DELETE,
  payload: id,
});

export const filterInputAction = string => ({
  type: ActionsType.INPUT_FILTER,
  payload: string,
});
