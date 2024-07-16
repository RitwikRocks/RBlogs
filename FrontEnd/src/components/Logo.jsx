import React from 'react'
import IMG from '../RBlogs.jpg'

function Logo() {
  return (
    <div>
        <img src= {IMG} className="object-fill h-12 w-24 hover:object-scale-up focus:ring focus:ring-violet-300" alt="pic" />
    </div>
  )
}

export default Logo