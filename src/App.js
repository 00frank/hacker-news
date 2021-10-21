import { useEffect, useState } from "react";
import Loading from "./Loading";
import PostsList from "./PostsList";
import { Endpoints, getPostsId, getPosts } from "./utils/posts"

function App() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		async function setPostsJSON() {
			let postsId = await getPostsId(Endpoints.STORIES);
			if (postsId.length > 25)
				postsId = postsId.slice(0, 25)
			const response = await getPosts(postsId);
			setPosts(response);
		}
		setPostsJSON()
	}, [])

	return (
		<div className="">
			{/* <div> */}
				<h1 className="row"> <span className="brand">F</span> Hacker News</h1>
				<div className="">
					{posts.length == 0 && <Loading />}
					{posts &&
						<div className="row">
							<PostsList posts={posts} />
						</div>}
				</div>
			{/* </div> */}
		</div>
	);
}

export default App;
