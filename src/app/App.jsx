import Counter from '../components/Counter'
import { Provider } from 'react-redux'
import store from '../store/store'

export default function App() {
  return (
    <Provider store={store}>
      <h1> demo-redux </h1>
      <p> Example code for using Redux with React Hooks</p>
      <Counter />
    </Provider>
  )
}
