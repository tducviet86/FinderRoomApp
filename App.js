import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import TabBar from "./src/components/tab-bar/tab-bar.component";
import Home from "./src/screens/Home/home.component";
import { NavigationContainer } from "@react-navigation/native";
import RoomDetail from "./src/screens/DetailRoom/DetailRoom.component";
import SearchScreen from "./src/screens/Search/SearchPage.component";
import SearchDetail from "./src/screens/SearchDetail/SearchDetail.component";
import AccountScreen from "./src/screens/Account/Account.component";
import MessageScreen from "./src/screens/Message/Message.component";
import DetailMessageScreen from "./src/screens/MessageDetail/MessageDetail.component";
//

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
// SplashScreen.preventAutoHideAsync();
//

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);
const MenuStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="home"
        component={HomeStack}
        options={{ tabBarLabel: "Home", icon: "home-outline" }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchStackScreen}
        options={{ tabBarLabel: "Search", icon: "search-outline" }}
      />
      <BottomTab.Screen
        name="message"
        component={MessageStack}
        options={{ tabBarLabel: "message", icon: "chatbox-outline" }}
      />
      <BottomTab.Screen
        name="account"
        component={AccountScreen}
        options={{ tabBarLabel: "Account", icon: "person-outline" }}
      />
    </BottomTab.Navigator>
  );
};

const SearchStackScreen = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SearchPage" component={SearchScreen} />
    <Stack.Screen name="SearchDetail" component={SearchDetail} />
  </Stack.Navigator>
);
const MessageStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MessageScreen" component={MessageScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MenuStack" component={MenuStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="RoomDetail" component={RoomDetail} />
      <Stack.Screen name="MessageDetail" component={DetailMessageScreen} />

      {/* <Stack.Screen name="SearchDetail" component={SearchDetail} /> */}
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);
export default App;
