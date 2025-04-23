import Link from 'next/link'
import styles from './Nav.module.scss'
export default function Nav() {
  return (
    <div className={styles.Nav}>
        <Link href={"/"}>Employees</Link>
        <Link href={"/create"}>Create</Link>
    </div>
  )
}