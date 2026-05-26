import React from 'react'
export default function Key({label,onPress}:{label:string,onPress:()=>void}){
  return <button className="key" onClick={onPress} aria-label={`tuş ${label}`}>{label}</button>
}
