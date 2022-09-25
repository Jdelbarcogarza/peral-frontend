import { Navbar } from '../components/Navbar'
import ContentLayout from '../components/ContentLayout'
import { SideBar } from '../components/SideBar'
import { Notification } from '../components/Notification'


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

export default function dashboard() {

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


            <TabPanel height={'100vh'} p={1}>

              <ContentLayout>

                <Grid templateColumns={'repeat(12, 1fr)'} gap={4}>
                  <GridItem colSpan={3}>
                    <SideBar name={tabOneName}/>
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