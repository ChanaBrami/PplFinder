import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";


const UserList = ({ users, isLoading }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [isCheckCountry, setCheckCountry] = useState({BR: false, AU: false,CA: false, DE: false});
  const [country, setCountry] = useState({Brazil: "BR", Australia: "AU", Canada: "CA", Germany: "DE"});
  const [count,setCount]=useState(0);


  const [favorites, setFavorites] = useState([]);
  
  

  useEffect(() => { 
    setFavorites(JSON.parse(localStorage.getItem("favorites")))
  },[]);
    
  useEffect(() => { 
    //localStorage.clear();
    localStorage.setItem("favorites",JSON.stringify(favorites)) } ,[favorites]);


   const handleMouseClick = (user) => {
    if(favorites.includes(user))
   {
      let x = favorites.indexOf(user); 
      setFavorites(favorites.slice(0,x).concat(favorites.slice(x+1)));
      
    }
    else
    {
      setFavorites([...favorites, user]);
    }
  };

  const handleMouseEnter = (user) => {
    setHoveredUserId(user);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const handleChange =(value) =>
  {
    if(isCheckCountry[value])
    {
      setCount(count-1);
    }
    else
    {
      setCount(count+1);
    }
    setCheckCountry({...isCheckCountry, [value]: !isCheckCountry[value]});
  }; 
 
  const getUser=(user)=>
  {
    if(count===0)
      return true;
    if(isCheckCountry[country[user.location.country]]== true )
    {
      return true;
    }
    return false;
  };

  const getVisible=(user)=>
  {
    if(user === hoveredUserId || favorites.includes(user))
      return true;
    return false;
  };

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={handleChange} isChecked={isCheckCountry.BR} />
        <CheckBox value="AU" label="Australia" onChange={handleChange} isChecked={isCheckCountry.AU}/>
        <CheckBox value="CA" label="Canada" onChange={handleChange} isChecked={isCheckCountry.CA}/>
        <CheckBox value="DE" label="Germany" onChange={handleChange} isChecked={isCheckCountry.DE}/>
      </S.Filters>
      <S.List>
        {users.filter(getUser).map((user, index) => {
            return (
              <S.User
                key={index}
                onMouseEnter={() => handleMouseEnter(user)}
                onClick={( )=> handleMouseClick(user)}
                onMouseLeave={handleMouseLeave}
              >
                <S.UserPicture src={user?.picture.large} alt="" />
                <S.UserInfo>
                  <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                    {user?.location.city} {user?.location.country}
                  </Text>
                </S.UserInfo>
                <S.IconButtonWrapper isVisible={getVisible(user)}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
              
            );
            })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;