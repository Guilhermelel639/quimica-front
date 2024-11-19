
import theme from "@/theme";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled, { ThemeProvider } from "styled-components/native";
import { Link } from "expo-router";
import { Icon } from 'react-native-elements';

export type Informacoes = {
    numero: number,
    icones: string,
    texto: string
} 
export type Testes =   {
    id: string,
    imagem: string,
    titulo: string,
    texto: string,
    materia: number,
 
}

export default function Header(){
    
    const testesAtomistica: Testes[] = [
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Estrutura Atômica',
        texto: 'A estrutura atômica, base da química, consiste em um núcleo com prótons e nêutrons, rodeado por elétrons em níveis de energia.',
        materia: 1,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Modelos Atômicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 3,
       
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91af63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Configuração eletrônica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 4,
        
    },
    {
        id: '3acafc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/atom.png',
        titulo: 'Radioatividade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 2,
    }]

    const informacoesAtomistica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Atomo.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/ModeloAtomico.png',
            texto: 'Teste de texto'
        }
    ]

    const testesQuimicaGeral: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2a',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Propriedades da matéria',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 5
    },
    {
        id: '3ac68afc-c605-4d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Substâncias químicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 6
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Separação de misturas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 7
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Tabela periódica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 8
    },
    {
        id: '3a768afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Propriedades periódicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 9
    },
    {
        id: '3ac68afc-c605-486523-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Ligações químicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 10
    },
    {
        id: '3ac64sg88afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Geometria molecular e Polaridade',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 11
    },
    {
        id: '3ac68afc-c605-48dsrbhthsra7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Forças intermoleculares',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 12
    },
    {
        id: '3adfrvare8afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Leis ponderais',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 13
    },
    {
        id: '3ac68afc-c60vfdb48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Reações químicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 14
    },
    {
        id: '3adsv8afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Quantidade de matéria',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 15
    },
    {
        id: '87ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Gases e transformações gasosas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 16
    },
    {
        id: '625ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/microscope.png',
        titulo: 'Estequiometria',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 17
    }]

    const informacoesQuimicaGeral: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Atomo.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/ModeloAtomico.png',
            texto: 'Teste de texto'
        }
    ]

    const testesInorganica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Ácidos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 18
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Bases',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 19
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Sais',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 20
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Óxidos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 21
    },
    {
        id: '3ac68afc5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/lattice.png',
        titulo: 'Reações Inorgânicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 22
    },]

    const informacoesInorganica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Atomo.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/ModeloAtomico.png',
            texto: 'Teste de texto'
        }
    ]

    const testesFisicoQuimica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Soluções',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 23
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Diluição e misturas de soluções',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 24
    },
    {
        id: '3ac68afc-c5-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Termoquímica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 25
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Cinética Química',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 26
    },
    {
        id: '3ac68asdac605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Equilíbrio Químico',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 27
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-f5bd91a63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Equilíbrio Iônico',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 28
    },
    {
        id: 'ac6afc-c605-48d3-a4f8-çbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'pH e pOH',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 29
    },
    {
        id: '3ac68afc-chjs-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Equilíbrio Heterogêneo',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 30
    },
    {
        id: '7ac68afc-c605-4vv4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Processos de Óxido-redução',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 31
    },
    {
        id: '3ac68afc-7sdf5-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Pilhas (Celas Galvânicas)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 32
    },
    {
        id: '3ac68afc-c605-48895-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/science.png',
        titulo: 'Eletrólise (Celas eletrolíticas)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 33
    }]

    const informacoesFisicoQuimica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Atomo.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/ModeloAtomico.png',
            texto: 'Teste de texto'
        }
    ]

    const testesOrganica: Testes[] = [{
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Cadeias Carbônicas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 34
    },
    {
        id: '3ac6ds-c605-48d3-a4f8-fbd91aa97f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Hidrocarbonetos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 35
    },
    {
        id: '3ac68afc-c5-48d38958-fbd91aa97f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Funções Oxigenadas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 36
    },
    {
        id: '3ac68afc-frhm-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Funções Nitrogenadas e Halogenadas',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 37
    },
    {
        id: '3ac68afc-c605-48d3tyd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Propriedades Físicas dos Compostos Orgânicos',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 38
    },{
        id: '3ac68afc-c605-48d3-a47jfnfbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Isomeria Constitucional (plana)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 39
    },{
        id: '3a35rth6fc-c605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Isomeria Espacial (geométrica e óptica)',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 40
    },{
        id: '3ac68afcgfd63-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Reações de Substituição e Adição',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 41
    },{
        id: '3erttyc605-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Reações de Eliminação',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 42
    },{
        id: '3ac68afc09-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Reações de Oxido-redução ',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 43
    },{
        id: '3ac68afc-c605-48d3-a467fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Polímeros e reações de polimerização',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 44
    },{
        id: '3ac68af7505-48d3-a4f8-fbd91a7f63',
        imagem: '../../assets/images/Icons/molecule.png',
        titulo: 'Bioquímica',
        texto: 'A atomística é a parte da Química que trata do estudo do átomo e suas características.',
        materia: 45
    }]

    const informacoesOrganica: Informacoes[] = 
    [
        {
            numero: 1,
            icones: '../../assets/images/Icons/Livro.png',
            texto: 'Teste de texto'
        },
        {
            numero: 2,
            icones: '../../assets/images/Icons/Atomo.png',
            texto: 'Teste de texto'
        },
        {
            numero: 3,
            icones: '../../assets/images/Icons/ModeloAtomico.png',
            texto: 'Teste de texto'
        }
    ]

    return(
        <ThemeProvider theme={theme}>
        <Container>
            <Image style={{height: 70, width: 210}} source={require('../../assets/images/Logo.png')}/>

            <View style={{flexDirection: 'row', gap: 10 }}> 

            <Link href='/(Inicial)' asChild>
                <TouchableOpacity>
                <Title> Home </Title>   
                </TouchableOpacity> 
            </Link>

            <Link href={{
                pathname: '/(ZAtomistica)',
                params: {
                    sobre: 'Atomistica',
                    informacoes: JSON.stringify(informacoesAtomistica),
                    testes: JSON.stringify(testesAtomistica)
                }}} asChild>
                <TouchableOpacity>
                <Title>Atomística</Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Química Geral',
                     informacoes: JSON.stringify(informacoesQuimicaGeral),
                     testes: JSON.stringify(testesQuimicaGeral)
                }}} asChild>
                <TouchableOpacity>
                <Title> Química Geral </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Inorgânica',
                     informacoes: JSON.stringify(informacoesInorganica),
                     testes: JSON.stringify(testesInorganica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Inorgânica </Title>
                </TouchableOpacity>
            </Link>
          
            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Físico Química',
                     informacoes: JSON.stringify(informacoesFisicoQuimica),
                     testes: JSON.stringify(testesFisicoQuimica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Físico Química </Title>
                </TouchableOpacity>
            </Link>

            <Link href={{
                 pathname: '/(ZAtomistica)',
                 params: {
                     sobre: 'Organica',
                     informacoes: JSON.stringify(informacoesOrganica),
                     testes: JSON.stringify(testesOrganica)
                }}} asChild>
                <TouchableOpacity>
                <Title> Orgânica </Title>
                </TouchableOpacity>
            </Link>

            </View> 
            <Link href='/(login)'>
            
            {/*Icon de Conta */}
             <Icon
                name='person'
                type='material'
                color='#fff'
                size={30}
            />
                 
            </Link> 

        </Container>   
       
        </ThemeProvider> )
}

const Container = styled.View`
    height: 8rem;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    background-color: ${({theme}) => theme.COLORS.BLUE_700};
`

const Title = styled.Text`
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    color: ${({theme}) => theme.COLORS.WHITE};
`