import Styled from 'styled-components'

import { Info } from '../Section/TripleBanner'
import { fadeIn } from '../style/Animation'

interface InfoProps {
  information: Info[]
}
const SectionInfo = Styled.div`
animation-delay:100ms;
animation-duration:700ms;
animation-name:${fadeIn};
    margin-left: 623px;
    padding-top: 150px;

    .information {
    text-align: start;
    color: rgb(58, 58, 58);
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
    }
`
const SectionInformation = ({ information }: InfoProps) => {
  return (
    <SectionInfo>
      {information.map((el, index) => {
        return (
          <div className="information" key={index}>
            <strong>
              <span>{123}</span>
              {el.unit}
            </strong>
            {el.text}
          </div>
        )
      })}
    </SectionInfo>
  )
}

export default SectionInformation
