import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, useParams, NavLink } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = function () {
    const [posts, setPosts] = useState([]);
    useEffect(
        () =>
            async function () {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            },
        []
    );
    return (
        <div className='home'>
            <div className='posts-container'>
                {posts.map((post) => (
                    <NavLink
                        className='post-title'
                        style={{ display: 'block' }}
                        to={`/post/${post.id}`}
                    >
                        {post.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

const Post = function () {
    const params = useParams();
    const [post, setPost] = useState(null);
    useEffect(
        () =>
            async function () {
                const baseURL = 'https://jsonplaceholder.typicode.com/posts/';
                const postIdURL = `${baseURL}${params.postId}`;
                const response = await fetch(postIdURL);
                const data = await response.json();
                console.log('data - ', data);
                setPost(data);
            },
        []
    );

    if (post === null) return <h4>Loading...</h4>;

    return (
        <div className='post'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

const About = function () {
    return (
        <div className='about'>
            <h1>About Us</h1>
        </div>
    );
};

const UserName = function () {
    const params = useParams();
    return (
        <div className='user-name'>
            <h1>My name is {params.userName}</h1>
        </div>
    );
};

const Profile = function () {
    return (
        <div className='profile'>
            <h1>Profile Page</h1>
        </div>
    );
};

const Settings = function () {
    return (
        <div className='settings'>
            <h1>Settings Page</h1>
        </div>
    );
};

const Error = function () {
    return (
        <div className='error'>
            <h1>Oops, Something Went Wrong!</h1>
        </div>
    );
};

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />

                {/* Dynamic Route - useParams */}
                <Route path='/post/:postId' element={<Post />} />
                <Route path='/user/:userName' element={<UserName />} />

                {/* How to nest different Routes */}
                {/* <Route path='/account/profile' element={<Profile />} /> */}
                <Route path='account'>
                    <Route path='profile' element={<Profile />} />
                    <Route path='settings' element={<Settings />} />
                </Route>

                <Route path='*' element={<Error />} />
            </Routes>
            {/* <App /> */}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
