import { useEffect, useState } from 'react'
import getFiveNewestPosts from '../api/getFiveNewestPosts.js'
import PostCard from './Postcard'

export default function Postcards() {
    const [blogs, setBlogs] = useState([])

    useEffect(async () => {
        let data = await getFiveNewestPosts()
        setBlogs(() => {
            if (typeof data === 'object') {
                return data.posts
            }
            return data
        })
    }, [])

    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {blogs &&
                    blogs.map((post, idx) => (
                        <PostCard
                            key={idx}
                            title={post.title}
                            imgLink={post.thumbnailImageUrl}
                            content={post.urlTitle}
                            tags={post.tags}
                        />
                    ))}
            </div>
        </>
    )
}
