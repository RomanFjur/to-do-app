import React from 'react';
import styles from './Input.module.css';

function Input ({onChange, placeholder, name, value}) {
  return (
    <label className={styles.label}>
      {name[0].toUpperCase() + name.slice(1)}
      <input
        value={value} 
        className={styles.input} 
        type="text" name={name}
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}/>
    </label>
  );
}

export default Input;