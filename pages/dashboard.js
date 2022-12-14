import { Navbar } from '../components/Navbar'
import ContentLayout from '../components/ContentLayout'
import { SideBar } from '../components/SideBar'
import { Notification } from '../components/Notification'
import clientPromise from '../lib/mongodb'
import RenderView from '../components/RenderView'

import {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Button,
  Grid,
  GridItem,
  Divider,
  Box
} from '@chakra-ui/react'

import axios from 'axios'

export default function dashboard({users, aguasGrises, aguasPotables, aguasIncendios}) {

  const tabOneName = 'Aguas Negras'
  const tabTwoName = 'Aguas Grises'
  const tabThreeName = 'Agua Potable'
  const tabFourName = 'Tubería contra incendios'


  return (
    <>
      {/* 
    para hacer el navbar sticky
    sx={{ position: '-webkit-sticky', position: 'sticky', top: '0', }} */}
      <Navbar />
      <main>
        {/** El is lazy nos permite solo */}
        <Tabs>
          <TabList>
          <Tab>{tabOneName}</Tab>
            <Tab>{tabTwoName}</Tab>
            <Tab>{tabThreeName}</Tab>
            <Tab>{tabFourName}</Tab>
          </TabList>

          <TabPanels height={"100%"} overflowY={"hidden"}>
            <TabPanel height={"89vh"} p={0}>
              <ContentLayout>
                <Grid templateColumns={"repeat(24, 1fr)"} gap={1}>
                  <GridItem colSpan={5}>
                    <SideBar name={tabOneName}>
                      {/** TODO: Aquí va la lógica de negocio para poner todas las notificaciones */}
                      {
                         users?.map((item, keyVal) => {
                          return (
                            <Box key={keyVal} width={'100%'}>
                            <Notification  status={item.state} time={item.timeStamp} />
                            
                            </Box>
                          )
                        })
                      }


                    </SideBar>
                  </GridItem>

                  {/** Cuerpo de la vista */}
                  <GridItem colSpan={19}>
                    <RenderView />
                  </GridItem>
                </Grid>
              </ContentLayout>
            </TabPanel>

            <TabPanel height={"89vh"} p={0}>
            <ContentLayout>
                <Grid templateColumns={"repeat(24, 1fr)"} gap={1}>
                  <GridItem colSpan={5}>
                    <SideBar name={tabTwoName}>
                      {/** TODO: Aquí va la lógica de negocio para poner todas las notificaciones */}
                      {
                         aguasGrises?.map((item, keyVal) => {
                          return (
                            <Box key={keyVal} width={'100%'}>
                            <Notification  status={item.state} time={item.timeStamp} />
                            
                            </Box>
                          )
                        })
                      }


                    </SideBar>
                  </GridItem>

                  {/** Cuerpo de la vista */}
                  <GridItem colSpan={19}>
                    <RenderView />
                  </GridItem>
                </Grid>
              </ContentLayout>
            </TabPanel>


            <TabPanel height={"89vh"} p={0}>

            <ContentLayout>
                <Grid templateColumns={"repeat(24, 1fr)"} gap={1}>
                  <GridItem colSpan={5}>
                    <SideBar name={tabTwoName}>
                      {/** TODO: Aquí va la lógica de negocio para poner todas las notificaciones */}
                      
                      {
                         aguasPotables?.map((item, keyVal) => {
                          return (
                            <Box key={keyVal} width={'100%'}>
                            <Notification  status={item.state} time={item.timeStamp} />
                            
                            </Box>
                          )
                        })
                      }


                    </SideBar>
                  </GridItem>

                  {/** Cuerpo de la vista */}
                  <GridItem colSpan={19}>
                    <RenderView />
                  </GridItem>
                </Grid>
              </ContentLayout>

            </TabPanel>

            <TabPanel height={"89vh"} p={0}>
            <ContentLayout>
                <Grid templateColumns={"repeat(24, 1fr)"} gap={1}>
                  <GridItem colSpan={5}>
                    <SideBar name={tabTwoName}>
                      {/** TODO: Aquí va la lógica de negocio para poner todas las notificaciones */}
                      
                      {
                         aguasIncendios?.map((item, keyVal) => {
                          return (
                            <Box key={keyVal} width={'100%'}>
                            <Notification  status={item.state} time={item.timeStamp} />
                            
                            </Box>
                          )
                        })
                      }


                    </SideBar>
                  </GridItem>

                  {/** Cuerpo de la vista */}
                  <GridItem colSpan={19}>
                    <RenderView />
                  </GridItem>
                </Grid>
              </ContentLayout>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    await clientPromise

    const axiosInstance = axios.create({
      baseURL: process.env.BASE_URL
    })

    const usersRes = await axiosInstance.get('/api/aguasNegras')
    // le da estructura al prop que se manda al frontend
    let users = usersRes.data.users[0].puntos
//    console.log('matter', usersRes.data.users[0])


    const aguasGrisesRes = await axiosInstance.get('/api/aguasGrises')
    let aguasGrises = aguasGrisesRes.data.users[0].puntos
    console.log('gris', aguasGrisesRes.data.users[0].puntos)


    const aguasPotablesRes = await axiosInstance.get('/api/aguasPotables')
    let aguasPotables = aguasPotablesRes.data.users[0].puntos
    console.log('gris', aguasPotablesRes.data.users[0].puntos)


    const aguasIncendiosRes = await axiosInstance.get('/api/aguasIncendios')
    let aguasIncendios = aguasIncendiosRes.data.users[0].puntos
    console.log('gris', aguasIncendiosRes.data.users[0].puntos)

    return {
      props: { users, aguasGrises, aguasPotables, aguasIncendios }
    }


  } catch (e) {
    console.error(e)
  } return {
    props: { error: false }
  }
}