
import theme from "@/theme"; 
import { useFonts, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import styled, { ThemeProvider } from "styled-components/native"; 
import { useEffect } from "react";
import { SplashScreen } from "expo-router";
import { Icon } from "react-native-elements";
import IndividualIntervalsExample from "@/components/Carousel";

export default function Home(){

    const [fontsLoaded, fontError] = useFonts({
        Inter_500Medium,
        Inter_700Bold,
      });

      useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);
    
    return (
      
        <ThemeProvider theme={theme}>
            <Container>
            <IndividualIntervalsExample/>
                 <Section>
                    <Card>
                        <Icon style={{alignItems: 'flex-start', paddingLeft: 10}}
                        name="school"
                        type="material"
                        color='#38b6ff'
                        size={40}
                        />
                        <Title>Nossa formação</Title>
                        <Content>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At beatae, cum natus optio dolorem. dolor sit amet consectetur adipisicing elit. At beatae, cum natus optio dolorem</Content>

                        
                    </Card>

                    <Card>
                        <Icon style={{alignItems: 'flex-start', paddingLeft: 10}}
                        name="school"
                        type="material"
                        color='#38b6ff'
                        size={40}
                        />
                        <Title>Nossa formação</Title>
                        <Content>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At beatae, cum natus optio dolorem. dolor sit amet consectetur adipisicing elit. At beatae, cum natus optio dolorem</Content>

                        
                    </Card>

                    <Card>
                        <Icon style={{alignItems: 'flex-start', paddingLeft: 10}}
                        name="school"
                        type="material"
                        color='#38b6ff'
                        size={40}
                        />
                        <Title>Nossa formação</Title>
                        <Content>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At beatae, cum natus optio dolorem. dolor sit amet consectetur adipisicing elit. At beatae, cum natus optio dolorem</Content>

                        
                    </Card>
                </Section>  
            </Container>   
        </ThemeProvider>
  
    );
}


const Container = styled.View`
    height: 100%;  
    background-color: ${({ theme }) => theme.COLORS.WHITE_BLUE}; 
`

const Card = styled.View`
    height: 10rem;
    width: 25rem;   
    border-radius: 1rem;
    margin-top: -120;
    border-bottom-color:  ${({ theme }) => theme.COLORS.BLUE_300};
    border-bottom-width: 3px;
        
    background-color: ${({ theme }) => theme.COLORS.WHITE}; 

   
`

const Section = styled.View`
   flex-direction: row;
   justify-content: space-around;
`

const Title = styled.Text`
   padding-left: 1rem;
   font-size: 1.2rem;
   font-weight: bold;
`
const Content = styled.Text`
   width: 25rem;
   padding-left: 1rem;
  
`

const Banner = styled.Image`
    height: 100%; 
    width: 100%;
    margin-top: -180;

    
`