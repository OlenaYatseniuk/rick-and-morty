import s from "./CharacterItem.module.scss";

const CharacterItem = ({ name, species, image }) => {
  return (
    <li className={s.gallery__item}>
      <div className={s.gallery__itemWrapper}>
        <img className={s.gallery__image} src={image} alt={name} />
        <div className={s.gallery__info}>
          <p className={s.gallery__name}>{name}</p>
          <p className={s.gallery__species}>{species}</p>
        </div>
      </div>
    </li>
  );
};

export default CharacterItem;
