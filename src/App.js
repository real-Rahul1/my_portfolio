import './App.css';
import MyImage from './components/my_intro/my_image.js';
import MySelf from './components/my_intro/my_self.js';
import GeneralButton from './components/general_button/general_button.js';
import TechStack from './components/tech_stack/tech_stack.js';
import Redesigner from './assets/project1.jpg';

function App() {
    const handleEmail = () => {
    window.location.href = "mailto:sahrahul04644@gmail.com";
    };
    
    return (
        <div className='container'>
            <section className='hero'>
                <div className='my_image'>
                    <MyImage />
                </div>
                <div className='my_self'>
                    <MySelf />
                </div>
            </section>
            <div className='hero_buttons'>
                <GeneralButton text='Contact Me' onClick={handleEmail} />
            </div>
            <section className='tech_stack'>
                <TechStack />
            </section>
            <div className='app_projects_title'>Projects</div>
            <section className='app_projects'>
                <div className='app_item'>
                    <div className='app_item_img'><img src={Redesigner} alt='Redesigner' /></div>
                    <div className='app_item_name'><a
                    href='https://re-designer.onrender.com/'>Redesigner</a></div>
                </div>
            </section>
        </div>
  );
}

export default App;
