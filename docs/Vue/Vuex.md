---
sidebar: auto
---

# Vuex

## 1.  数据持久化

解决浏览器刷新后数据消失问题

利用vuex-persistedstate插件，将vuex的数据存储到浏览器中，刷新后重新拿出来导入vuex中

- 安装

```bash
npm install vuex-persistedstate  --save
or
yarn add vuex-persistedstate
```

- API
  - `key<String> `: The key to store the persisted state under. Defaults to `vuex`.（设置存储key值）
  - `paths<Array> `: An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. If an empty array is given, no state is persisted. Paths must be specified using dot notation. If using modules, include the module name. eg: "auth.user" Defaults to `undefined`.
  - `reducer<Function> `: A function that will be called to reduce the state to persist based on the given paths. Defaults to include the values.（设置需求数据进行数据持久化）
  - `subscriber<Function> `: A function called to setup mutation subscription. Defaults to `store => handler => store.subscribe(handler)`.
  - `storage<Object> `: Instead for (or in combination with) `getState` and `setState`. Defaults to localStorage.（设置存储位置）
  - `getState<Function> `: A function that will be called to rehydrate a previously persisted state. Defaults to using `storage`.
  - `setState<Function> `: A function that will be called to persist the given state. Defaults to using `storage`.
  - `filter<Function> `: A function that will be called to filter any mutations which will trigger `setState` on storage eventually. Defaults to `() => true`.
  - `overwrite<Boolean> `: When rehydrating, whether to overwrite the existing state with the output from `getState` directly, instead of merging the two objects with `deepmerge`. Defaults to `false`.
  - `arrayMerger<Function> `: A function for merging arrays when rehydrating state. Defaults to `function (store, saved) { return saved }` (saved state replaces supplied state).
  - `rehydrated<Function> `: A function that will be called when the rehydration is finished. Useful when you are using Nuxt.js, which the rehydration of the persisted state happens asynchronously. Defaults to `store => {}`
  - `fetchBeforeUse<Boolean> `: A boolean indicating if the state should be fetched from storage before the plugin is used. Defaults to `false`.
  - `assertStorage<Function> `: An overridable function to ensure storage is available, fired on plugins's initialization. Default one is performing a Write-Delete operation on the given Storage instance. Note, default behaviour could throw an error (like `DOMException: QuotaExceededError`).

  

```js
import createPersistedState from "vuex-persistedstate";
const store = new Vuex.Store({
  //默认存储到localStorage
  plugins: [createPersistedState()],

  plugins: [
    createPersistedState({
      // 修改存储key值
      key: "module-vuex-key",
      // 修改存储位置
      storage: window.sessionStorage,
      // 设置需要的数据进行持久化
      reducer(val) {
        return {
          userInfo: val.userInfo,
        };
      },
    }),
  ],
});

```



- vuex引用多个插件的写法

```js
export default new Vuex.Store({
  plugins: [plugins1().plugins2()]
})
```









---

   <Vue/>
