import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import { useState } from 'react'

function App() {
const [emails, setEmails] = useState(initialEmails)

window.emails=emails

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {
         <nav>
            <ul>
              {emails.map(email=> (
                <li>
                 <span className="email.sender"><input type='checkbox'></input></span>
                 <span className="email.sender"> ☆ </span>
                 <span className="email.sender">{email.sender}</span>
                 <span className="email.title">{email.title}</span>
                </li>
              ))}
            </ul>
           </nav>
        }</main>
    </div>
  )
}

export default App
