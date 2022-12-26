import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayouts } from '../Components/layouts/MainLayouts'

export default function Home() {
  return (
    <>
      <MainLayouts>
        <div className={styles.description}>
          <p>
            Ir a
            <Link href="/about">About</Link>
          </p>
          <p>
            Ir a
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </MainLayouts>
    </>
  )
}
