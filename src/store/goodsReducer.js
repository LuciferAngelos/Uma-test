export const SET_COLLECTION = 'SET_COLLECTION'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'
export const GET_GOODS_FROM_COLLECTION = 'GET_GOODS_FROM_COLLECTION'


const initialState = {
	collections: [

	],
	goodsFromCollection: [

	]
}

export function goodsCollectionReducer(state = initialState, action) {
	switch (action.type) {
		case SET_COLLECTION:
			return {
				...state,
				collections: action.payload
			};
		case GET_GOODS_FROM_COLLECTION:
			return {
				...state,
				goodsFromCollection: action.payload
			};

		default:
			return state;
	}
}


export const setCollection = (payload) => ({ type: SET_COLLECTION, payload });
export const goodsFromCollection = (payload) => ({ type: GET_GOODS_FROM_COLLECTION, payload });
export const fetchCollection = () => ({ type: FETCH_COLLECTION });