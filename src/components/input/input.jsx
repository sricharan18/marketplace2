 import './input.css';
 
 export const Input = (props) => {
    let inputTag = null;
    let initialClasses = []
    let errorMessage = null

    if (props.config){
        initialClasses = [props.config.className]
    } else {
        initialClasses = [props.className]
    }
    if (props.inValid) {
        initialClasses.push("Invalid")
        errorMessage = <p className="error">{props.error}</p>
    }
    
    switch (props.elementType){
        case 'input' : 
                inputTag = <input {...props.config} 
                    className = {initialClasses.join(" ")} 
                    onChange = {props.change} value = {props.value} ></input> 
                break;
        case 'select' :
                inputTag = (<select {...props.config} 
                    onChange = {props.change} 
                    className = {initialClasses.join(" ")} value={props.value}>
                   { props.options.map( (option, i) => 
                    (<option value={option} key={i}>{option}</option>))
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
            {errorMessage}
        </div>
    )
}

export default Input; 