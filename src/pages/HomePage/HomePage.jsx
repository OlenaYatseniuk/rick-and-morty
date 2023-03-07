import { useEffect, useMemo, useState } from "react";
import CharacterGallery from "../../modules/CharacterGallery/CharacterGallery";
import { getAllCharacters, getCharactersByName } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import Container from "../../shared/Container/Container";
import logoDesktop from "../../assets/images/logo-desktop.png";
import logoMobile from "../../assets/images/logo-mobile.png";
import s from "./HomePage.module.scss";
import Searchbar from "../../modules/SearchBar/SearchBar";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const sortedCharacters = useMemo(
    () =>
      characters.sort((first, second) => first.name.localeCompare(second.name)),
    [characters]
  );
  console.log("sorted:", sortedCharacters);

  useEffect(() => {
    (async () => {
      const { results } = await getAllCharacters();
      setCharacters(results);
    })();
  }, []);

  const searchByName = async (query) => {
      const { results } = await getCharactersByName(query);
      results.sort((first, second) => first.name.localeCompare(second.name));
    setFilteredCharacters(results);
  };

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.logo}>
          <img alt="logo" src={isMobile ? logoMobile : logoDesktop} />
        </div>
        <Searchbar filter={searchByName} />
        <CharacterGallery
          items={
            filteredCharacters.length ? filteredCharacters : sortedCharacters
          }
        />
      </Container>
    </div>
  );
};

export default HomePage;
