import './general_button.css';

function GeneralButton(props){
    return(
    <button className="liquid-glass-btn dark" onClick={props.onClick}>
            {props.text}
    </button>
        
    );
}

export default GeneralButton;