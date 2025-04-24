import { Employee } from "@/types/Emplyee";
import Image from "next/image";
import editIcon from "@/assets/edit.svg";
import deleteIcon from "@/assets/delete.svg";
import styles from "./Card.module.scss";
import Link from "next/link";
type Props = {
  employee: Employee;
  employeesToDelete: string[];
  setToDelete: (id: string) => void;
};

export default function Card({
  employee,
  employeesToDelete,
  setToDelete,
}: Props) {
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
        <Link href={`/update/${employee.id}`}>
          <Image src={editIcon} alt="edit" loading="lazy" />
        </Link>
        <button onClick={() => setToDelete(employee.id.toString())}>
          <Image
          src={deleteIcon}
          alt="delete"
          loading="lazy"
          style={employeesToDelete.includes(employee.id.toString()) ? { boxShadow: "0 0 5px red" } : undefined}/>
        </button>
      </div>
    </div>
  );
}
