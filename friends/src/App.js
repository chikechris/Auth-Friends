import React from 'react'
import { Route } from 'react-router-dom'
import FriendLogin from './components/FriendLogin'
import FriendList from './friend/FriendList'

import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Friends Authentication App</h2>
      </header>

      <Route path='/' component={FriendLogin} />
      <Route path='/friends-list' component={FriendList} />
    </div>
  )
}

export default App
