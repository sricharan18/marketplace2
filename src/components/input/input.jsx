 export const Input = (props) => {
    let inputTag = null;
    switch (props.elementType){
        case 'input' : 
                inputTag = <input {...props}></input>
                break;
        case 'select' :
                inputTag = (<select {...props}>
                   { props.options.map( option => 
                    (<option value={option}>{option}</option>))
                }
                </select>)
                break;
        case 'textarea' :
                inputTag = <textarea></textarea>
                break;
        default :
                inputTag = null
    }

    return (
        <div className={props.divClass}>
            <label className={props.labelClass}>{props.label}</label>
            {inputTag}
        </div>
    )
}

export default Input; 