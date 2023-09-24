'use client'

import Logo from '@/public/wanted-logo.svg'
import SearchIcon from '@/public/searchIcon.svg'
import Link from 'next/link'

interface contentType {
  name: string
  link: string
}

const LoginBtn = ({ name, link }: contentType) => (
  <div className=' cursor-pointer border border-wanted-gray w-fit h-10 p-2 place-content-center text-sm font-semibold rounded-md hover:bg-wanted-hover-gray'>
    <Link href={link}>{name}</Link>
  </div>
)

export default function Nav() {
  let category: contentType[] = [
    { name: '채용', link: 'noLink' },
    { name: '커리어', link: '/' },
    { name: '소셜', link: '/' },
    { name: '이력서', link: '/' },
    { name: '프리랜서', link: '/' },
    { name: '더보기', link: 'noLink' },
  ]

  return (
    <div className='w-full h-10 p-10 fixed flex justify-center bg-back-color border-b'>
      <div className='w-10/12 h-full max-w-5xl flex items-center'>
        <Link href='/' className='w-fit h-fit place-content-center flex-none'>
          <Logo className='w-3/12' />
        </Link>
        <ul className='flex flex-row gap-5  md:visible invisible flex-grow'>
          {category.map((elem, index) => (
            <li key={index} className='align-middle'>
              {elem.link === 'noLink' ? (
                <button>{elem.name}</button>
              ) : (
                <Link href={elem.link}>{elem.name}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className='flex flex-row gap-5 flex-none'>
          <div className='cursor-pointer p-2 place-content-center rounded-full hover:bg-wanted-hover-gray'>
            <SearchIcon className='w-5 h-5' />
          </div>
          <LoginBtn name='회원가입/로그인' link='/login' />
          <LoginBtn name='기업서비스' link='/' />
        </div>
      </div>
    </div>
  )
}
