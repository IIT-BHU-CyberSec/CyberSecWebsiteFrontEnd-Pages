import React from 'react'
import { AiFillTag } from 'react-icons/ai'
import ThumbnailImg from './thumbnail'
import Link from 'next/link'

const PostCard = ({ title, imgLink, content, tags }) => {
    return (
        <>
            <div className="col mb-4 raleway">
                <div className="card round mx-2 h-100 pb-3 shadow-lg">
                    <ThumbnailImg
                        src={imgLink}
                        maxHeight="120px"
                        minHeight="120px"
                    />
                    <div className="card-body position-relative">
                        <ul className="list-inline">
                            <li className="list-inline-item tag">
                                <AiFillTag></AiFillTag>
                            </li>
                            {tags.map((val, idx) => (
                                <li className="list-inline-item tag" key={idx}>
                                    {val}
                                </li>
                            ))}
                        </ul>
                        <div className="margin-bottom-30">{title}</div>
                        <div className="text-end mt-auto bottom-0 position-absolute raleway-thin">
                            <a
                                href={`blog/${content}`}
                                className="btn btn-accent btn-shadow text-mono"
                            >
                                Read Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .margin-bottom-30 {
                    margin-bottom: 30px;
                }
                .tag {
                    color: var(--bs-gray-500);
                }
            `}</style>
        </>
    )
}

export default PostCard
