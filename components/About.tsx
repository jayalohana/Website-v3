import React from 'react'
import { Card, CardDescription } from './ui/card'
import { HoverEffect } from './ui/card-hover-effect'
import { title } from 'process'

function About() {
    return (
       <div className=''>
            <HoverEffect items={about} />
       </div>
    )
}

export const about = [
    {
        title: '',
        description: 'As a programmer extraordinaire, I juggle two roles: slaying bugs as an intern QA Developer at theScore and weaving code magic as a Software Developer at Fibra, Software development is my playground, and I\'m always hungry for new challenges to devour. Let\'s team up and code the world into a better place! 🚀',
        link: '',
    }
]
export default About