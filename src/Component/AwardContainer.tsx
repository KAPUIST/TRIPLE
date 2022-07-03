import Styled from 'styled-components'

import { Award } from '../Section/TripleBanner'
import { fadeIn } from '../style/Animation'

interface AwardProps {
  awardItem: Award[]
}
const AwardContainer = Styled.div`
margin: 50px 0 140px 623px;
animation-delay:200ms;
animation-duration:700ms;
animation-name:${fadeIn};
animation-timing-function :ease-in-out;
.award-item{
  color: rgba(58, 58, 58, 0.8);
    font-weight: bold;
  background-size: 54px 54px;
    padding: 5px 0 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
    background-repeat:no-repeat;
    display: inline-block;
}
`
const AwardBox = ({ awardItem }: AwardProps) => {
  return (
    <AwardContainer>
      {awardItem.map((el, index) => {
        return (
          <div
            key={index}
            className="award-item"
            style={{ backgroundImage: `url(${el.image})` }}
          >
            {el.text.split('어')[0]}
            <br />
            {el.text.split('어')[1]}
          </div>
        )
      })}
    </AwardContainer>
  )
}
export default AwardBox
