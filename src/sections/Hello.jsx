import React from "react";
import "../styles/section/hello.scss";
import { helloData } from "../util/hello"; // hello.js 참고

const Hello = () => {
    const { media, eyebrow, title, description, cta } = helloData;

    return (
        <section className="hello" id="Hello">
            <div className="inner">
                {/* Left: Media */}
                <div className="hello__media" style={{ borderRadius: media.radius }}>
                    {media?.type === "video" ? (
                        <video
                            src={media.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-label={media.alt}
                        />
                    ) : (
                        <img src={media.src} alt={media.alt} />
                    )}
                </div>

                {/* Right: Copy */}
                <div className="hello__copy">
                    <p className="hello__eyebrow">{eyebrow}</p>
                    <h2 className="hello__title">{title}</h2>
                    <p className="hello__desc">{description}</p>
                    <a className="hello__btn" href={cta.href}>
                        {cta.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hello;
