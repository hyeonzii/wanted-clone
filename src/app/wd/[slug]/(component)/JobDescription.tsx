'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type TitleProps = {
  title?: string
  companyName: string
  region: string
}

const TitleBox = ({ title, companyName, region }: TitleProps) => (
  <div className='flex flex-col gap-3'>
    <div className='text-3xl font-bold'>{title}</div>
    <div className='flex gap-3'>
      <p className='font-semibold'>{companyName}</p>
      <p className='text-wanted-gray'>|</p>
      <p className='text-wanted-gray'>{region.split(' ').shift()}</p>
    </div>
  </div>
)

type ContentType = {
  title: string
  content: string
}

type ContentProps = {
  contentArr: ContentType[]
}

const ContentBox = ({ contentArr }: ContentProps) => (
  <div className='flex flex-col gap-5'>
    <span>{contentArr.shift()?.content}</span>
    {contentArr.map((arr: ContentType) => (
      <>
        <h4>{arr.title}</h4>
        <ul>
          {arr.content.split(',').map((e: string, index: number) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
      </>
    ))}
  </div>
)

const BottomBox = () => {}

type listProp = {
  Benefits: string
  Content: string
  DeadLine: string
  DevTool: string
  Image: string
  MainJob: string
  Preferential: string
  Qualifications: string
  RecruitTitle: string
  Region: string
  companyName: string
  Type: string
}
type listArr = {
  list: listProp[]
}

export default function JobDescription({ list }: listArr) {
  const [contentArr, setContentArr] = useState<ContentType[]>([])

  useEffect(() => {
    console.log(list)

    if (list.length > 0) {
      const tempContentList: ContentType[] = [
        { title: 'Content', content: list[0].Content },
        { title: 'Main Job', content: list[0].MainJob },
        { title: 'Preferential', content: list[0].Preferential },
        { title: 'Qualifications', content: list[0].Qualifications },
      ]
      setContentArr(tempContentList)
    }
  }, [list])

  return (
    <div className='w-full h-fit flex flex-row'>
      <div className='flex-2 flex gap-5'>
        {/* <Image alt='기업 이미지' src={list[0].Image} />*/}
        <TitleBox
          title={list[0]?.RecruitTitle}
          companyName={list[0].companyName}
          region={list[0].Region}
        />
        <ContentBox contentArr={contentArr} />
      </div>
      <aside>
        <div className='flex-1'>여기는 지원하기 파트</div>
      </aside>
    </div>
  )
}
