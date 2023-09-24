import Link from 'next/link'

interface propsType {
  title: string
  name: string
  region: string
  img: string
}

export default function ({ title, name, region, img }: propsType) {
  return (
    <Link href={`wd/${name}`}>
      <section className='w-48 h-64 flex flex-col gap-5'>
        <img className='w-fit h-48' src={img} />
        <h4>{title}</h4>
        <div>{name}</div>
        <div>{region}</div>
      </section>
    </Link>
  )
}
