import Head from 'next/head'
import { MemberCard } from '../components/team'

const Team = [
    {
        name: 'Name',
        profileImg: 'https://copsiitbhu.co.in/static/assets/img/logo.svg',
        github: 'https://github.com',
        email: 'mailto:xx@email.com',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com',
    },
]

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="container mt-3">
                <div className="row text-center mb-5">
                    <div className="col-12">
                        {/* <h1 className="display-3">Who We Are?</h1>
                        Folks of IIT-BHU interested in Cyber Security. */}
                    </div>
                    <h1 className="display-3">Team</h1>
                </div>
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 px-sm-6">
                    {Team.map((val, idx) => (
                        <div className="col mb-4 px-2">
                            <MemberCard data={val} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
