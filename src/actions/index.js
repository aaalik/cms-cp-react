import * as api from '../middleware/api';


const testApi = value => ({
    type: 'TEST_API',
    payload: value,
});

export const loadTestApi = endpoint => async (dispatch) => {
    const res = await api.fetchApi(endpoint);
    // console.log(res);
    if (res.status === 500) {
        return dispatch(testApi({ data: { message: null, database: null } }));
    }
    return dispatch(testApi(res.data));
};