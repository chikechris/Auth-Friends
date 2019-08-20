import React from 'react'
import { Route } from 'react-router-dom'
import FriendLogin from './components/FriendLogin'
import FriendList from './views/FriendList'
import './App.css'
import PrivateRoute from './utility/PrivateRoute'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Friends Authentication App</h2>
      </header>
      <Route exact path='/' component={FriendLogin} />
      <PrivateRoute path='/friends' component={FriendList} />
    </div>
  )
}

export default App
