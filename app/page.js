import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
      <div>
        <h1 className={styles.title}>My Jesus</h1>
        <p className={styles.subtitle}>This app is made by Calvin Frank for the Lord.</p>
        <p>description <br />learn more on our blog.</p>
      </div>
  )
}
