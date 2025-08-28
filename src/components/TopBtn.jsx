import React, { useEffect, useState } from "react";
import "../styles/components/topbtn.scss";
import useSmoothScroll from "../hooks/useSmoothScroll";

const TopBtn = () => {
    const scrollTo = useSmoothScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`floating-btns ${visible ? "is-visible" : ""}`}>
            {/* 파란 원형 ↑ 버튼 */}
            <button
                type="button"
                className="top-btn"
                onClick={(e) => {
                    e.preventDefault();
                    scrollTo("Hero");
                }}
                aria-label="맨 위로 이동"
                title="맨 위로"
            />

            {/* 빨간 말풍선 + 라벨 */}
            <div className="talk">
                <a
                    href="#"
                    className="talk-bubble"
                    onClick={(e) => e.preventDefault()}
                    aria-label="1:1 Talk 열기"
                    title="1:1 Talk"
                >
                    <span className="talk-text">TCB</span>
                </a>
                <span className="talk-label">1:1 Talk</span>
            </div>
        </div>
    );
};

export default TopBtn;
