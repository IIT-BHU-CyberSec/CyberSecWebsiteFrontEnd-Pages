import { Component, useEffect, useState } from 'react'
import Prism from 'prismjs'
import moment from 'moment'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'
import getBlogPostByUrlTitle from '../../api/getBlogPostByUrlTitle.js'
import Header from '../../components/Header.js'
import { useRouter } from 'next/router'
import ThumbnailImg from '../../components/thumbnail'
import { AiFillTag } from 'react-icons/ai'
import Head from 'next/head'

export default class extends Component {
    static async getInitialProps({ query }) {
        const apiResult = await getBlogPostByUrlTitle(query.title)

        return {
            post: apiResult && apiResult.post
        }
    }
    // const [post, setPost] = useState(null)
    // const router = useRouter()

    // const { title } = router.query
    // useEffect(() => {
    //     title &&
    //         getBlogPostByUrlTitle(title).then((data) => {
    //             console.log(data.post)
    //             setPost(() => data.post)
    //         })
    // }, [title])
    render() {
        return (
            <>
                <Head>
                    <title>{this.props.post && this.props.post.seoTitleTag}</title>
                </Head>
                <div className="container-fluid">
                    <Header />
                </div>
                <div className="container">
                    <div className="row">
                        {this.props.post && (
                            <div className="col-12 raleway">
                                <div className="my-4">
                                    <ThumbnailImg
                                        src={this.props.post.thumbnailImageUrl}
                                        minHeight="200px"
                                        maxHeight="200px"
                                    />
                                </div>
                                <h1 className="display-3">{this.props.post.title}</h1>
                                <div className="blog-post-container">
                                    <ul className="list-inline text-muted">
                                        <li className="list-inline-item tag">
                                            <AiFillTag></AiFillTag>
                                        </li>
                                        {this.props.post.tags.map((val, idx) => (
                                            <li
                                                className="list-inline-item tag"
                                                key={idx}
                                            >
                                                {val}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-muted mb-3">
                                        {moment
                                            .unix(this.props.post.dateTimestamp)
                                            .format('MMMM Do, YYYY')}
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: this.props.post.markdownContent,
                                        }}
                                        className="blog-post-body-content"
                                    ></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    }
}
