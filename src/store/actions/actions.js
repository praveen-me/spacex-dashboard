import {fakeAjax} from '../../utils/utils'
import {GET_DATA, CHANGE_IS_VERTICAL, CHANGE_CARD_TYPE} from './type';

export const getInitialData = (json) => async (dispatch) => {

	try {
		const data = await fakeAjax(json);
		
		dispatch({
			type: GET_DATA,
			payload: {
				data
			}
		});

		return Promise.resolve(true);

	} catch(e) {
		return Promise.reject(e);
	}
}

export const changeSectionIsVertical = (id) => ({
	type: CHANGE_IS_VERTICAL,
	payload: {
		sectionId: id
	}
});

export const changeCardType = (data) => ({
	type: CHANGE_CARD_TYPE,
	payload: {
		...data
	}
})