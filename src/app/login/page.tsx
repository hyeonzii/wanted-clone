'use client'

import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div className='flex justify-center mt-20 '>
      <div className='flex flex-col gap-5'>
        <div className='flex justify-center'>로그인 페이지</div>
        <div
          className='flex h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-wanted-gray'
          onClick={() => signIn()}
        >
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  )
}
