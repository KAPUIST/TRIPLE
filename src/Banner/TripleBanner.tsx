import React, { useState, useEffect } from 'react'
import Styled, { keyframes } from 'styled-components'

interface Title {
  image: string
  text: string
}
interface Info {
  count: number
  unit: string
  text: string
}
interface Award {
  image: string
  text: string
}
const fadeIn = keyframes`
  from{
    opacity:0 ;
    transform:translateY(10px);
  }
  to{
    opacity:1 ;
    transform:translateY(0px);
  }
`
const Container = Styled.div`
position:relative;
height: auto;
width:1200px;
margin:0 auto;
`

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
const BannerInformation = Styled.div`
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

const AwardContainer = Styled.div`
margin: 50px 0 140px 623px;
animation-delay:200ms;
animation-duration:700ms;
animation-name:${fadeIn};
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

const TripleBanner: React.FC = () => {
  const [title, setTitle] = useState<Title>({ image: '', text: '' })
  const [infromation, setInformation] = useState<Info[]>([])
  const [awardItem, setAwardItem] = useState<Award[]>([])

  useEffect(() => {
    setTitle({ image: './triple2x.png', text: '2019년2월기준' })
    setAwardItem([
      {
        image: './play-store2x.png',
        text: '2018 구글 플레이스토어 올해의 앱 최우수상 수상',
      },
      {
        image: './badge-apple4x.png',
        text: '2018 애플 앱스토어 오늘의 여행앱선정',
      },
    ])
    setInformation([
      { count: 700, unit: '만 명', text: '의 사용자' },
      { count: 100, unit: '만 개', text: '의 여행리뷰' },
      { count: 470, unit: '만 개', text: '의 여행 일정' },
    ])
  }, [])

  return (
    <Container>
      <LogoImageBox>
        <div
          className="contents-logo"
          style={{ backgroundImage: `url(${title.image})` }}
        >
          {title.text}
        </div>
      </LogoImageBox>
      <BannerInformation>
        {infromation.map((el, index) => {
          return (
            <div className="information" key={index}>
              <strong>
                <span>{el.count}</span>
                {el.unit}
              </strong>
              {el.text}
            </div>
          )
        })}
      </BannerInformation>
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
    </Container>
  )
}
export default TripleBanner
