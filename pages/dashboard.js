import { Navbar } from '../components/Navbar'
import ContentLayout from '../components/ContentLayout'
import { SideBar } from '../components/SideBar'
import { Notification } from '../components/Notification'
import clientPromise from '../lib/mongodb'

import {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react'

import axios from 'axios'

export default function dashboard(users) {

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
        { /** El is lazy nos permite solo */}
        <Tabs isLazy>
          <TabList>
            <Tab>{tabOneName}</Tab>
            <Tab>{tabTwoName}</Tab>
            <Tab>{tabThreeName}</Tab>
            <Tab>{tabFourName}</Tab>

          </TabList>

          <TabPanels height={'100%'}>


            <TabPanel height={'100vh'} p={0}>

              <ContentLayout>

                <Grid templateColumns={'repeat(12, 1fr)'} gap={4}>
                  <GridItem colSpan={3}>
                    <SideBar name={tabOneName}>
                      {/** TODO: Aquí va la lógica de negocio para poner todas las notificaciones */}
                      <Notification status={'CRITICO'} time={'3:45:23'} />
                      <Notification status={'Tubería dañada'} time={'3:45:23'} />
                      <Notification status={'Tubería dañada'} time={'3:45:23'} />
                      <Notification status={'CRITICO'} time={'3:45:23'} />
                      <Notification status={'Tubería dañada'} time={'3:45:23'} />

                      {
                         users?.users?.map((item, keyVal) => {
                          return (
                            <Notification key={keyVal} status={item.state} time={item.timeStamp} />
                          )
                        })
                      }


                    </SideBar>
                  </GridItem>

                  {/** Cuerpo de la vista */}
                  <GridItem colSpan={9}>
                    <Button>hola</Button>



                  </GridItem>

                </Grid>
              </ContentLayout>

            </TabPanel>

            <TabPanel>

            </TabPanel>

            <TabPanel>
              hola1
            </TabPanel>

            <TabPanel>
              hola1
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

    const usersRes = await axiosInstance.get('/api/mongoReq')
    console.log('matter', usersRes.data.users[0])

    // le da estructura al prop que se manda al frontend
    let users = usersRes.data.users[0].puntos
    console.log('hola',users)

    return {
      props: { users }
    }


  } catch (e) {
    console.error(e)
  } return {
    props: { error: false }
  }
}