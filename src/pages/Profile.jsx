import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { EmailIcon, ChatIcon, StarIcon,CheckCircleIcon,WarningIcon } from "@chakra-ui/icons";
export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Gamalgamer10@yahoo.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              VERY IMPORTANT: Clear browser cookies first o r open the private
              browser window. Copy and paste the link into your browser:
              https://bit.ly/3AFHrcm VERY IMPORTANT: Press the search button
              again on Search engine.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Read and scroll normally. You will see the Next Page when you
              scroll down. Press the Next Page button on each page to visit a
              total of 10 pages. You will see the Get Code button when you have
              visited a total of 10 pages. You will see this code when you press
              the Get Code button Code*****M
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem><ListIcon as={CheckCircleIcon} /></ListItem>
            <ListItem><ListIcon as={WarningIcon} /></ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
