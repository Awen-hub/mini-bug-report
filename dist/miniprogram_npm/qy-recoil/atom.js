export const atomApp = (initData) => {
  let appStoreMap;
  if (!(wx[Symbol.for("appStoreMap")] instanceof Map)) {
    appStoreMap = new Map();
    wx[Symbol.for("appStoreMap")] = appStoreMap;
  } else {
    appStoreMap = wx[Symbol.for("appStoreMap")];
  }
  const { state, setMiddlewares = [], getMiddlewares = [], key } = initData;
  if (appStoreMap.has(Symbol.for(key))) {
    throw `${key}已经被注册,key值必须唯一`;
  }
  try {
    const [appName, keyName] = key.split("/");
    if (appName.length === 0 || keyName.length === 0) {
      throw `${key}不符合约定格式,key的格式应为'app/任意字符串'`;
    }
  } catch (err) {
    throw `${key}不符合约定格式,key的格式应为'app/任意字符串'`;
  }
  const atomSymbol = Symbol.for(key);
  appStoreMap.set(atomSymbol, {
    setMiddlewares,
    getMiddlewares,
    state,
    setFnList: [],
  });
};

export const atomPage = (initData) => {
  let pageStoreMap;
  if (!(wx[Symbol.for("pageStoreMap")] instanceof WeakMap)) {
    pageStoreMap = new Map();
    wx[Symbol.for("pageStoreMap")] = pageStoreMap;
  } else {
    pageStoreMap = wx[Symbol.for("pageStoreMap")];
  }
  const { state, setMiddlewares = [], getMiddlewares = [], key } = initData;
  if (pageStoreMap.has(Symbol.for(key))) {
    throw `${key}已经被注册,key值必须唯一`;
  }
  try {
    const [pageName, keyName] = key.split("/");
    if (pageName.length === 0 || keyName.length === 0) {
      throw `${key}不符合约定格式,key的格式应为'app/任意字符串'`;
    }
  } catch (err) {
    throw `${key}不符合约定格式,key的格式应为'app/任意字符串'`;
  }
  const atomSymbol = {
    key: Symbol.for(key),
  };
  pageStoreMap.set(atomSymbol, {
    setMiddlewares,
    getMiddlewares,
    state,
    key: atomSymbol,
    setFnList: [],
  });
  return atomSymbol;
};
