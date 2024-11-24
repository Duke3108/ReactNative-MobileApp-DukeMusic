import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import avt from '../assets/avt.jpg'
import AntDesign from '@expo/vector-icons/AntDesign';
import ArtistCard from '../components/ArtistCard';
import SongCard from '../components/SongCard';

const HomeScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={["#040306", "131624"]} style={{ flex: 1 }} >
            <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        resizeMode: "cover",
                        marginHorizontal: 12,
                        marginVertical: 5,
                    }}
                        source={avt}
                    />
                    <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold", color: "white" }}>Duke-Music</Text>
                </View>

                <View style={{ marginHorizontal: 12, marginTop: 10, marginBottom: 18, flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Pressable style={{ backgroundColor: '#282828', padding: 10, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, paddingHorizontal: 10, color: 'white' }}>Tất Cả</Text>
                    </Pressable>

                    <Pressable style={{ backgroundColor: '#282828', padding: 10, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, paddingHorizontal: 10, color: 'white' }}>Bài Hát</Text>
                    </Pressable>

                    <Pressable style={{ backgroundColor: '#282828', padding: 10, borderRadius: 30 }}>
                        <Text style={{ fontSize: 15, paddingHorizontal: 10, color: 'white' }}>Album</Text>
                    </Pressable>
                </View>



                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Pressable onPress={() => navigation.navigate("LikedSongs")} style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        flex: 1,
                        marginHorizontal: 10,

                        backgroundColor: "#202020",
                        borderRadius: 4,
                        elevation: 3
                    }}>
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>

                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Liked Songs</Text>
                    </Pressable>

                    <Pressable style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        flex: 1,
                        marginHorizontal: 10,

                        backgroundColor: "#202020",
                        borderRadius: 4,
                        elevation: 3
                    }}>
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>

                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Liked Songs</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Pressable style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        flex: 1,
                        marginHorizontal: 10,

                        backgroundColor: "#202020",
                        borderRadius: 4,
                        elevation: 3
                    }}>
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>

                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Liked Songs</Text>
                    </Pressable>

                    <Pressable style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        flex: 1,
                        marginHorizontal: 10,

                        backgroundColor: "#202020",
                        borderRadius: 4,
                        elevation: 3
                    }}>
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>

                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Liked Songs</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Pressable style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        flex: 1,
                        marginHorizontal: 10,

                        backgroundColor: "#202020",
                        borderRadius: 4,
                        elevation: 3
                    }}>
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>

                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Liked Songs</Text>
                    </Pressable>

                    <Pressable style={{
                        marginBottom: 10,
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        flex: 1,
                        marginHorizontal: 10,

                        backgroundColor: "#202020",
                        borderRadius: 4,
                        elevation: 3
                    }}>
                        <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                            <Pressable style={{
                                width: 55,
                                height: 55,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <AntDesign name="heart" size={24} color="white" />
                            </Pressable>
                        </LinearGradient>

                        <Text style={{
                            color: "white",
                            fontSize: 13,
                            fontWeight: 'bold'
                        }}>Liked Songs</Text>
                    </Pressable>
                </View>

                <Text style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginHorizontal: 12,
                    marginTop: 10
                }}>Nghệ Sĩ Yêu Thích</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                    <ArtistCard />
                </ScrollView>

                <View style={{ height: 10 }} />

                <Text style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginHorizontal: 12,
                    marginTop: 10
                }}>Nghe Gần Đây</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <SongCard />
                    <SongCard />
                    <SongCard />
                    <SongCard />
                </ScrollView>
            </ScrollView>
        </LinearGradient>

    )
}

export default HomeScreen

const styles = StyleSheet.create({})