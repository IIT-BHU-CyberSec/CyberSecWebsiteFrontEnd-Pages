import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global_styles.css'
import '../styles/theme-colors.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="container-fluid mb-3">
                <Header />
            </div>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
