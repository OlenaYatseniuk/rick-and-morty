import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import { getCharacterById } from "../../services/api";

import Container from "../../shared/Container/Container";
import Loader from "../../shared/Loader/Loader";
import CharacterItem from "../../modules/CharacterItem/CharacterItem";

import { FiArrowLeft } from "react-icons/fi";
import s from "./CharacterPage.module.scss";

const CharacterPage = () => {
  const [characterData, setCharacterData] = useState(null);
  const { characterId } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const data = await getCharacterById(characterId);
      setCharacterData(data);
    })();
  }, [characterId]);

  if (!characterData) {
    return <Loader />;
  }

  if (characterData) {
    return (
      <div className={s.wrapper}>
        <Container>
          <div className={s.linkWrapper}>
            <Link to={location.state?.from ?? "/"} className={s.linkBack}>
              <FiArrowLeft
                style={{
                  cursor: "pointer",
                  padding: "2px",
                  width: "30px",
                  height: "25px",
                }}
              />
              <span>Go Back</span>
            </Link>
          </div>
          <CharacterItem data={characterData} />
        </Container>
      </div>
    );
  }
};

export default CharacterPage;
