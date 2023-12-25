import React, { useEffect, useState } from 'react'
import '../assets/css/styles.css'
// let Apikey = "  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=12&order=date&key=AIzaSyDXSSzf5PuXFdWR0MuzDdd-dIbBtz8D1Vw"
let YoytubWeb = "Youtube.json";

function Applyoutube() {
    const [Appleyoutube, setYoutube] = useState([]);
    useEffect(() => {
        fetch("/Youtube.json")
					.then((res) => res.json())
					.then((data) => {
						setYoutube(data.items);
					})
					.catch((error) => {
						console.log(error);
					});
        
    }, []);
    return (
			<div className="allVideosWrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper bold video-title-wrapper">
								Latest Videos
							</div>
						</div>
						{Appleyoutube?.map((singleVideo, index) => {
							let vidId = singleVideo.id.videoId;
							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
							let videoWrapper = (
								<div key={index} className="col-sm-12 col-md-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<a href={vidLink} target="_blank">
												<img src={singleVideo.snippet.thumbnails.high.url} />
											</a>
										</div>
										<div className="videoInfoWrapper">
											<div className="videoTitle">
												<a href={vidLink} target="_blank">
													{singleVideo.snippet.title}
												</a>
											</div>
											<div className="videoDesc">
												{singleVideo.snippet.description}
											</div>
										</div>
									</div>
								</div>
							);
							return videoWrapper;
						})}
					</div>
				</div>
			</div>
		);
}

export default Applyoutube
