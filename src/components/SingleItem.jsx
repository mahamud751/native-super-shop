import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import Products from '../../Products'
import { add_item } from '../../redux/actions/cartAction'
import { useDispatch } from 'react-redux'


export default function SingleItem({ navigation }) {
    const [products, setProducts] = useState(Products)
    const dispatch = useDispatch()
    const handleAddItem = (e) => {
        dispatch(add_item(e))
    }
    return (
        <FlatList
            data={products}
            horizontal
            keyExtractor={(key) => key.id}
            renderItem={({ item }) => {
                return (
                    <View>
                        <View>
                            <Image source={{ uri: item.img }} style={styles.image} />
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginVertical: 6 }}>৳{item.price}</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Details', { item }, handleAddItem(item))}
                                style={{ padding: 10, backgroundColor: 'red', borderRadius: 25, width: 120 }}
                            >
                                <Text style={{ textAlign: 'center', color: 'white' }} >Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}

        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 330,
        height: 200,
    },
})