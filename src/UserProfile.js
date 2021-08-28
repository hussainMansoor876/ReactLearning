const UserProfile = (props) => {
    let { userInfo } = props
    return (
        <div>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Age: {userInfo.age}</p>
            <p>Address: {userInfo.address}</p>
            <p>Gender: {userInfo.gender}</p>
            <p>Phone Number: {userInfo.phone}</p>
            <hr />
        </div>
    )
}

const DummyComponent = () => {
    return (
        <h1>Hello Dummy</h1>
    )
}

export { UserProfile, DummyComponent }