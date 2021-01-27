import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../store/actions'

export default function Counter() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter Value: {count} </h2>
      <button onClick={() => dispatch(incrementCounter())}> +1 </button>
      <button onClick={() => dispatch(decrementCounter())}> -1 </button>
    </div>
  )
}
