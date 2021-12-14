//import React from "react";
import Text from "components/Text";
import { usePeopleFetch } from "hooks";
import * as S from "./style";
import React, { useEffect, useState } from "react";
import FavoriteList from "components/FavoriteList";


const Favorites = () => {
  const { isLoading } = usePeopleFetch();

  return (
    <S.Favorites>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <FavoriteList  isLoading={isLoading} />
      </S.Content>
    </S.Favorites>
  );
};

export default Favorites;
