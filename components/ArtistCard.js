import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import st from '../assets/st.jpg'

const ArtistCard = () => {
    return (
        <View style={{ margin: 12 }}>
            <Image style={{
                width: 120,
                height: 120,
                borderRadius: 5
            }}
                source={st} />
            <Text style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                marginTop: 10
            }}
            >
                Sơn Tùng
            </Text>
        </View>
    )
}

export default ArtistCard

const styles = StyleSheet.create({})