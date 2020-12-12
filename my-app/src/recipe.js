import react from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1> {title} </h1>
            <ol>
              {ingredients.map(ingretdinet => (
                <li> {ingretdinet.text} </li>
              ))}
            </ol>
            <p> {calories} </p>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;