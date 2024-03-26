import './App.css'
import User from './User';
import ClickCounter from './components/ClickCounter';
import ClickTwo from './components/ClickTwo';
import HoverCounter from './components/HoverCounter';
import withLoader from './withLoader'

const UserWithLoader = withLoader(User);

const App = () => {
  
  return (
    <div>
      <div>App</div>
      <UserWithLoader />
      <ClickCounter />
      <ClickTwo />
      <HoverCounter />
    </div>
  )
}

export default App
