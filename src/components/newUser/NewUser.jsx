import './index.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

function Newuser({addUser}) {
    const [user, setUser] = useState({
    
    id: uuidv4(),
    image: '',
    firstName: '',
    lestName: '',
    age: null,
    from: '',
    job: '',
    gender: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(user);

    }

    return <div className='modal-wrapper'>
        <div className="overlay">
            <div className="modal">
                <h3>Create New user</h3>
                <form onSubmit={handleSubmit}>
                    <label> 
                        <span>image URL:</span>
                        <input onChange={(e) => {setUser((prev) => {
                            return{...prev, image: e.target.value}
                        })}} type="url" required />
                    </label>
                    <label> 
                        <span>first name:</span>
                        <input onChange={(e) => {setUser((prev) => {
                            return{...prev, firstName: e.target.value}
                        })}} type="text" required />
                    </label>
                    <label> 
                        <span>last name:</span>
                        <input onChange={(e) => {setUser((prev) => {
                            return{...prev, lastName: e.target.value}
                        })}} type="text" required />
                    </label>
                    <label> 
                        <span>age:</span>
                        <input onChange={(e) => {setUser((prev) => {
                            return{...prev, age: e.target.value}
                        })}} type="number" required />
                    </label>
                    <label> 
                        <span>from:</span>
                        <input onChange={(e) => {setUser((prev) => {
                            return{...prev, from: e.target.value}
                        })}} type="text" required />
                    </label>
                    <label> 
                        <span>job:</span>
                        <input onChange={(e) => {setUser((prev) => {
                            return{...prev, job: e.target.value}
                        })}} type="text" required />
                    </label>
                    <div className='gender'>
                        <span>gender:</span>
                        <label>
                            <small>male</small>
                            <input onChange={(e) => {setUser((prev) => {
                                return{...prev, gender: e.target.value}
                            })}} type="radio" required name='gender' value="male" />
                        </label>
                        <label>
                            <small>female</small>
                            <input onChange={(e) => {setUser((prev) => {
                                return{...prev, gender: e.target.value}
                            })}} type="radio" required name='gender' value="female" />
                        </label>
                    </div>
                    <button className='modal-btn'>submit</button>
                </form>
            </div>
            

        </div>  
    </div>
}

export default Newuser