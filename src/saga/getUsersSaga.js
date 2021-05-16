import { put, takeEvery, call } from 'redux-saga/effects'
import { userAPI } from '../api/api';
import { setUsers, FETCH_USERS, toggleIsLoading, setUserAvatar } from '../store/usersReducer';


function* fetchUsersWorker(action) {
	const response = yield call(userAPI.getUserData, action.mnem);
	yield put(setUsers(response.data));
	const getUserAvatar = `https://looks.umastyle.club/liveimg/${response.data.photoId}?width=118&height=118&mode=stretch`;
	yield put(setUserAvatar(getUserAvatar))
	yield put(toggleIsLoading(false))
}

export function* fetchUsersWatcher() {
	yield takeEvery(FETCH_USERS, fetchUsersWorker)
}
