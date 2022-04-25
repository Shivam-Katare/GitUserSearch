import { useState } from "react";
import GitUser from "./GitUser";

const FindUser = () => {
    const [userName, setUserName] = useState("");
    return (
        <div className="find-user">
            <h1>Git-Karo</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input type="text" placeholder="Enter User Name"
                        onChange={(event) => setUserName(event.target.value)} />
                </div>
            </form>
            <div className="result">
                {userName ?
                    <GitUser username={userName} /> :
                    <p>Please type something on searh</p>
                }
            </div>
        </div>
    )
}
export default FindUser;