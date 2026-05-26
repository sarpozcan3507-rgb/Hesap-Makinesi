import React from 'react'
export default function Display({value}:{value:string}) {
  return <div className="display" role="status" aria-live="polite">{value}</div>
}
