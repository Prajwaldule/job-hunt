
 import main from '../assets/images/main.svg'
 import Wrapper from "../assets/wrappers/Testing.js"
 import Logo from "../components/logo.js"
 import {Link} from 'react-router-dom'
 const Landing = () => {
  return (
    <Wrapper>
    <nav>
      <Logo/>
    </nav>
    <div className='conatiner page'>
     <div className='info'>
        <h1>
            Job<span> Searching</span> Apps
        </h1>
        <p>
          Job Hunt is a golden platform that gives the most significant push to your career by finding the most suitable job. It is used by lakhs of job seekers to see the latest job vacancies, be it part-time jobs, work from home, or government job alerts.
        </p>
        <Link to= '/register' className='btn btn btn-hero'>Login/Register</Link>
     </div>
     <div>
         <img src= {main} alt='job hunt' className='img main-img'>
         </img>
     </div>
    </div>
    </Wrapper>
  )
}

export default Landing