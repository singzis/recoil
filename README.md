# Recoil

atom 有状态，但没有逻辑，selector 有逻辑但没有状态

## RecoilRoot

RecoilRoot 提供上下文，是使用 recoil hook 的应用的根组件，应用必须以组件形式被 RecoilRoot 包裹。可以有多个 RecoilRoot 共存，不同 RecoilRoot 中的 atom 保持独立，不会互相影响，RecoilRoot 嵌套 RecoilRoot 时也如此，但如果给 RecoilRoot 传入参数`override`为`false`的话，atom 则会穿透影响上层 RecoilRoot 中的 atom

## Atom

## Selector

## useRecoilState

## useRecoilValue

## useSetRecoilState

## useResetRecoilState

## AtomFamily

返回一个返回可写 atom 的函数

当一些相同实例的元素都需要各自的状态，但又不需要共享到全局时，可以使用 AtomFamily，其本质上为一个参数 key 到 atom 的映射，通过传入 key 在底层生成一个唯一的 atom，这里的参数采用的是值等价法，不是引用等价法，参数类型可以包括原始类型，数组或者对象（只要值相同，则是同一个 atom，而不是要同一个引用地址相同才是同一个 atom）

为 AtomFamily 提供一个函数表示默认值，函数可以接收一个参数来返回对应的默认值

对于订阅了该 AtomFamily 的元素，只会在对应 key 更新时组件才会发生更新

## selectorFamily

基本同 selector，只是返回的是一个包装函数，通过传入函数的参数在底层创建一个唯一的 selector 实例。本质上也是参数到函数的映射，采用值相等而非应用相等

## 数据请求

selector 可用于做异步数据请求，但是 selector 是“幂等”函数：对于一组相同的输入，总是返回相同的结果。因为 selector 的计算结果可能会被缓存、重启或者多次执行，因为 selector 最好只用于只读数据库的查询。

react 渲染函数是同步函数，对于异步请求，在请求返回之前，react 也需要进行渲染，这里需要使用`React Suspense`对组件进行包裹，用以处理 pending 状态，渲染一个回调 UI

```jsx
function MyApp() {
  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>加载中。。。</div>}>
        <CurrentUserInfo />
      </React.Suspense>
    </RecoilRoot>
  )
}
```
