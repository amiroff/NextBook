export default function () {
  return <div>Hello</div>
}

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: '/intro/index',
      permanent: false
    }
  }
}
