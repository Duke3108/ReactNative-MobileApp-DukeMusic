import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

const LikedSongsScreen = ({ navigation }) => {

    const [input, setInput] = useState("")

    return (
        <LinearGradient colors={["#614385", "#516395"]} style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, marginTop: 50 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </Pressable>

                <Pressable style={{
                    marginHorizontal: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10
                }}>
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        backgroundColor: "#42275a",
                        padding: 10,
                        flex: 1,
                        borderRadius: 3,
                        height: 40
                    }}>
                        <AntDesign name="search1" size={20} color="white" />
                        <TextInput
                            value={input}
                            onChangeText={(text) => setInput(text)}
                            placeholder='Tìm kiếm bài hát yêu thích'
                            placeholderTextColor={"white"}
                            style={{ fontWeight: "500" }}
                        />
                    </Pressable>

                    <Pressable style={{
                        marginHorizontal: 10,
                        backgroundColor: "42275a",
                        padding: 10,
                        borderRadius: 5,
                        height: 40
                    }}>
                        <Text style={{ color: "white" }}>Sort</Text>
                    </Pressable>
                </Pressable>

                <View style={{ height: 50 }} />

                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
                        Liked Songs
                    </Text>
                    <Text style={{ color: "white", fontSize: 14, marginTop: 5 }}>
                        n songs
                    </Text>
                </View>



            </ScrollView>
        </LinearGradient>
    )
}

export default LikedSongsScreen

const styles = StyleSheet.create({})