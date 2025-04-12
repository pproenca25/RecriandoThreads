import { Page,
         LogoImg,
         ContainerPage,
         Header,
         InfoAccount,
         PhotoDiv,
         Nome,
         NomeProfile,
         ButtonThreads,
         ContentInfo,
         PhotoProfile,
         Biografia,
         TextoBio,
         ContainerFollowLink,
         DivFolow,
         DivIconesInstagram,
         CustomText,
         ContainerThreadsOuRespostas,
         DivThreadsOuRespostas,
         ContainerThreads,
         DivFotoThreadsContainer,
         FotoThreadsDiv,
         DivPostThreadsContainer,
         HeaderDivPostThreadsContainer,
         NameUserPost,
         UpTimePost,
         ContentPostThread,
         TextoCustomizavel,
         Iconn,
         DivInteractions
       } from "./styled"
import threads from '../../../src/assets/images/threads.png'
import photoProfile from '../../../src/assets/images/Imagem do WhatsApp de 2024-11-13 à(s) 14.19.36_ce53ed46.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faComment, faEllipsis, faHeart, faPlus, faShare,} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"




function Profile(){

const [ThreadsOuRespostas, SetThreadsOuRespostas] = useState<string>("threads")

   
    return(
        <>
            <Page>
               

               <ContainerPage>
                    <LogoImg WidthImg='50px' HeightImg='50px' src={threads}  alt="Logo"/>
                    <Header>
                        <InfoAccount>
                            <Nome>Pedro Proença</Nome>
                          
                          <ContentInfo>
                            <NomeProfile>@pedroproenca__</NomeProfile>
                            <ButtonThreads>Threads.net</ButtonThreads>
                          </ContentInfo> 
                            
                        </InfoAccount>
                            
                        <PhotoDiv>
                            <PhotoProfile WidthPhoto='80px' src={photoProfile} />
                        </PhotoDiv>
                    </Header>

                    <Biografia>
                        <TextoBio>T.I há mais de 7 anos</TextoBio>
                        <TextoBio>Nutribras Alimentos - Marombi Alimentos - G4 Educação</TextoBio>
                        <TextoBio>JavaScript, ReactJS, NextJS, </TextoBio>
                    </Biografia>
                    
                    <ContainerFollowLink>
                        <DivFolow>
                            <CustomText color='#616161' size='12px'>Folow: 12M</CustomText>
                            <CustomText color='#616161' size='12px'>Vertecsolucoesmt.com.br</CustomText>
                        </DivFolow>

                        
                        <DivIconesInstagram>
                            <FontAwesomeIcon style={{fontSize:'18px', marginLeft:'10px'}} icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{fontSize:'18px', marginLeft:'12px' }} icon={faPlus}></FontAwesomeIcon>
                        </DivIconesInstagram>

                    </ContainerFollowLink>

                    <ContainerThreadsOuRespostas>
                        <DivThreadsOuRespostas status={ThreadsOuRespostas === 'threads' ? 'true' : 'false' } onClick={() => {SetThreadsOuRespostas('threads')}}>
                            <CustomText color='White' size="14px">
                                Threads
                            </CustomText>
                        </DivThreadsOuRespostas>

                        <DivThreadsOuRespostas  status={ThreadsOuRespostas === 'respostas' ? 'true' : 'false'} onClick={() => {SetThreadsOuRespostas('respostas')}}>
                            <CustomText color="white" size="14px">
                                Respostas
                            </CustomText>
                        </DivThreadsOuRespostas>
                    </ContainerThreadsOuRespostas>
                    
                    <ContainerThreads display={ThreadsOuRespostas === 'threads' ? 'flex' : 'none'}>


                       <DivFotoThreadsContainer>
                        
                           <FotoThreadsDiv src={photoProfile} />
                        
                        </DivFotoThreadsContainer>    

                        
                        <DivPostThreadsContainer>
                            <HeaderDivPostThreadsContainer>
                                <NameUserPost>
                                    <TextoCustomizavel weight="400" font='Roboto' color='white' size='14px'>@pproenca__</TextoCustomizavel>
                                </NameUserPost>

                                <UpTimePost>
                                    <TextoCustomizavel weight="400" font="Roboto" color='grey' size='13px'>3 Sem</TextoCustomizavel>

                                    <FontAwesomeIcon  icon={faEllipsis} />
                                </UpTimePost>


                            </HeaderDivPostThreadsContainer>
                            
                            <ContentPostThread>
                               <TextoCustomizavel lineHeight="2" weight='400' font="Roboto" color='white' size='14px'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo facere vitae debitis quidem corporis perspiciatis nulla possimus voluptas maxime placeat, doloremque est illum inventore eos fuga assumenda, quis officiis praesentium.</TextoCustomizavel>         

                               <DivInteractions>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <FontAwesomeIcon icon={faComment} />
                                    <FontAwesomeIcon icon={faShare} />
                               </DivInteractions>

                            </ContentPostThread>

                        </DivPostThreadsContainer> 
                    </ContainerThreads>
               </ContainerPage>



            </Page>
        </>
    )
}

export default Profile