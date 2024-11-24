import { useState, useEffect } from "react";
import { getPosts, getRandomUser } from "./api/userIndex";
import PostCard from "./userComponents/PostCard";
import UserCard from "./userComponents/UserCard";
import "./App.css";

function App() {
    const [state, setState] = useState(null);
    const [data, setData] = useState(null);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getPosts().then((posts) => {
            setData(posts);
        });
    }, []);

    useEffect(() => {
        getRandomUser().then((user) => {
            setUserData(user.results[0]);
        });
    }, [state]);

    return (
        <div className="App">
            {userData && (
                <>
                    <UserCard data={userData} /> <button onClick={() => setState(!state)}>Refresh</button>
                </>
            )}
            {data ? data.map((e) => <PostCard title={e.title} body={e.body} />) : <p>No Data</p>}
        </div>
    );
}

export default App;
