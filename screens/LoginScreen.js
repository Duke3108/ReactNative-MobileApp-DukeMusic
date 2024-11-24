import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const LoginScreen = ({ navigation }) => {

    return (
        <LinearGradient colors={["#040306", "131624"]} style={{ flex: 1 }} >
            <SafeAreaView>
                <View style={{ height: 80 }} />
                <Fontisto style={{ textAlign: 'center' }} name="applemusic" size={80} color="white" />
                <Text
                    style={{
                        color: "white",
                        fontSize: 40,
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: 40,
                        marginBottom: 100
                    }}
                >
                    Hàng triệu bài hát Miễn phí trên Duke-Music
                </Text>

                <View style={{ height: 80 }}>
                    <Pressable onPress={() => navigation.navigate("Main")} style={{
                        backgroundColor: "#ffffff",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                        <Text style={{
                            fontWeight: "500",
                        }}>Đăng ký miễn phí</Text>
                    </Pressable>

                    <Pressable style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                        <Feather name="smartphone" size={24} color="white" />
                        <Text style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                            flex: 1
                        }}>
                            Tiếp tục bằng số điện thoại
                        </Text>
                    </Pressable>

                    <Pressable style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                        <FontAwesome5 name="google" size={24} color="red" />
                        <Text style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                            flex: 1
                        }}>
                            Tiếp tục bằng Google
                        </Text>
                    </Pressable>

                    <Pressable style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        marginVertical: 10,
                        borderColor: "#C0C0C0",
                        borderWidth: 0.8
                    }}>
                        <FontAwesome5 name="facebook" size={24} color="#4267b2" />
                        <Text style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                            flex: 1
                        }}>
                            Tiếp tục bằng Facebook
                        </Text>
                    </Pressable>

                    <Pressable onPress={() => { navigation.navigate("Main") }} style={{
                        padding: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 300,
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 10,
                    }}>
                        <Text style={{
                            fontWeight: "500",
                            color: "white",
                            textAlign: "center",
                        }}>Đăng nhập</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </LinearGradient>

    )
}

export default LoginScreen

const styles = StyleSheet.create({})