import { useState, useEffect } from 'react';

const GitUser = ({ username }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await (await fetch(`https://api.github.com/users/${username}`)).json();
                setUser(response);
                setLoading(false);
                console.log(response);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [username]);
    return (
        <div className="github-user">

            {loading && <p>Loading...</p>}
            {error && <p>{error.message} </p>}

            {
                user && (
                    <ul className='details'>

                        <li>
                            <img className='profile' src={user.avatar_url} alt={user.login} />
                        </li>
                        <li>
                            <strong>Name:</strong>{user.name}
                        </li>
                        <li>
                            <strong>Bio:</strong>{user.bio ? user.bio : "User does not entered bio"};
                        </li>
                        <li>
                            <strong>Location:</strong> {user.location ? user.location : "N/A"}
                        </li>
                        <li>
                            <strong>Blog: </strong> {user.blog ? user.blog : "N/A"}
                        </li>
                        <li>
                            <strong>Followers:</strong> {user.followers}
                        </li>
                        <li>
                            <strong>Following:</strong> {user.following}
                        </li>

                    </ul>
                )
            }
        </div>
    );
};
export default GitUser;