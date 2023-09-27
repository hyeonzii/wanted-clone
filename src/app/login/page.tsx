'use client'
import { signIn, signOut } from 'next-auth/react'

export default function Login() {
  return (
    <>
      <div>로그인페이지</div>
      <div
        className='flex h-auto w-64 cursor-pointer items-center justify-center rounded-md border border-wanted-gray'
        onClick={signIn}
      >
        <span>Sign in with Google</span>
      </div>
    </>
  )
}
