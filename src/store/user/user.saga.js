import { takeLatest, all, call, put } from "redux-saga/effects";

import USER_ACTION_TYPES from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

import {
    getCurrentUser,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export function* getShapshotFormUserAuth(userAuth, additionalDetails) {
    try {
        const userShapshot = yield call(
            createUserDocumentFromAuth,
            userAuth,
            additionalDetails
        );
        console.log(userShapshot);
        console.log(userShapshot.data());
        yield put(
            signInSuccess({ id: userShapshot.id, ...userShapshot.data() })
        );
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getShapshotFormUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
    yield all([call(onCheckUserSession)]);
}
