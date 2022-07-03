import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'

import LogoImage from '../Component/LogoImage'
import SectionInformation from '../Component/SectionInformation'
import AwardBox from '../Component/AwardContainer'

export interface Title {
  image: string
  text: string
}
export interface Info {
  count: number
  unit: string
  text: string
}
export interface Award {
  image: string
  text: string
}

const Container = Styled.div`
position:relative;
height: auto;
width:1200px;
margin:0 auto;
`

const TripleBanner: React.FC = () => {
  const [title, setTitle] = useState<Title>({ image: '', text: '' })
  const [information, setInformation] = useState<Info[]>([])
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
      <LogoImage title={title} />
      <SectionInformation information={information} />
      <AwardBox awardItem={awardItem} />
    </Container>
  )
}
export default TripleBanner
