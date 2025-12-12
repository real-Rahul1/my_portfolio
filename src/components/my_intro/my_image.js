import styles from './my_image.module.css';
import my_image from '../../assets/my_image.png';

function MyImage({invert}){
    return(
        <div className={styles.slimeContainer}>
            <div className={styles.glow}></div>
                <div className={styles.slime}></div>
                <div className={styles.my_image} >
                    <img
                        src={my_image}
                        alt=''
                        className={styles.img} />
                </div>
            </div>
    );
}

export default MyImage;