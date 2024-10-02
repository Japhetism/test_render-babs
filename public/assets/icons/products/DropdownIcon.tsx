import React from 'react'

const DropdownIcon = ({className}: {className: string}):JSX.Element => {
  return (
    <svg className={`${className}`} viewBox="0 0 41 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 1.5L21.5 22L39.5 1.5" stroke="#3BB77E" strokeWidth="3"/>
    </svg>
  )
}

export default DropdownIcon