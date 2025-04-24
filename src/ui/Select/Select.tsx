import { Employee, Position } from '@/types/Emplyee';
import styles from './Select.module.scss'
type EnumLike = Record<string, string | number>;

type Props<T extends EnumLike> = {
  title: string;
  options?: T;
  filtered?:Position[]
  data:Employee
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};


export default function Select<T extends EnumLike>({title, data,filtered, options, handleSelect}: Props<T>) {
  return (
    <div className={styles.Select}>
        <label>{title}:</label>
        <select
          value={data.position}
          onChange={(e) =>
            handleSelect(e)
          }
          disabled={!data.department}
        >
          <option value="">Select {title}</option>
          {filtered?.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
          {Object.values(options ?? {}).map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>
  )
}