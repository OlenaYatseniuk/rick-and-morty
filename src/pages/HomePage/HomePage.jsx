import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { googleLogout } from "@react-oauth/google";
import { useMediaQuery } from "react-responsive";

import { getAllCharacters, getCharactersByName } from "../../services/api";

import Container from "../../shared/Container/Container";
import Loader from "../../shared/Loader/Loader";
import CharacterGallery from "../../modules/CharacterGallery/CharacterGallery";
import Searchbar from "../../modules/SearchBar/SearchBar";

import logoDesktop from "../../assets/images/logo-desktop.png";
import logoMobile from "../../assets/images/logo-mobile.png";
import { toast } from "react-toastify";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import s from "./HomePage.module.scss";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = searchParams.get("page") ?? 1;

  const query = searchParams.get("query") ?? "";

  const name = localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : null;

  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [pageCount, setPageCount] = useState(1);

  const handleChangePage = (newPage) => {
    if (query) {
      setSearchParams({
        query,
        page: newPage,
      });
    } else {
      setSearchParams({
        page: newPage,
      });
    }
  };

  const sortedCharacters = useMemo(
    () =>
      characters.sort((first, second) => first.name.localeCompare(second.name)),
    [characters]
  );

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await getAllCharacters(currentPage);
      setIsLoading(false);
      setCharacters(data.results);
      setPageCount(data.info.pages);
    })();
  }, [currentPage]);

  useEffect(() => {
    (async () => {
      try {
        const res = await searchByName(query, currentPage);
        if (!res) {
          setSearchParams({});
          toast.error(
            "Sorry, the are no characters by your search. Please try to search another name"
          );
        }
        setPageCount(res.data.info.pages);
        toast.success(
          `Wow! We found ${res.data.info.count} ${
            res.data.info.count > 1 ? "characters" : "character"
          } for you!`
        );
      } catch (error) {
        console.log('Error in searching:', error.message)
      }
    })();
  }, [query, setSearchParams, currentPage]);

  const searchByName = async (query, currentPage) => {
    setIsLoading(true);
    const data = await getCharactersByName(query, currentPage);
    setIsLoading(false);

    data?.data?.results.sort((first, second) =>
      first.name.localeCompare(second.name)
    );
    setFilteredCharacters(data?.data?.results);
    return data;
  };

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login", { replace: true });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.info}>
          <div className={s.name}>Hello, {name}!</div>
          <button className={s.loginButton} onClick={() => logOut()}>
            Log Out with Google
          </button>
        </div>
        <div className={s.logo}>
          <img alt="logo" src={isMobile ? logoMobile : logoDesktop} />
        </div>
        <Searchbar filter={searchByName} />
        <CharacterGallery
          items={
            filteredCharacters?.length ? filteredCharacters : sortedCharacters
          }
        />
        {pageCount > 1 && (
          <div className={s.paginationContainer}>
            <button
              disabled={Number(currentPage) === 1}
              className={Number(currentPage) === 1 ? s.disabled : s.button}
              onClick={() => handleChangePage(Number(currentPage) - 1)}
            >
              <MdKeyboardArrowLeft />
            </button>
            <p className={s.pageTitle}>
              Page {currentPage} of {pageCount}
            </p>
            <button
              className={
                Number(currentPage) === pageCount ? s.disabled : s.button
              }
              onClick={() => handleChangePage(Number(currentPage) + 1)}
              disabled={Number(currentPage) === pageCount}
            >
              <MdKeyboardArrowRight />
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default HomePage;
