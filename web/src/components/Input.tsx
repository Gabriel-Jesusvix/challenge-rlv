'use client'
import { MagnifyingGlass } from "@phosphor-icons/react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({...rest}: InputProps) {
  return (
    <div className="flex items-center ga-2">
      <input className="bg-gray-200 w-full h-10 rounded-xl p-4" {...rest}/>
      <MagnifyingGlass size={35} />
    </div>
  )
}