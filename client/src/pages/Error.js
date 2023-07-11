import React from 'react'
import {Link} from 'react-router-dom'
import img from "../assets/images/not-found.svg"
import Wrapper from '../assets/wrappers/ErrorPage'
const Error = () => {
  return (
    <Wrapper classname = 'full-page'>
      <div>
       <img src={img} alt ='not found'/>
       <h3>Opps! Page not found</h3>
       <p>The page you are looking for is not found </p>
       <Link to ='/register'>Back to Home</Link>
      </div>
    </Wrapper>
  )
}

export default Error