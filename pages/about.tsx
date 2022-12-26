

import Link from 'next/link'

import { MainLayouts } from '../Components/layouts/MainLayouts'


export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </>
  )
}


AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayouts>
       { page }
    </MainLayouts>
  )
}