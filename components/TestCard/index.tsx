import { apiConfig } from "@/Utils/axios"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { Text } from "react-native-elements"
import styled from "styled-components/native"

type Props = {
    imagem: string,
    titulo: string,
    texto: string,
    materia: string
}

// export type Propse = {
//     titulo: string,
//     texto: string,
//     materia: string
// }

export default function TestCard({imagem, titulo, texto, materia}: Props){

    // const informacoesAtomistica: Props[] = 
    // [
    //     {   imagem: '',
    //         titulo: 'Bem-Vindo ao teste de Modelos Atômicos!',
    //         texto: '',
    //         materia: 'Modelo Atômico'
    //     },
    //     {   imagem: '',
    //         titulo: 'Bem-Vindo ao teste de Estrutura Atômica!',
    //         texto: '',
    //         materia: 'Estrutura Atômica'
    //     },
    //     {   imagem: '',
    //         titulo: '',
    //         texto: '',
    //         materia: 'Configuração eletrônica'
    //     },
    //     {   imagem: '',
    //         titulo: '',
    //         texto: '',
    //         materia: 'Radioatividade'
    //     },
       
    // ]

    // const informacoesFormulario: Propse[] = 
    // [
    //     {
    //         titulo: 'Bem-Vindo ao teste de Modelos Atômicos!',
    //         texto: 'vyuhuhbjiokijhgf',
    //         materia: 'Modelo Atômico'
    //     },
    //     {
    //         titulo: 'Bem-Vindo ao teste de Estrutura Atômica!',
    //         texto: '',
    //         materia: 'Estrutura Atômica'
    //     },
    //     {
    //         titulo: '',
    //         texto: '',
    //         materia: 'Configuração eletrônica'
    //     },
    //     {
    //         titulo: '',
    //         texto: '',
    //         materia: 'Radioatividade'
    //     },
       
    // ]
    
    const [questoes, setQuestoes] = useState([]);

    return(<Container>
            <Imagem source={{uri: imagem}}/>
            <Titulo>{titulo}</Titulo>
            <Conteudo>{texto}</Conteudo>
            <Link href={{
                    pathname: "/(Forms)/formulario",
                    params: {
                      titulo: titulo,
                      texto: texto,
                      materia: materia,
                   }}} asChild>
            <Botao>
                <Text style={{color:'#fff', fontSize: 16, fontWeight: "bold"}}>Acessar</Text>
            </Botao>
            </Link>
    </Container>
    )
}

const Container= styled.View`
    height: 350px;
    width: 300px; 
    align-items: center;
    margin-top: 80px;
    margin-left: 30px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

const Titulo = styled.Text`
    text-align: center;
    font-weight: bolder;
    font-size: 25px;
 
`

const Conteudo = styled.Text`
    text-align: center;
    font-size: 16px;
 
`

const Imagem = styled.Image`
    height: 100px;
    width: 100px;
    margin-top: 20px;
`

const Botao = styled.TouchableOpacity`
    height: 40px;
    width: 110px; 
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`