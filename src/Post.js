import React from 'react'

export default function Post({ post }) {
    return (
        <li className="post-card" key={post.id}>
            <p className="post-name">
                <a href={post.url} className="post-title">{post.title} </a>
                {getURL(post.url)}
            </p>
            <p className="post-info">
                <span className="font-grey">
                    {getPoints(post.score)} | {getAuthor(post.by)} | {getHours(post.time)} | {post.descendants} comments
                </span>
            </p>
        </li>
    )
}

function getPoints(score) {
    return (
      <>
        <i className="fas fa-thumbs-up"></i> {score} points
      </>
    )
  }
  
  function getHours(time) {
    let now = new Date();
    let hours = Math.ceil(Math.abs(now - new Date(time * 1000)) / 36e5);
    return (
      <span title={now.toISOString().split(".")[0]} span className="post-url cursor-pointer">{hours} hours ago</span>
    )
  }
  
  function getAuthor(id) {
    let link = `https://news.ycombinator.com/user?id=${id}`;
    return <a className="post-author" href={link}>{id}</a>
  }
  
  function getURL(url) {
    let site = new URL(url).origin
    return <a href={url} className="font-grey post-url">({site})</a>
  }