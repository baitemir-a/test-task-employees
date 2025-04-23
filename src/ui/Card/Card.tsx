import { Employee } from "@/types/Emplyee";
import Image from "next/image";
import editIcon from "@/assets/edit.svg";
import deleteIcon from "@/assets/delete.svg";
import styles from "./Card.module.scss";
import Link from "next/link";
type Props = {
  employee: Employee;
};

export default function Card({ employee }: Props) {
  return (
    <div className={styles.Card}>
      <div>
        <h2>{employee.name}</h2>
        <p>{employee.email}</p>
        <p>{employee.age} y.o.</p>
      </div>
      <div className={styles.categories}>
        <p>{employee.position}</p>
        <p>{employee.department}</p>
      </div>
      <div>
        <Link href={`/edit/${employee.id}`}>
          <Image src={editIcon} alt="edit" loading="lazy" />
        </Link>
        <button>
          <Image src={deleteIcon} alt="delete" loading="lazy" />
        </button>
      </div>
    </div>
  );
}
