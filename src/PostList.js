import React from 'react'
import Post from './Post'

export default function PostList ({posts = []}) {
     return (
      <div>
       {posts.map((p, i) => <Post {...p} title={p.title} author={p.author}  key={'post-' + i} />)}
      </div> 
      )
}
    
