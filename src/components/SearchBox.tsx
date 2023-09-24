'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {
  name: string
}

const Box = ({ name }: Props) => (
  <div className=' cursor-pointer border border-wanted-gray w-20 h-10 p-2 flex justify-center items-center text-sm font-semibold rounded-md hover:bg-wanted-hover-gray'>
    {name}
  </div>
)

export default function SearchBox() {
  let boxArr = ['지역', '경력', '기술스택']
  let [title, setTitle] = useState('전체') //1분류
  let [semiTitle, setSemiTitle] = useState('') //2분류
  let [arrow, setArrow] = useState(false) //화살표 위아래
  let arr = [
    { name: '전체', routerName: 'all' },
    { name: '개발', routerName: 'development' },
    { name: '경영 ・ 비즈니스', routerName: 'business' },
    { name: '마케팅', routerName: 'marketing' },
  ]
  const router = useRouter()

  return (
    <div className='w-full h-fit p-10 flex flex-col gap-5 border-b'>
      <div className='flex flex-row gap-3 static'>
        <h3>{title}</h3>
        <div
          className={`rounded-full border-wanted-gray cursor-pointer transition-transform transform ${
            arrow ? '-rotate-90' : 'rotate-90'
          } ease-linear`}
          onClick={() => {
            setArrow(!arrow)
          }}
        >
          {'>'}
          <div className='w-48 h-fit overflow-auto absolute bottom-0 left-0 border-wanted-gray'>
            {arr.map((elem, index) => (
              <div
                key={index}
                onClick={() => {
                  router.push('/?searchType=' + elem.routerName)
                }}
                className='cursor-pointer  w-full h-3 p-2 flex flex-col justify-center items-center text-sm hover:bg-wanted-hover-gray'
              >
                {elem.name}
              </div>
            ))}
          </div>
        </div>
        <div className='text-wanted-gray text-lg border-l-2'>{semiTitle}</div>
        <input className='text-wanted-gray text-lg' />
      </div>
      <div className='flex'>
        <div className='flex-none flex flex-row gap-3'>
          {boxArr.map((e, index) => (
            <Box key={index} name={e} />
          ))}
        </div>
        <div className='grow'></div>
        <div className='flex-none'>
          <Box name='기술스택' />
        </div>
      </div>
    </div>
  )
}
