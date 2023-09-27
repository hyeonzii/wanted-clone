'use client'

import JobDescription from '@/app/wd/[slug]/(component)/JobDescription'
import Loading from '@/app/wd/[slug]/loading'
import { Suspense, useEffect, useState } from 'react'
import { db } from '@/app/firebase'
import { collection, getDocs } from 'firebase/firestore'

export default function JobDescriptionPage({ params }: { params: { slug: string } }) {
  const CurrentComName = decodeURI(params.slug)
  const [list, setList] = useState<any>([])

  //여기 콘솔 찍히는거 한번 확인해봐
  useEffect(() => {
    console.log(CurrentComName)

    getDocs(collection(db, 'comany')).then((results: any) => {
      let tempList: any = []
      results.forEach((doc: any) => {
        const data = doc.data()

        if (data.CompanyName === CurrentComName) {
          tempList.push(data)
        }
      })
      console.log(tempList)
      setList(tempList)
    })
  }, [params])

  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <>
      {/*<Suspense fallback={<Loading />}> */}
      {list.length === 0 ? <Loading /> : <JobDescription list={list} />}
      {/** <JobDescription list={list} />
    </Suspense> */}
    </>
  )
}
