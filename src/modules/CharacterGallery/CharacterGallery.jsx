import { Link, useLocation } from 'react-router-dom';
import s from "./CharacterGallery.module.scss";

const CharacterGallery = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={s.gallery}>
      {items.map(({ id, name, species, image }) => (
        <li className={s.gallery__item} key={id}>
          <Link className={s.gallery__link} to={`/${id}`} state={{from: location}}>
          <div className={s.gallery__itemWrapper}>
            <img className={s.gallery__image} src={image} alt={name} />
            <div className={s.gallery__info}>
              <p className={s.gallery__name}>{name}</p>
              <p className={s.gallery__species}>{species}</p>
            </div>
            </div>
            </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterGallery;
