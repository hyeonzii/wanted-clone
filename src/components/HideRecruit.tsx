'use client'

export default function HideRecruit(arr: string[]) {
  return (
    <div>
      <div className='w-full h-full flex flex-col'>
        <div className='overflow-y-scroll flex-1'></div>
        <div className='flex-3 flex justify-center items-center'>
          <div>직군을 먼저 선택하면 상세 직무를 볼 수 있어요.</div>
        </div>
      </div>
    </div>
  )
}
