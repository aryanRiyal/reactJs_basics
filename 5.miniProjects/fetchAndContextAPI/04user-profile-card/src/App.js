import React, { useEffect, useState } from "react";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
            .then((response) => response.json())
            .then((data) => setUser(data.results[0]))
            .catch((error) => console.error("Error fetching user:", error));
    }, []);

    if (!user) {
        return <div className="text-center text-lg mt-10">Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white shadow-lg rounded-xl p-6 w-[480px] flex flex-col sm:flex-row">
                <div className="flex-shrink-0">
                    <img
                        src={user.picture.large}
                        alt="Profile"
                        className="w-40 h-40 rounded-lg object-cover border-4 border-gray-300"
                    />
                </div>

                <div className="ml-6 flex flex-col justify-center space-y-4 flex-grow">
                    <p className="text-gray-700 font-semibold truncate">
                        <span className="font-bold text-black">Name:</span>{" "}
                        {`${user.name.title} ${user.name.first} ${user.name.last}`}
                    </p>

                    <p className="text-gray-700 font-semibold truncate">
                        <span className="font-bold text-black">Gender:</span> {user.gender}
                    </p>

                    <p className="text-gray-700 font-semibold truncate flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>
                        <a
                            href={`tel:${user.phone}`}
                            className="text-blue-500 hover:underline break-words inline-block"
                        >
                            {user.phone}
                        </a>
                    </p>

                    <p className="text-gray-700 font-semibold truncate flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                            />
                        </svg>
                        <a
                            href={`mailto:${user.email}`}
                            className="text-blue-500 hover:underline break-words inline-block"
                        >
                            {user.email}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
