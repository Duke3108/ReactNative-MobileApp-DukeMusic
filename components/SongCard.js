import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import DLTTAD from '../assets/DLTTAD.jpg'

const SongCard = () => {
    return (
        <View style={{ margin: 12 }}>
            <Image style={{
                width: 120,
                height: 120,
                borderRadius: 5
            }}
                source={DLTTAD} />
            <Text style={{
                fontSize: 14,
                fontWeight: "500",
                color: "white",
                marginTop: 10,
                width: 120,
            }}
            >
                Đừng Làm Trái Tim Anh Đau
            </Text>
        </View>
    )
}

export default SongCard

const styles = StyleSheet.create({})