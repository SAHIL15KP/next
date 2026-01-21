interface textinput {
    name:string,
    clicks:number
}
export function TextInput(params:textinput){
    return <>
    <input type="text" style={{backgroundColor:'white', color:"green"}} />
<button>{params.name}</button>
<div>{params.clicks}</div>
</>
}