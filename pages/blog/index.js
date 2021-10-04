import { Component } from 'react'
import getAllBlogPosts from '../../api/getAllBlogPosts.js'
import Header from '../../components/Header.js'
import PostCards from '../../components/Postcards.js'

export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getAllBlogPosts()

        return {
            blogs: apiResult && apiResult.posts,
        }
    }

    constructor(props) {
        super(props)

        let st = new Set()

        props.blogs.forEach((blog) => {
            for (let tag of blog.tags) {
                st.add(tag)
            }
        })

        this.state = { value: '', blogs: props.blogs, tags: st }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
        let newBlogs = this.props.blogs.filter((blog) => {
            if (!target.value) return true
            if (
                blog.tags
                    .join(',')
                    .toLowerCase()
                    .includes(target.value.toLowerCase())
            )
                return true
            if (blog.title.toLowerCase().includes(target.value.toLowerCase()))
                return true
            return false
        })
        this.setState({ value: target.value, blogs: newBlogs })
    }

    render() {
        return (
            <>
                <div className="container-fluid mb-3">
                    <Header />
                </div>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-6 col-6 mx-auto">
                            <h2 className="text-center">Search Blogs</h2>
                            <input
                                className="form-control mt-2"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            ></input>
                            <div>
                                Available Tags:{' '}
                                {Array.from(this.state.tags).map((tag) => (
                                    <>
                                        <span
                                            className="mx-2 accent-color-link"
                                            onClick={() =>
                                                this.handleChange({
                                                    target: { value: tag },
                                                })
                                            }
                                        >
                                            {tag}
                                        </span>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <PostCards blogs={this.state.blogs} />
                </div>
            </>
        )
    }
}
