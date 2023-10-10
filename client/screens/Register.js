import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Color } from '../GlobalStyles';
import BigButton from '../components/BigButton';

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");  


  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image
            style={styles.img}
            source={{
                uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/laptop-design-template-cda7accc646c54c814336c40fecaa3a8_screen.jpg?ts=1626642018"
            }}
            />
        </View>

        <KeyboardAvoidingView>
            <View>
                <Text style={styles.heading}>
                    Create account
                </Text>
            </View>

            <View style={styles.email}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                value={email}
                style={styles.input}
                placeholder='Enter your email here'
                />
            </View>

            <View style={styles.name}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                value={name}
                style={styles.input}
                placeholder='Enter your name here'
                />
            </View>

            <View style={styles.password}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                secureTextEntry={true}
                value={password}
                style={styles.input}
                placeholder='Enter your password here'
                />
            </View>

            <View style={styles.condition}>
                <Text>I accept the term</Text>
            </View>

            <View style={{ marginTop: 35 }}>
                <BigButton title="Sign up" />
            </View>

            <Pressable style={{ marginTop: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>
                    Already have an account? Log in
                </Text>
            </Pressable>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: Color.lightPrimary, 
        alignItems: "center",
        marginTop:50
    },
    img: {
        height: 46,
        width: 46,
        marginTop: 45,
        marginLeft: 300
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 55,
        color: 'black'
    },
    email: {
        gap: 5,
        marginTop: 35,
    },
    name: {
        marginTop: 10,
    },
    password: {
        marginTop: 10,
    },
    input: {
        marginVertical: 10,
        width: 320,
        height: 60,
        fontSize: 16,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2
    },
    label: {
        fontSize: 16
    },
    condition: {
        marginTop: 15
    },
});