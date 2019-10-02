import { GET_DATA, CHANGE_IS_VERTICAL, CHANGE_CARD_TYPE } from "../actions/type";

const initState = {
	data : []
}

const rootReducer = (state = initState, action) => {
	switch(action.type) {
		case GET_DATA: {
			const { data } = action.payload;
			
			return {
				...state,
				data: data.response
			}
		}

		case CHANGE_IS_VERTICAL: {
			const {sectionId} = action.payload;
			const dataClone = [...state.data];

			const sectionIndex = dataClone.findIndex(section => section.id === sectionId);

			dataClone[sectionIndex].isVertical = !dataClone[sectionIndex].isVertical;
			
			return {
				...state,
				data: dataClone
			}
		}

		case CHANGE_CARD_TYPE: {
			const {sectionId, cardType} = action.payload;
			const dataClone = [...state.data];

			const sectionIndex = dataClone.findIndex(section => section.id === sectionId);

			dataClone[sectionIndex].cardType = cardType;

			return {
				...state,
				data: dataClone
			}
		}

		default: return state;
	}
};

export default rootReducer;