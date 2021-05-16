import { all } from 'redux-saga/effects';
import { fetchUsersWatcher } from './getUsersSaga'
import { fetchCollectionsWatcher } from './goodsSaga'

export function* rootWatcher() {
	yield all([fetchUsersWatcher(), fetchCollectionsWatcher()]);
};

