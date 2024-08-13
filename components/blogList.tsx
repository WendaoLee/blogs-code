"use client"
import { allPosts } from "@/.contentlayer/generated"
import { useState } from "react"

export default function BlogLists(){
    const [posts,setPosts] = useState(allPosts)
    return (
        <div>
        <h1>Blog Lists</h1>
        <ul>
            {posts.filter(ele => ele?.category === 'blog').map((post) => (
            <li key={post.slug}>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
            </li>
            ))}
        </ul>
        </div>
    )
}