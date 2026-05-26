import React, {useState} from 'react'
import Display from './Display'
import Key from './Key'
import evaluate from '../utils/evaluate'

const keys = [
  ['C','←','/'],
  ['7','8','9','*'],
  ['4','5','6','-'],
  ['1','2','3','+'],
  ['0','.','=']
]

export default function Calculator(){
  const [value,setValue] = useState('0')
  function onKey(k:string){
    if(k === 'C'){ setValue('0'); return }
    if(k === '←'){ setValue(v=> v.length>1 ? v.slice(0,-1) : '0'); return }
    if(k === '='){ setValue(evaluate(value)); return }
    setValue(v => (v === '0' && k!=='.') ? k : v + k)
  }
  return (
    <div role="application" aria-label="Hesap Makinesi" className="calculator">
      <Display value={value}/>
      <div className="keys">
        {keys.flat().map(k=> <Key key={k} label={k} onPress={()=> onKey(k)} />)}
      </div>
    </div>
  )
}
