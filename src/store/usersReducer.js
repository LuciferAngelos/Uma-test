export const SET_USERS = 'SET_USERS'
export const FETCH_USERS = 'FETCH_USERS'
export const IS_LOADING = 'IS_LOADING'
export const SET_USER_AVATAR = 'SET_USER_AVATAR'

const initialState = {
	users: [

	],
	avatarPhoto: '',
	isLoading: true
}

export default function usersReduser(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading
			};
		case SET_USER_AVATAR:
			return {
				...state,
				avatarPhoto: action.userAvatar
			};
		default:
			return state;
	}
}

export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const toggleIsLoading = (isLoading) => ({ type: IS_LOADING, isLoading });
export const setUserAvatar = (userAvatar) => ({ type: SET_USER_AVATAR, userAvatar });
export const fetchUsers = () => ({ type: FETCH_USERS });