import styled from "styled-components"

interface LogoImgType{
    WidthImg?: string
    HeightImg?: string
    BorderRadius?: string
}

interface PhotoProfileType{
    WidthPhoto: string
}

interface CustomTextType{
    color: string;
    size: string;
    font?: string
    weight?: string
    lineHeight?: string
}

interface IconType{
    color?: string
    width?: string
}

interface DivThreadsOuRespostasType{
    status:string
}

interface ContainerThreadsType{
    display?: string
}

export const Page = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: black;
    padding-top: 20px;
    width: 100%;
    height: 100vh;
    color: white;
    border: 0;
    margin: 0;
    outline: 0;
`;


export const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 610px;

`;

export const Header = styled.div`
    display:flex;
    width: 100%;
    flex-direction:row;
    margin-top: 80px;
`;

export const InfoAccount = styled.div`
    display:flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;



export const LogoImg = styled.img<LogoImgType>`
    width:${(props) => props.width};
    height: ${(props) => props.HeightImg};
    border-radius:${(props) => props.BorderRadius ? props.BorderRadius : '50px'}
`;

export const Nome = styled.h1`
    color: white;
    font-size: 25px;
    font-family: 'Roboto';
    margin: 0;
    border: 0;
`;

export const ContentInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-top: 5px;
`;

export const NomeProfile = styled.h2`
    text-decoration:none;
    color: white;
    font-size: 14px;
    font-family: 'Roboto';
    font-weight: 300;
    margin: 0;
    border: 0;
`; 

export const ButtonThreads = styled.button`
    padding: 3px 8px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 10px;
    height: 20px;
    border: none;
    background-color: #3a3a3a;
    color: #616161;
    letter-spacing: 0.2px;
    cursor:Pointer;
    margin-left: 5px;
`;

export const PhotoDiv = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;


`;

export const PhotoProfile = styled.img<PhotoProfileType>`
    border-radius: 50%;
    width: 100%;
    max-width: 85px;
    height: 100%;
    max-height: 85px;
    
`;

export const Biografia = styled.div`
    display: flex;
    width:100%;
    margin-top: 20px;
    gap:2px;
    flex-direction: column;
`;

export const TextoBio = styled.h3`
    border: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #f3f5f7;
    font-weight: 300;
`;

export const ContainerFollowLink = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 15px;


`;

export const DivFolow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
    flex: 2;

`;

export const DivIconesInstagram = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`;

export const CustomText = styled.p<CustomTextType>`
    margin: 0;
    border: 0;
    font-family: 'Roboto';
    color: ${(props) => props.color ? props.color : 'white'};
    font-size: ${(props) => props.size ? props.size : '12px'};

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const ContainerThreadsOuRespostas = styled.div`
    display: flex;
    flex-direction:row;
    width:100%;

`;

export const DivThreadsOuRespostas = styled.div<DivThreadsOuRespostasType>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex:1;
    padding:10px 0px;
    margin-top: 15px;
    cursor: Pointer;
    border-bottom: ${(props) => props.status === 'true' ? '1px solid white' : ''};
    
`; 


export const ContainerThreads = styled.div<ContainerThreadsType>`
    display: flex;
    flex-direction:row;
    width: 100%;
    display: ${(props) => props.display ? props.display : "flex"} ;
    padding-top: 30px;
    gap: 5px;
`;

export const DivFotoThreadsContainer = styled.div`
    display:flex;
    flex: 1;
`;

export const FotoThreadsDiv = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 37px;
    max-width: 37px;
`;

export const DivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 8;
    color: white;
`;

export const HeaderDivPostThreadsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content:;
`;

export const NameUserPost = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-start;
    cursor: Pointer;
    
`;
    
export const UpTimePost = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    
`;

export const ContentPostThread = styled.div`
    padding: 10px 0px;
`;

export const TextoCustomizavel = styled.h3<CustomTextType>`
    border: 0;
    margin: 0;
    font-family: ${(props) => props.font};
    color: ${(props) => props.color ? props.color : 'white'};
    font-size: ${(props) => props.size ? props.size : '12px'};
    font-weight: ${(props) => props.weight ? props.weight : '400'};
    line-height:${(props) => props.lineHeight ? props.lineHeight : '1'} ;

`;

export const Iconn = styled.img<IconType>`
    width: 100%;
    max-width: ${(props) => props.width ? props.width : '23px'};
    color: ${(props) => props.color};
`;

export const DivInteractions = styled.div`
    display: flex;
    width: 100%;
    margin-top: 12px;
    gap: 12px;
    padding: 5px 0px;
`;