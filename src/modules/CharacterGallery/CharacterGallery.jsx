import CharacterItem from "../CharacterItem/CharacterItem";
import s from './CharacterGallery.module.scss';

const CharacterGallery = ({ items }) => {
  return (
    <ul className={s.gallery}>
      {items.map(({ id, name, species, image }) => (
        <CharacterItem key={id} name={name} species={species} image={image} />
      ))}
    </ul>
  );
};

export default CharacterGallery;
