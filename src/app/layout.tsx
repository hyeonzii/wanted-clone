import Nav from '@/components/Nav'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from '@/components/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '원티드',
  description:
    '서류합격률 2배 높은 원티드 이력서로 여러 기업의 포지션에 한 번에 지원하세요. AI가 추천하는 포지션은 서류합격률이 2배 높아요. 지금 바로 포지션 확인하세요. AI 추천 포지션 합격률 2배. IT직군 채용 1위. 원티드 AI 이력서 리뷰. 내 취향에 맞는 회사 찾기.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NextAuthProvider>
          <Nav />
          <div className='w-full h-20 bg-wanted-hover-gray -z-10'></div>
          <div className='w-full flex justify-center'>
            <div className='md:w-9/12 w-full h-fit'>{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
