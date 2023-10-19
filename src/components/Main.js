import React from 'react'
import Header from './Header/Header'
import Nums_section from './Nums_section'
import Education from './education/Education'
import Video_Section from './Video_Section.js/Video_Section'
import Course_section from './Course_Section/Course_section'
import Comments from './Comments'

export default function Main() {
    return (
        <div>
            <Header />
            <Nums_section />
            <Education />
            <Video_Section />
            <Course_section />
            <Comments/>
        </div>
    )
}
