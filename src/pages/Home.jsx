import { Container, Box, Divider, Heading, Center } from '@chakra-ui/react';
import SubHeader from '../components/SubHeader';
import TimerPomodoro from '../components/TimerPomodoro';

export default function Home() {
  return (
    <>
    <div className='header'>
    <Heading m="auto" borderRadius={10} color='white'>GrêmioPomo 🇪🇪⏳ </Heading>
    </div>
    <Container className='background'>
      <Box >
        <Box p='5' rounded='md' textAlign="center">
          <SubHeader/>
          <Divider />
          <Center>
            <TimerPomodoro/>
          </Center>
        </Box>
      </Box>
    </Container >
    </>
  )
}