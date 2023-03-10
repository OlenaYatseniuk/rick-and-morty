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
import s from "./HomePage.module.scss";
// import PaginatedItems from "../../modules/Pagination/Pagination";
// import ReactPaginate from "react-paginate";

// const PER_PAGE = 10;

const HomePage = () => {
  // const [currentPage, setCurrentPage] = useState(0);
  // const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("query") ?? "";
  const name = localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : null;
  
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // const [pageCount, setPageCount] = useState(0);

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
      // setPageCount(data.info.pages);
    })();
    // console.log('pageCount',pageCount)
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (query) {
          console.log("query", query);
          const res = await searchByName(query);
          if (!res) {
            console.log(res);
            setSearchParams({});
            toast.error(
              "Sorry, the are no characters by your search. Please try to search another name"
            );
          }
          toast.success(
            `Wow! We found ${res.data.info.count} ${
              res.data.info.count > 1 ? "characters" : "character"
            } for you!`
          );
        }
      } catch (error) {
        toast.error(
          "Sorry, the are no characters by your search. Please try to search another name"
        );
      }
    })();
  }, [query, setSearchParams]);

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

  const logOut = () => {
    googleLogout();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/login", { replace: true });
  };

  //   function handlePageClick({ selected: selectedPage }) {
  //   setCurrentPage(selectedPage);
  // }
  // const offset = currentPage * PER_PAGE;

  // const currentPageData = characters
  //   .slice(offset, offset + PER_PAGE)

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
      </Container>
    </div>
  );
};

export default HomePage;
