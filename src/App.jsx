import './App.css'
import User from './User';
import withLoader from './withLoader'

const UserWithLoader = withLoader(User);

const App = () => {
  
  return (
    <div>
      <div>App</div>
      <UserWithLoader />
    </div>
  )
}

export default App
