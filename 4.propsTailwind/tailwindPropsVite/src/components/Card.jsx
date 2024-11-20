import React from "react";

// function Card(props) {
function Card({ title = "Bird Name", info }) {
    // console.log(props);
    const imgUrl =
        "https://images.pexels.com/photos/27269560/pexels-photo-27269560/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
        <>
            {info.extinct ? (
                <></>
            ) : (
                <div className="max-w-md p-6 rounded-md shadow-md bg-black mb-4">
                    <img
                        src={imgUrl}
                        alt=""
                        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                    />
                    <div className="mt-6 mb-2">
                        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                            {/* {props.title} */}
                            {title}
                        </span>
                        <h2 className="text-xl font-semibold tracking-wide">
                            {/* {props.info.flight} */}
                            {info.flight}
                        </h2>
                    </div>
                    <p className="text-gray-300">
                        {/* {props.info.funFact} */}
                        {info.funFact}
                    </p>
                </div>
            )}
        </>
    );
}

export default Card;
