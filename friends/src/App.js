import React from 'react'
import { Route } from 'react-router-dom'
import FriendLogin from './components/FriendLogin'

import './App.css'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Friends Authentication App</h2>
      </header>

      <Route path="/" component={FriendLogin} />
    </div>
  )
}

export default App
