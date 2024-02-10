import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
  return (
    <div className='FooterDiv'>
      <img src={github} alt="" />
      <img src={linkedin} alt="" />
      <p>@your company</p>
    </div>
  )
}

export default Footer