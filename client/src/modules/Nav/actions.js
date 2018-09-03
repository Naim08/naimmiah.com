/* eslint-disable import/prefer-default-export */
import * as t from './actiontypes';

function actionCreator(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const setTarget = actionCreator(t.SET_NAV, 'nav');
