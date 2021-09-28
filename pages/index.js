import Header from '../components/Header.js'
import Jumbotron from '../components/Jumbotron'
import Postcards from '../components/Postcards'

export default function Component() {
    return (
        <>
            <div className="container-fluid mb-3">
                <Header />
            </div>
            <Jumbotron />
            <div className="container position-relative">
                <Postcards />
            </div>
        </>
    )
}
