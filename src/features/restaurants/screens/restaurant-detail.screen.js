import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import SafeArea from "../../../components/utility/safe-area.component";
import RestaurantInfo from "../components/restaurant-info.component";

const RestaurantDetail = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          expanded={breakfastExpanded}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Tapsilog" />
          <List.Item title="Longsilog" />
          <List.Item title="Lugaw" />
          <List.Item title="Goto" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          expanded={lunchExpanded}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Adobo" />
          <List.Item title="Bulalo" />
          <List.Item title="Sinigang" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          expanded={dinnerExpanded}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Tinola" />
          <List.Item title="Kare-Kare" />
          <List.Item title="Sinampalukan" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          expanded={drinksExpanded}
          left={(props) => <List.Icon {...props} icon="cup" />}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Bottled water" />
          <List.Item title="Four seasons juice" />
          <List.Item title="SanMig Apple" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetail;
