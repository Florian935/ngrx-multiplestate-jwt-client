import { loginFeatureKey, loginReducer } from '@login/state';
import { appFeatureKey, appReducer } from './app.reducers';

export const rootReducerMap = {
    [appFeatureKey]: appReducer,
    [loginFeatureKey]: loginReducer
};
