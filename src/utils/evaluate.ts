export default function evaluate(expr:string){
  try{
    // Güvenlik: yalnızca izinli karakterleri kabul et
    if(!/^[0-9+\-*/.() ]+$/.test(expr)) return 'Error'
    // eslint-disable-next-line no-eval
    const result = Function(`return (${expr})`)()
    return String(result)
  }catch{ return 'Error' }
}
