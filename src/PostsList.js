import React from 'react'
import Post from './Post';

export default function PostsList({ posts }) {
  return (
    <ol>
      {posts.map((p) => {
        if (p.url != undefined)
          return <Post post={p} />
      }
      )}
    </ol>
  )
}