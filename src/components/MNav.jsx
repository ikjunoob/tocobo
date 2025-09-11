import React from 'react'
import "../styles/components/mnav.scss"
import { headerData } from '../util/header'
import Util from './Util'
const MNav = ({ onNavClose }) => {
    const navLink = headerData.menus
    return (
        <div className='m-nav-wrap'>
            <div className="m-top">
                <Util />
                <a href="#"
                    onClick={onNavClose}
                    className="m-close-btn">
                    <img src="/img/icon_search_close.png" alt="icon" />
                </a>

            </div>
            <ul className="m-nav-list">
                {navLink.map((nav, i) => (
                    <li key={i}>
                        <a href={nav.href}>
                            {nav.label}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="btm-lst">
                <li><a href="#">로그인</a></li>
                <li><a href="#">회원가입</a></li>
                <li><a href="#">공지사항</a></li>
            </ul>
        </div>
    )
}

export default MNav