import { isNeedUpdate } from "./utils";
import * as jsx2mp from "jsx2mp-runtime/dist/jsx2mp-runtime.wechat.esm";

export const useAppState = (key) => {
  const appStoreMap = wx[Symbol.for("appStoreMap")];
  const atomSymbol = Symbol.for(key);
  if (!appStoreMap.has(atomSymbol)) {
    console.error(`${key}尚未注册`);
    throw error;
  }
  let stateObj = appStoreMap.get(atomSymbol);
  const { setMiddlewares, getMiddlewares, state, setFnList } = stateObj;
  const [activeState, setActiveState] = jsx2mp.useState(state);
  getMiddlewares.forEach((middlewareFn) => middlewareFn(state));
  const setFn = (newState) => {
    let oldState = state;
    if (!isNeedUpdate(oldState, newState)) {
      return;
    }
    setMiddlewares.forEach((middlewareFn) => middlewareFn(oldState, newState));
    while (setFnList.length !== 0) {
      const setFn = setFnList.pop();
      setFn(newState);
    }
    stateObj.state = newState;
  };
  setFnList.push(setActiveState);
  return [activeState, setFn];
};

export const usePageState = (keyObj) => {
  const pageStoreMap = wx[Symbol.for("pageStoreMap")];
  if (!pageStoreMap.has(keyObj)) {
    console.error(`${Symbol.keyFor(keyObj.key)}尚未注册`);
    throw error;
  }
  let stateObj = pageStoreMap.get(keyObj);
  const { setMiddlewares, getMiddlewares, state, setFnList } = stateObj;
  const [activeState, setActiveState] = jsx2mp.useState(state);
  getMiddlewares.forEach((middlewareFn) => middlewareFn(state));
  const setFn = (newState) => {
    let oldState = state;
    if (!isNeedUpdate(oldState, newState)) {
      return;
    }
    setMiddlewares.forEach((middlewareFn) => middlewareFn(oldState, newState));
    while (setFnList.length !== 0) {
      const setFn = setFnList.pop();
      setFn(newState);
    }
    stateObj.state = newState;
  };
  setFnList.push(setActiveState);
  return [activeState, setFn];
};
