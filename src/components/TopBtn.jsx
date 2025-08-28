import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
const TopBtn = () => {
    const scrollTo = useSmoothScroll()
    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                scrollTo('Hero')
            }}
            className='top-btn'>위로 올라가는 버튼</button>
    )
}

export default TopBtn