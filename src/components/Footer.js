import React from 'react'

export default function Footer() {
    const tiktok = "https://www.tiktok.com/@bocilllllllll?_r=1&_d=dj7db6gkfl1abi&language=en&sec_uid=MS4wLjABAAAA12Sm9Zvvm8EcuOBqjXNeknwhltMbjZ-AJDEhbBGgLVaBrYwQGx4YrjWD5T0jCyK-&share_author_id=6639970426058702850&source=h5_t&u_code=dj7dc2l76e1296&timestamp=1651664081&user_id=6976080625367680002&sec_user_id=MS4wLjABAAAAduHW-pbefDYl3p9ssZkaVEHfFJRv1Njtae71K2-NkaAZEpgGkgrz7WnWJy2JZFea&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7092995187604997889&share_link_id=b22995d9-6f20-4f81-a3e8-e143bcce7513&share_app_id=1180&ugbiz_name=Account";
    const spotify = "https://open.spotify.com/artist/5IjwAAk3njAeiFY1InInsn";
    const instagram = "https://www.instagram.com/misellia_/";
    const twitter = "https://mobile.twitter.com/misellia_";
    const applemusic = "https://music.apple.com/id/artist/misellia/1391271891";
    const youtube = "https://www.youtube.com/c/MiselliaIkwan";
    const gmail = "misellia.business@gmail.com";

    return (
        <div className="py-10 bg-zinc-900 w-full left-0 relative 2xl:px-28 xl:px-28 lg:px-20 md:px-32 sm:px-8">
            <div className="flex flex-wrap justify-center">
                <span className="font-semibold text-lg text-center">Follow Me On:</span>
            </div>
            <div className="flex flex-wrap mt-6 gap-4 lg:w-full sm:w-1/2 sm:mx-auto justify-center">
                <a href={tiktok} rel="noreferrer" target="_blank" className="group">
                    <div className="xl:p-3 lg:p-3 md:p-3 sm:p-2 bg-white group-hover:-translate-y-3 ease-in-out duration-300 text-black rounded-lg justify-center">
                        <i className="fa-brands fa-tiktok fa-lg"></i>
                    </div>
                </a>
                <a href={spotify} rel="noreferrer" target="_blank" className="group">
                    <div className="xl:p-3 lg:p-3 md:p-3 sm:p-2 bg-white group-hover:-translate-y-3 ease-in-out duration-300 text-black rounded-lg justify-center">
                        <i className="fa-brands fa-spotify fa-lg"></i>
                    </div>
                </a>
                <a href={instagram} rel="noreferrer" target="_blank" className="group">
                    <div className="xl:p-3 lg:p-3 md:p-3 sm:p-2 bg-white group-hover:-translate-y-3 ease-in-out duration-300 text-black rounded-lg justify-center">
                        <i className="fa-brands fa-instagram fa-lg"></i>
                    </div>
                </a>
                <a href={twitter} rel="noreferrer" target="_blank" className="group">
                    <div className="xl:p-3 lg:p-3 md:p-3 sm:p-2 bg-white group-hover:-translate-y-3 ease-in-out duration-300 text-black rounded-lg justify-center">
                        <i className="fa-brands fa-twitter fa-lg"></i>
                    </div>
                </a>
                <a href={applemusic} rel="noreferrer" target="_blank" className="group">
                    <div className="xl:p-3 lg:p-3 md:p-3 sm:p-2 bg-white group-hover:-translate-y-3 ease-in-out duration-300 text-black rounded-lg justify-center">
                        <i className="fa-brands fa-itunes fa-lg"></i>
                    </div>
                </a>
                <a href={youtube} rel="noreferrer" target="_blank" className="group">
                    <div className="xl:p-3 lg:p-3 md:p-3 sm:p-2 bg-white group-hover:-translate-y-3 ease-in-out duration-300 text-black rounded-lg justify-center">
                        <i className="fa-brands fa-youtube fa-lg"></i>
                    </div>
                </a>
            </div>
            <div className="flex flex-wrap justify-center mt-10">
                <a className="text-sm lg:text-lg text-center underline" href="mailto:misellia.business@gmail.com">{gmail}</a>
            </div>
        </div>
        
    )
}
