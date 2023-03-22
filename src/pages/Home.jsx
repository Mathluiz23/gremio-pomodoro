import { Container, Box, Divider, Heading, Center } from '@chakra-ui/react';
import SubHeader from '../components/SubHeader';
import TimerPomodoro from '../components/TimerPomodoro';

export default function Home() {
  return (
    <>
    <Heading w={350} p={2.5} m="auto" marginBottom={5}  bgColor="black" borderRadius={10} color='white'>GrêmioPomo 🇪🇪⏳ </Heading>
    <Container className='background' border={['1px solid #000000']}>
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