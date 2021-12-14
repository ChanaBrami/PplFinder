//import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import React, { useEffect, useState } from "react";


const Favorites = () => {
  const { users, isLoading } = usePeopleFetch();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => { 
    console.log(JSON.parse(localStorage.getItem("favorites")));
    setFavorites(JSON.parse(localStorage.getItem("favorites")))
  },[]);

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={favorites} isLoading={isLoading} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
