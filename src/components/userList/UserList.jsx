import './index.css'

function UserList({users , deleteUser}) {
    return <div className='userList'>
        <div className='userList-container container'>
            {users.map((user) => {
                return <div className='card' key={user.id}>
                    <div className="card-inner">
                        <img src={user.image} alt={user.name} height={150} width={150} />
                        <h3> {user.firstName} {user.latsName}, {user.age} age</h3>
                        <p>From: {user.from}</p>
                        <p>job: {user.job}</p>
                        <p>gender: {user.gender}</p>
                        <button onClick={() => deleteUser(user.id)}>delete</button>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default UserList