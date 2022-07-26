import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'
import { useState } from 'react'

function App() {
const [emails, setEmails] = useState(initialEmails)

window.emails=emails

function toggleRead(email){
  const emailsCopy = structuredClone(emails)

  const targetTodo = emailsCopy.find(target => target.id === email.id)
    targetTodo.read = !targetTodo.read

    setEmails(emailsCopy)

}



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
            <ul className='emails-list'>
              {emails.map(email=> (
                <li className={email.read ? 'read' : 'unread'}>
                 <span className="email.checkbox"><input type='checkbox' onClick={() =>
                toggleRead(email)
                }>
                  </input></span>
                 <span className="email.star"> ☆ </span>
                 <span className="email.sender">{email.sender}</span>
                 <span className="title">{email.title}</span>
                </li>
              ))}
            </ul>
           </nav>
        }</main>
    </div>
  )
}

export default App
