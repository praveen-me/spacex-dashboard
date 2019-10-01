import { GET_DATA } from "../actions/type";

const initState = {
	data : []
}

const rootReducer = (state = initState, action) => {
	switch(action.type) {
		case GET_DATA: {
			const { data } = action.payload;
			
			return {
				...state,
				data
			}
		}

		default: return state;
	}
};

export default rootReducer;