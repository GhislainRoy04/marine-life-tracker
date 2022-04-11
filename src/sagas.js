import { fork } from 'redux-saga/effects';

import dashboard from 'dashboard/sagas';

export default function* rootSaga() {
    yield [
        fork(dashboard)
    ];
}
