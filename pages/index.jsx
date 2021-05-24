import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
        Welcome To NextBook!
      </div>
      <div className='text-center'>
        <p>You can use all Next.js features and create your custom app.</p>
        <p>You can use this page as a homepage or to redirect to content.</p>
        <p>
          For now, read the{' '}
          <Link href='/intro/index'>
            <a className='underline'>documentation</a>
          </Link>
        </p>
      </div>
    </div>
  )
}

// Uncomment the following function to enable redirect to your content
// To be able to do this, this project must be hosted on node.js compatible service like Vercel.

// export async function getServerSideProps(context) {
//   return {
//     redirect: {
//       destination: '/intro/index',
//       permanent: false
//     }
//   }
// }
