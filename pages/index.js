import Header from '../components/Header.js'
import Jumbotron from '../components/Jumbotron'
import Postcards from '../components/Postcards'
import { Component } from 'react'
import getFiveNewestPosts from '../api/getFiveNewestPosts.js'

export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getFiveNewestPosts()

        return {
            blogs: apiResult && apiResult.posts
        }
    }
    render() {
        return (
            <>
                <div className="container-fluid mb-3">
                    <Header />
                </div>
                <Jumbotron />
                <div className="container position-relative">
                    <Postcards {...this.props} />
                </div>
            </>
        )
    }
}
