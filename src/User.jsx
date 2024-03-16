
const User = () => {

    const user = {
        name: 'Sloba',
        email: 'sloba@gamil.com'
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default User;