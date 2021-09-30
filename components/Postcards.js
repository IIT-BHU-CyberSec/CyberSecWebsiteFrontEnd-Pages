import { Component } from 'react'
import getFiveNewestPosts from '../api/getFiveNewestPosts.js'
import PostCard from './Postcard'

export default class extends Component {
    render() {
        return (
            <>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {this.props.blogs &&
                        this.props.blogs.map((post, idx) => (
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
}
