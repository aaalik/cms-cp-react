const initApi = {
    users: [],
    user: {},
    status: null,
    homeData: {
        resultLastLogin: [],
        resultStatUsers: {},
    },
};

export default function(state = {data: { message: '', database: '' }}, action){
  switch (action.type) {
    case 'TEST_API':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};