'use client'
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

type Props = {
    max:number,
    min:number,
    filter:(values: number[]) => void
}

export default function RangeInput({max, min, filter}: Props) {
    const [ageRange, setAgeRange] = useState<[number, number]>([25, 40]);


  return (
    <div>
  <label htmlFor="filterByAge">Filter by Age</label>
  <Range
    step={1}
    min={min}
    max={max}
    values={ageRange}
    onChange={(values: number[])=>{
        setAgeRange([values[0], values[1]])
        filter([values[0], values[1]])
    }}
    renderTrack={({ props, children }) => (
      <div
        {...props}
        style={{
          ...props.style,
          height: "6px",
          width: "100%",
          background: getTrackBackground({
            values: ageRange,
            colors: ["#ccc", "#0b76ef", "#ccc"],
            min: min,
            max: max,
          }),
          borderRadius: "4px",
        }}
      >
        {children}
      </div>
    )}
    renderThumb={({ props }) => (
      <div
        {...props}
        style={{
          height: "20px",
          width: "20px",
          backgroundColor: "#0b76ef",
          borderRadius: "50%",
        }}
      />
    )}
  />
  <div>
    <span>Min Age: {ageRange[0]}</span> — <span>Max Age: {ageRange[1]}</span>
  </div>
</div>
  )
}