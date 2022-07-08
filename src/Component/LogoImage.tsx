import Styled from 'styled-components'

import { Logo } from '../Section/TripleBanner'
import { fadeIn } from '../style/Animation'

interface LogoProps {
  logo: Logo
}
const LogoImageBox = Styled.div`
position:absolute;
top:150px;
animation-duration:700ms;
animation-name:${fadeIn};

.contents-logo{
background-image:url("./triple2x.png");
width:400px;
height:338px;
background-size:400px, 338px;
padding-top:280px;
text-align: center;
color: rgba(58, 58, 58, 0.7);
}
`
const LogoImage = ({ logo }: LogoProps) => {
  return (
    <LogoImageBox>
      <div
        className="contents-logo"
        style={{ backgroundImage: `url(${logo.image})` }}
      >
        {logo.text}
      </div>
    </LogoImageBox>
  )
}
export default LogoImage
