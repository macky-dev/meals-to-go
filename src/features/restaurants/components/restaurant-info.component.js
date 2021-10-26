import React from "react";
import { SvgXml } from "react-native-svg";

import starSvg from "../../../../assets/star";
import openSvg from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/typography/text.component";
import Favourite from "../../../components/favourite/favourite.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Icon,
  Address,
} from "./restaurant-info.styles";

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "MakiSushi",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://st2.depositphotos.com/1020618/6765/i/600/depositphotos_67657295-stock-photo-japanese-seafood-sushi-set.jpg",
    ],
    address = "Manila, Philippines",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((e, i) => (
              <SvgXml
                xml={starSvg}
                width={20}
                height={20}
                key={`star-${placeId}-${i}`}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow ? (
                <SvgXml xml={openSvg} width={20} height={20} />
              ) : null}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
