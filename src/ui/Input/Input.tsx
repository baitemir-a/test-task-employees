import styles from "./Input.module.scss";

type Props = {
  label: string;
  type: string;
  value: string|number;
  onChange: (e: React.FormEvent) => void;
};

export default function Input({ label, type, value, onChange }: Props) {
  return (
    <div className={styles.Input}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        name={label}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
