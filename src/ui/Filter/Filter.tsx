import styles from './Filter.module.scss'
type EnumLike = Record<string, string | number>;

type Props<T extends EnumLike> = {
  title: string;
  options: T;
  handleFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Filter<T extends EnumLike>({
  title,
  options,
  handleFilter,
}: Props<T>) {
  const enumValues = Object.values(options).filter(
    (value) => typeof value === "string"
  );

  return (
    <div className={styles.Filter}>
      <select onChange={handleFilter}>
        <option value="">Select {title}</option>
        {enumValues.map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
    </div>
  );
}
