const VideoTitle = ({title, overview}) => {
    return(
        <div className="w-screen aspect-video pt-[12%] px-24 absolute pointer-events-none text-white bg-gradient-to-tr from-black">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-3 text-lg w-1/4">{overview}</p>
            <div className="">
                <button className="bg-white text-black  p-4 px-12 text-xl rounded-lg pointer-events-auto hover:bg-opacity-70">► Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg pointer-events-auto">🛈 More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;