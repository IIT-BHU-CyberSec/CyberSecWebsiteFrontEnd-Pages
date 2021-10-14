import Jumbotron from '../components/Jumbotron'
import Postcards from '../components/Postcards'
import { Component } from 'react'
import getFiveNewestPosts from '../api/getFiveNewestPosts.js'

export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getFiveNewestPosts()

        return {
            blogs: apiResult && apiResult.posts,
        }
    }
    render() {
        return (
            <>
                <Jumbotron />
                <div className="container position-relative">
                    <Postcards {...this.props} />
                </div>
            </>
        )
    }
}
