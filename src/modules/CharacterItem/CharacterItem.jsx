import s from "./CharacterItem.module.scss";

const CharacterItem = ({
  data: { name, species, image, gender, status, type, origin },
}) => {
  console.log()
  return (
    <div className={s.character}>
      <div className={s.character__imgWrapper}>
        <img className={s.character__image} src={image} alt={name} />
      </div>
      <div className={s.character__titleInfo}>
        <p className={s.character__name}>{name}</p>
        <p className={s.character__title}>Informations</p>
      </div>
      <ul className={s.character__info}>
        <li className={s.character__infoItem}>
          <div className={s.example}>
            <p className={s.character__infoTitleName}>Gender</p>
            <p className={s.character__infoBio}>{gender}</p>
          </div>
        </li>
        <li className={s.character__infoItem}>
          <div className={s.example}>
            <p className={s.character__infoTitleName}>Status</p>
            <p className={s.character__infoBio}>{status}</p>
          </div>
        </li>
        <li className={s.character__infoItem}>
          <div className={s.example}>
            <p className={s.character__infoTitleName}>Specie</p>
            <p className={s.character__infoBio}>{species}</p>
          </div>
        </li>
        <li className={s.character__infoItem}>
          <div className={s.example}>
            <p className={s.character__infoTitleName}>Origin</p>
            <p className={s.character__infoBio}>{origin?.name}</p>
          </div>
        </li>
        <li className={s.character__infoItem}>
          <div className={s.example}>
            <p className={s.character__infoTitleName}>Type</p>
            <p className={s.character__infoBio}>{!type ? 'Unknown' : type}</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CharacterItem;
