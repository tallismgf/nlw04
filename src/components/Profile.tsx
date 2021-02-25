
import styles from '../styles/components/Profile.module.css';

export function Profile (){

  return (
    <div className={styles.profileContainer} >
      <img src="https://github.com/tallismgf.png" alt="tallis marques"/>
      <div>
        <strong>Tallis marques</strong>
        <p>
          <img src="icons/level.svg" alt="Icone level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}