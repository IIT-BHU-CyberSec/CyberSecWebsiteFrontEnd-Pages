import moment from 'moment'
import Prism from 'prismjs'
import Head from 'next/head'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js'
require('prismjs/components/prism-c');
import { Component } from 'react'
import { AiFillTag } from 'react-icons/ai'
import getBlogPostByUrlTitle from '../../api/getBlogPostByUrlTitle.js'
import ThumbnailImg from '../../components/thumbnail'

export default class extends Component {
    static async getInitialProps({ query }) {
        const apiResult = await getBlogPostByUrlTitle(query.title)

        return {
            post: apiResult && apiResult.post,
        }
    }
    componentDidMount() {
        Prism.highlightAll()
    }
    render() {
        return (
            <>
                <Head>
                    <title>
                        {this.props.post && this.props.post.seoTitleTag}
                    </title>
                </Head>
                <div className="container">
                    <div className="row">
                        {this.props.post && (
                            <div >
                                <div className="my-4">
                                    <ThumbnailImg
                                        src={this.props.post.thumbnailImageUrl}
                                        minHeight="200px"
                                        maxHeight="200px"
                                    />
                                </div>
                                <h1 className="display-3">
                                    {this.props.post.title}
                                </h1>
                                <div className="blog-post-container">
                                    <ul className="list-inline text-muted">
                                        <li className="list-inline-item tag">
                                            <AiFillTag></AiFillTag>
                                        </li>
                                        {this.props.post.tags.map(
                                            (val, idx) => (
                                                <li
                                                    className="list-inline-item tag"
                                                    key={idx}
                                                >
                                                    {val}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="text-muted mb-3">
                                        {moment
                                            .unix(this.props.post.dateTimestamp)
                                            .format('MMMM Do, YYYY')}
                                    </div>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: this.props.post
                                                .markdownContent,
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
