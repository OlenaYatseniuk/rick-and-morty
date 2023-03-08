import { useEffect, useMemo, useState } from "react";
import CharacterGallery from "../../modules/CharacterGallery/CharacterGallery";
import { getAllCharacters, getCharactersByName } from "../../services/api";
import { useMediaQuery } from "react-responsive";
import Container from "../../shared/Container/Container";
import logoDesktop from "../../assets/images/logo-desktop.png";
import logoMobile from "../../assets/images/logo-mobile.png";
import s from "./HomePage.module.scss";
import Searchbar from "../../modules/SearchBar/SearchBar";
import Loader from "../../shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const sortedCharacters = useMemo(
    () =>
      characters.sort((first, second) => first.name.localeCompare(second.name)),
    [characters]
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
        const data = await getAllCharacters();
        setIsLoading(false);
        setCharacters(data.results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      console.log('query', query)
      if (query) {
        console.log('query', query)
        const res = await searchByName(query);
        if (!res) {
          console.log(res);
          setSearchParams({});
        }
      }
    })();
  },[query, setSearchParams])

  const searchByName = async (query) => {
    setIsLoading(true);
    const data = await getCharactersByName(query);
    setIsLoading(false);

    console.log(data, "in search function");

    data?.data?.results.sort((first, second) =>
      first.name.localeCompare(second.name)
    );
    setFilteredCharacters(data?.data?.results);
    return data;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.logo}>
          <img alt="logo" src={isMobile ? logoMobile : logoDesktop} />
        </div>
        <Searchbar filter={searchByName} />
        <CharacterGallery
          items={
            filteredCharacters?.length ? filteredCharacters : sortedCharacters
          }
        />
      </Container>
    </div>
  );
};

export default HomePage;
