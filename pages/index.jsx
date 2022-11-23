import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const docsIndex = '/intro'
  const router = useRouter()

  useEffect(() => {
    router.push(docsIndex)
  }, [router])

  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
        Welcome To Development 101!
      </div>
      <div className='text-center'>
        <p>This free course was created by the AAM Institute to prepare you for the AAM Pilot Program.</p>
        <p>We can use this page as a homepage/splash page or to redirect to content.</p>
        <p>
          Let&apos;s get started, redirecting you to the{' '}
          <Link href={docsIndex}>
            <a className='underline'>documentation</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
