import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function HomePage() {
  const docsIndex = '/intro/index'
  const router = useRouter()

  useEffect(() => {
    router.push(docsIndex)
  }, [router])

  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
        Welcome To NextBook!
      </div>
      <div className='text-center'>
        <p>You can use all Next.js features and create your custom app.</p>
        <p>You can use this page as a homepage or to redirect to content.</p>
        <p>
          For now, redirecting you to the{' '}
          <Link href={docsIndex}>
            <a className='underline'>documentation</a>
          </Link>
        </p>
      </div>
    </div>
  )
}
