import { useEffect, useState } from "react";
import CharacterGallery from "../../modules/CharacterGallery/CharacterGallery";
import { getAllCharacters } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import Container from "../../shared/Container/Container";
import logoDesktop from "../../assets/images/logo-desktop.png";
import logoMobile from "../../assets/images/logo-mobile.png";
import s from "./HomePage.module.scss";
import Searchbar from "../../modules/SearchBar/SearchBar";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    (async () => {
      const { results } = await getAllCharacters();
      setCharacters(results);
    })();
  }, []);

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.logo}>
          <img alt="logo" src={isMobile ? logoMobile : logoDesktop} />
        </div>
        <Searchbar />
        <CharacterGallery items={characters} />
      </Container>
    </div>
  );
};

export default HomePage;
