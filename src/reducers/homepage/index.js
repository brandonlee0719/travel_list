import _ from 'lodash'
import * as ActionTypes from '../../constants/actionTypes';
import { touristList } from '../../constants/staticData';

const initialState = {
  touristList: touristList
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;