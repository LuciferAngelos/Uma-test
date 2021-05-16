import { put, takeEvery, call, select } from 'redux-saga/effects'
import { goodsAPI } from '../api/api';
import { getGoodsCollection } from '../selectors/selectors';
import { FETCH_COLLECTION, setCollection, goodsFromCollection } from '../store/goodsReducer';
import { FETCH_USERS, toggleIsLoading } from '../store/usersReducer';



function* fetchCollectionsWorker(action) {
	const response = yield call(goodsAPI.getCollectionsData, action.styleUserMnem, action.page, action.classId);
	yield put(setCollection(response.data));
	const collectionId = yield select(getGoodsCollection(7));
	const goodsResponse = yield call(goodsAPI.getGoodsFromCollecion, collectionId);
	yield put(goodsFromCollection(goodsResponse.data))
	yield put(toggleIsLoading(false))
}

export function* fetchCollectionsWatcher() {
	yield takeEvery(FETCH_USERS, fetchCollectionsWorker)
	yield takeEvery(FETCH_COLLECTION, fetchCollectionsWorker)
}