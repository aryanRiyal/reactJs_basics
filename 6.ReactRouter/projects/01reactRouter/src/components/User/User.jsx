import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();
    return (
        <div className="flex justify-center items-center">
            <div className="bg-gray-600 text-white text-3xl p-4 text-center rounded-md w-[1200px]">User: {userid}</div>
        </div>
    );
}

export default User;
