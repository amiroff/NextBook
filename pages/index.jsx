export default function HomePage() {
  return <div>Create Your Homepage Here</div>
}

// Comment the following function to disable redirect
// and use custom homepage
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/intro/index',
      permanent: false
    }
  }
}
