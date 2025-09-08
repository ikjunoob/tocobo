import React from 'react'
import instar from "../util/instar";

const Instargram = () => {
    return (
        <div className="inner instar-inner">
            <div className="t-wrap">
                <h3 className="title">Instagram</h3>
                <a
                    className="more"
                    href="https://www.instagram.com/tocobo_official"
                    target="_blank"
                    rel="noreferrer"
                >
                    @tocobo_official
                </a>
            </div>

            <ul className="instar-lst">
                {instar.map(({ id, image, alt, link }) => (
                    <li key={id}>
                        <a href={link} aria-label={alt}>
                            <img src={image} alt={alt} loading="lazy" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Instargram;