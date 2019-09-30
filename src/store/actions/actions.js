import {fakeAjax} from '../../utils/utils'
import {GET_DATA} from './type';

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