import { View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS, icons, SIZES, images } from "../constants";
import { NearByJobs, PopularJobs, ScreenHeaderBtn, Welcome } from '../components'

const Main = () => {
  //const router = useRouter();

    const [searchTerm, setSearchTerm] = useState("");

    return(

        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            <Stack.Screen
                options={{
                    hearderStyle: { backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false, 
                    headerLeft: () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        if (searchTerm) {
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                    />
                    <PopularJobs />
                    <NearByJobs />

                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

export default Main
