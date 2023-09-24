'use client'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'

export default function JobDescription({ params }: { params: { slug: string } }) {
  const CurrentComName = decodeURI(params.slug)
  const [list, setList] = useState<any>([])

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
  }, [CurrentComName])

  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <>
      <div className='mt-20 font-extralight text-6xl'>
        {list.length === 0 ? '로딩중' : list[0].Type}
      </div>
    </>
  )
}
