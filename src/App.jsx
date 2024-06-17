import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'
import Newuser from './components/newUser/NewUser'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] =useState([])

  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false)
    if (e.key === "Escape") setShowModal (false)
    }

    const addUser = (user) => {
      setUsers((prev) => {
        return [...prev, user]
      })
      setShowModal(false)
    }



  return (
   <div onKeyDown={closeModal} onClick={closeModal} className='App'>
    <Navbar usersLength={users.length}/>
      <main>
        <div className='no-users'> 
          {users.length === 0 && <h2>no users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser}/>
      </main>
      {showModal && <Newuser addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
    <Footer/>

   </div>
  )
}

export default App


