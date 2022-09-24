import { Navbar } from '../components/Navbar'

import {
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
} from '@chakra-ui/react'

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main>
        <Tabs>
          <TabList>
            <Tab>Aguas Negras</Tab>
            <Tab>Aguas Grises</Tab>
            <Tab>Aguas Potables</Tab>
            <Tab>Tubería contra incendios</Tab>

          </TabList>

          <TabPanels>
            <TabPanel>
              hola1
            </TabPanel>

            <TabPanel>
              hola2
            </TabPanel>

            <TabPanel>
              hola1
            </TabPanel>

            <TabPanel>
              hola1
            </TabPanel>

          </TabPanels>

        </Tabs>
        {children}
        </main>
        

      </>
    )
  }