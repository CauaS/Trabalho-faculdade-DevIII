import { all  } from "redux-saga/effects";
import userSagas from '../sagas/users';
import sectorSagas from '../sagas/sector';
import productSagas from '../sagas/product';

export default function* rootSaga(){
    yield all([
        ...userSagas,
        ...sectorSagas,
        ...productSagas
    ])
}
