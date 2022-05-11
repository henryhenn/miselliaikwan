import React from 'react'

export default function MusicLinks(props) {
    return (
        <div>
            <span className="block mt-2 text-center font-semibold">
                <a href={props.spotify} rel="noreferrer" target="_blank" className="hover:text-amber-600 ease-in-out duration-300"><i className="fa-brands fa-spotify fa-lg"></i></a>
                <a href={props.applemusic} rel="noreferrer" target="_blank" className="hover:text-amber-600 ease-in-out duration-300"><i className="fa-brands fa-itunes fa-lg mx-2"></i></a>
                <a href={props.youtube} rel="noreferrer" target="_blank" className="hover:text-amber-600 ease-in-out duration-300"><i className="fa-brands fa-youtube fa-lg"></i></a>
            </span>
        </div>
    )
}
