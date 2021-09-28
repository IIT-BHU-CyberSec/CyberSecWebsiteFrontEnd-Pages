import {
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineGithub,
    AiOutlineMail,
} from 'react-icons/ai'

const MemberCard = ({ data }) => {
    return (
        <div class="card rounded round text-center">
            <img src={data.profileImg} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-title display-6">{data.name}</p>
            </div>

            <ul className="list-inline">
                <li className="list-inline-item">
                    {data.github && (
                        <a href={data.github} className="accent-color-link">
                            <AiOutlineGithub size={40} />
                        </a>
                    )}
                </li>

                <li className="list-inline-item">
                    {data.linkedin && (
                        <a href={data.linkedin} className="accent-color-link">
                            <AiOutlineLinkedin size={40} />
                        </a>
                    )}
                </li>

                <li className="list-inline-item">
                    {data.email && (
                        <a href={data.email} className="accent-color-link">
                            <AiOutlineMail size={40} />
                        </a>
                    )}
                </li>

                <li className="list-inline-item">
                    {data.twitter && (
                        <a href={data.twitter} className="accent-color-link">
                            <AiOutlineTwitter size={40} />
                        </a>
                    )}
                </li>
            </ul>
        </div>
    )
}

export { MemberCard }
