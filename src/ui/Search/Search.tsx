import styles from './Search.module.scss'
type Props = {
    handleSearch:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Search({handleSearch}: Props) {
  return (
    <div className={styles.Search}>
        <input
          type="text"
          id="searchInput"
          placeholder="Search by name email ID"
          onChange={handleSearch}
        />
      </div>

  )
}