'use client'

import SearchBox from '@/components/SearchBox'
import { Suspense, useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import CareerBox from '@/components/CareerBox'
import { useSearchParams } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'

export default function Home() {
  let [list, setList] = useState<any>([])
  const params = useSearchParams()
  const searchType = params.get('searchType')

  useEffect(() => {
    console.log('searchType= ' + searchType)

    getDocs(collection(db, 'comany')).then((results: any) => {
      let tempList: any = []
      results.forEach((doc: any) => {
        const data = doc.data()
        tempList.push(data)
      })

      if (searchType === 'all' || searchType === null) {
        setList(tempList)
      } else {
        setList(tempList.filter((d: any) => d.Type === searchType))
      }
    })
  }, [params]) //params 주소값이 변할 경우만 의존성 값에 넣어줬더니 한번만 호출된다.
  //list 값이 계속해서 변하기 때문에 이를 의존성 값에 넣어줘야 한다. => 이렇게 하니까 useEffect 끝없이 호출됨

  return (
    <SessionProvider>
      <SearchBox />
      <div className='grid grid-cols-4 gap-10 mt-10 w-10/12 px-10'>
        {list.map((e: any, index: number) => (
          <CareerBox
            key={index}
            title={e.RecruitTitle}
            img={e.Image}
            name={e.CompanyName}
            region={e.Region.split(' ').shift()}
          />
        ))}
      </div>
    </SessionProvider>
  )
}
