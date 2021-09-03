import Header from '../components/Header.js'
import Jumbotron from '../components/Jumbotron'
import Postcards from "../components/Postcards"
import NewHeader from "../components/newHeader"

export default function Component() {

    return (
        <>
            <div
                className="container-fluid mb-3"
                style={
                    {
                        backgroundImage: "url(/images/layered-steps-haikei.svg)",
                        // backgroundImage: "url(/images/blob-scene-haikei.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "80vh",
                        backgroundPosition: "center",
                    }
                }
            >
                <Header />
                <Jumbotron />
            </div>
            <div className="container position-relative"
                style={{
                    top: "-150px"
                }}>
                <Postcards />
            </div>
        </>
    )

}
