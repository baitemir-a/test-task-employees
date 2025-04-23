import { Employee } from '@/types/Emplyee'
import React from 'react'

type Props = {
    employee:Employee
}

export default function Card({employee}: Props) {
  return (
    <div>
        <h2>{employee.name}</h2>
        <p>{employee.email}</p>
        <p>{employee.age} y.o.</p>
        <p>{employee.position}</p>
        <p>{employee.department}</p>
    </div>
  )
}