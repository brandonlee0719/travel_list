import configureStore from '../store/ConfigureStore';

import initialStore from '../store/InitialStore';

const store = configureStore(initialStore);

export default store;