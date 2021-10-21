import React from 'react'

export default function PostsList({ posts }) {
  return (
    <ol>
      {posts.map((p) =>
        <li className="post-card" key={p.id}>
          <p className="post-name">
            <a href={p.url} className="post-title">{p.title} </a>
            {getURL(p.url)}
          </p>
          <p className="post-info">
            <span className="font-grey">
              {getPoints(p.score)} | {getAuthor(p.by)} | {getHours(p.time)} | {p.descendants} comments
            </span>
          </p>
        </li>
      )}
    </ol>
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