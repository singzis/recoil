import React from 'react'
import { useRecoilState } from 'recoil'
import { itemState } from '../recoil'

const Item = ({ id }) => {
  const [_id, setId] = useRecoilState(itemState(id))
  console.log('渲染', id)
  const onClick = () => {
    setId(pre => pre + 1 )
  }
  return <div>
    {`id_${_id}`}
    <button onClick={onClick}>+</button>
  </div>
}

export default Item
