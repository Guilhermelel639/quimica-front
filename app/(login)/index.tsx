import styled, { ThemeProvider } from "styled-components/native";
import theme from "@/theme";
import { View, Image, Text, TextInput, Pressable } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Input, Icon } from "react-native-elements";
import { useState } from "react";
import { apiConfig } from "@/Utils/axios";
import { Alert } from "react-native";
import { router } from "expo-router";


export default function Login(){
 
 const [passwordVisible, SetPasswordVisible] = useState(true)
 const [email, setEmail] = useState('@')
 const [password, setPassword] = useState('_password_')


 const opacity = useSharedValue(0); // Opacidade inicial a 0 para efeito de fade-in
 const animatedImageStyle = useAnimatedStyle(() => {
    return {
        opacity: opacity.value,
        transform: [{ scale: withTiming(opacity.value, { duration: 800 }) }],
    };
});

async function loginFunc()
    {
        try
            {
                //Ja que a API é padrão para todo o sistema, isolei as configurações gerais
                //e apenas importo elas aonde preciso e uso o método http que eu quero

                let res = await apiConfig.post('/login',{
                    email: email,
                    senha: password
                });

                if(res.status == 204){
                    return Alert.alert('Ops...','Usuario ou senha incorretos!',
                        [
                            {
                                text: 'Ok'
                            }
                        ]
                    )
                }
                else
                {
                   router.push('/(Inicial)') 
                }
            }
            catch(error)
            {
                console.log(error)
                throw new Error('Erro ao logar... :');        
            }
        }

 
    return(
        
        <ThemeProvider theme={theme}>
        <Container>
                <Section>
                    <Info>
                    <Image style={{height: 100, width: 300}} source={require('../../assets/images/Logo.png')}/>
                    </Info>

                    <Caixa>
                  
                    <View style={{gap: 30}}>
                       <Title> Login </Title>
                       <Subtitle>Bem-vindo ao Química In Box</Subtitle>
                    </View>

                    <View style={{gap: 20}}>
                       <Input placeholder="Email" onChangeText={text => setEmail(text)}/>
                       <Input placeholder="Senha"
                       
                          secureTextEntry={passwordVisible}
                          onChangeText={text => setPassword(text)}
                                  rightIcon={
                                      passwordVisible ? 
                                      
                                      <Icon 
                                          name="visibility-off"
                                          type="material"
                                          size={22}
                                          onPress={()=> SetPasswordVisible(!passwordVisible)}
                                      />
                                      :
                                      <Icon 
                                          name="visibility"
                                          type="material"
                                          size={22}
                                          onPress={()=> SetPasswordVisible(!passwordVisible)}
                                      />
                                  }   
                          />
                    </View>

                    <View style={{gap: 30}}>
                       <Button onPress={()=> loginFunc()}>
                         <Text style={{color: '#fff'}}>Entrar</Text>
                       </Button>
                    </View>
                  
                 
                    </Caixa>
                </Section>
        </Container>   
        </ThemeProvider> 
        )
}

const Container = styled.View`
    height: 100rem;
    background-color: ${({theme}) => theme.COLORS.WHITE_BLUE};
   
    `

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.XL};
    margin-top: 2rem;
    text-align: center;

    `

const Subtitle = styled.Text`
font-size: ${({theme}) => theme.FONT_SIZE.LG};
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
`

const Section = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    `

const Info = styled.View`
    height: 35rem;
    width: 30rem;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};   
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    `

const Caixa = styled.View`
    height: 35rem;
    width: 25rem;
    align-items: center;
    gap: 4rem;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    `
    
const Button = styled.Pressable`
    height: 2.5rem;
    width: 10rem;
    border-radius: 0.7rem;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    
    
    `