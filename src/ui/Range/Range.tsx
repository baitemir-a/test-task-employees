"use client";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styles from './Range.module.scss'
type Props = {
  max: number;
  min: number;
  filter: (values: number[]) => void;
};

export default function RangeInput({ max, min, filter }: Props) {
  const [ageRange, setAgeRange] = useState<[number, number]>([10, 50]);

  return (
    <div className={styles.Range}>
      <Range
        step={1}
        min={min}
        max={max}
        values={ageRange}
        onChange={(values: number[]) => {
          setAgeRange([values[0], values[1]]);
          filter([values[0], values[1]]);
        }}
        renderTrack={({ props, children }) => {
          return (
            <div
              {...props}
              style={{
                ...props.style,
                height: "6px",
                width: "100%",
                background: getTrackBackground({
                  values: ageRange,
                  colors: ["#ccc", "#0b76ef", "#ccc"],
                  min,
                  max,
                }),
                borderRadius: "4px",
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: "#0b76ef",
                borderRadius: "50%",
              }}
            />
          );
        }}
      />
      <div className={styles.info}>
        <span>Min Age: {ageRange[0]}</span> —{" "}
        <span>Max Age: {ageRange[1]}</span>
      </div>
    </div>
  );
}
