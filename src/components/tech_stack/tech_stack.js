import html from '../../assets/Html.png';
import css from '../../assets/css-3.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import './tech_stack.css';

function TechStack(){
    return(
        <div className='tech_container'>
            <div className='wrapper' style={{'--quantity': 3}}>
                <div className='item item1' style={{'--position': 1}}><img src={html} alt='html' /></div>
                <div className='item item2' style={{'--position': 2}}><img src={css} alt='css' /></div>
                <div className='item item3' style={{'--position': 3}}><img src={js} alt='js' /></div>
                <div className='item item4' style={{'--position': 4}}><img src={react} alt='react' /></div>
                <div className='item item5' style={{'--position': 5}}><img
                src={node} alt='node' /></div>
            </div>
            <div className='tech_name'>Tech Stack</div>
        </div>
    );
}

export default TechStack;