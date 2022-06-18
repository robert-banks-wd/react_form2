
export default function FormInput(props){

    return(
        <div className="formInput">
            {/* <label>{props.title}</label> */}
            <input placeholder={props.placeholder} name={props.name}/>

        </div>
    )
}

// {/* <input placeholder={props.placeholder} 
//             ref={props.refer}/> */}