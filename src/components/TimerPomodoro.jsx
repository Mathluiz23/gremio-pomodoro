import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Heading, IconButton, Input, Stack } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import audio from "./audio.mp3"

const TimerPomodoro = () => {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(null);

  const id = useRef(null);


  function decFun() {
    time - 5 < 0 ?
      alertOption()
      : setTime(prevCount => prevCount - 5);
  }

  function alertOption() {
    setTime(0);
    setSeconds(0);
    Swal.fire({
      title: 'Oh no!',
      text: 'Timer cannot be less than 00:00 Min!',
      imageUrl: 'https://terceirotempo.uol.com.br/imagens/24/11/arq_92411.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
      confirmButtonColor: '#00466c',
    })
  }

  useEffect(() => {
    document.title = `${time < 10 ? '0' + time : time} : ${seconds < 10 ? '0' + seconds : seconds - 1} - Timer`;
  }, [sec, seconds, time]);

  useEffect(() => {
    if (start) {
      startTimer();
    } else if (!start) {
      setStart(null);
      stopTimer();
    }
  }, [start]);

  const startTimer = () => {
    let interval = setInterval(() => {
      setSec(prev => prev + 1);
    }, 1000);
    id.current = interval;
  };

  useEffect(() => {
    if (sec != 0 && start) {
      if (seconds == 0 && time == 0) {
        const alarme = new Audio(audio);
        alarme.play();

        setTimeout(() => {
          Swal.fire({
            title: 'Timer is over!',
            text: 'time defined for the task has ended',
            imageUrl: 'https://tntsports.com.br/__export/1673997393473/sites/esporteinterativo/img/2023/01/17/gazeta-press-foto-1815960_1.jpg_554688468.jpg',
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            confirmButtonColor: '#00466c',
          }).then(() => {
          alarme.pause();
        });
      }, 1000);

        stopTimer();
        setStart(false);
      } else if (seconds == 0) {
        setSeconds(59);
        setTime(time => time - 1);
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }
  }, [sec]);

  function stopTimer() {
    clearInterval(id.current);
  };

  function resetTimer() {
    setTime(0);
    setSeconds(0);
    setStart(false);
    stopTimer();
  }

  return (
    <Heading>
      <Stack
        alignItems="center"
        direction={['row']}
        justifyContent="space-between"
        spacing={[4, 5]}
        style={styles.timer}
        width="100%"
        maxWidth="600px"
      >
        <Box flex="1">
          <IconButton
            aria-label="Minus-Icon"
            color="#00466c"
            icon={<MinusIcon />}
            size="md"
            onClick={() => {
              decFun();
            }}
          />
        </Box>
        <Box flex="2" fontSize={['5rem', '7.5rem']} color="white">
          {time < 10 ? '0' + time : time}
        </Box>
        <Box flex="1">
          :
        </Box>
        <Box flex="2" fontSize={['5rem', '7.5rem']} color="white">
          {seconds < 10 ? '0' + seconds : seconds}
        </Box>
        <Box flex="1">
          <IconButton
            aria-label="Add-Icon"
            color="#00466c"
            icon={<AddIcon />}
            size="md"
            onClick={() => {
              setTime(prevCount => prevCount + 5);
            }}
          />
        </Box>
      </Stack>
      <Box margin={['5px 0', null, '5px 0']}>
        <Input
          border="border-b 2px solid white"
          maxLength={2}
          fontSize={['md', 'lg']}
          color="white"
          width={['100%', '200px']}
          focusBorderColor="transparent"
          textAlign="center"
          type="number"
          _placeholder={{ color: 'white' }}
          placeholder="enter seconds"
          onChange={(e) => {
            parseInt(e.target.value) <= 60
              ? setSeconds(parseInt(e.target.value))
              : Swal.fire({
                title: 'What a disaster!',
                text: 'Timer cannot be more than 60 seconds, less than 0 seconds or more than 2 digits!',
                imageUrl: 'https://lorena.r7.com/public/assets/img/galeria-imagens/geromel.webp',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Custom image',
                confirmButtonColor: '#00466c',
              })
          }}
        />
      </Box>
      <Stack
        alignItems="center"
        direction={['row']}
        justifyContent="space-between"
        spacing={[4, null, 5]}
        style={styles.timerContainer}
        margin={['10px 0', null, '10px 0']}
      >
        <Button
          size={['md', 'lg']}
          colorScheme="blue"
          color={'black'}
          padding={['6px 12px', '24px']}
          border="2px solid white"
          onClick={() => {
            setTime(1);
          }}
        >
          1 min
        </Button>
        <Button
          size={['md', 'lg']}
          padding={['6px 12px', '24px']}
          backgroundColor="white"
          border="2px solid black"
          color="#00466c"
          colorScheme="whiteAlpha"
          onClick={() => {
            setTime(10);
          }}
          
        >
          10 min
        </Button>
        <Button
          size={['md', 'lg']}
          padding={['6px 12px', '24px']}
          backgroundColor="black"
          color="blue"
          border={'2px solid white'}
          colorScheme="blackAlpha"
          onClick={() => {
            setTime(25);
          }}
        >
          25 min
        </Button>
      </Stack>
      <Center style={styles.buttonStyle}>
        <Button
          w={['100%', '120px']}
          colorScheme={start ? 'yellow' : 'green'}
          size={['md', 'lg']}
          onClick={() => {
            setStart((!start));
          }}
        >
          {start ? 'Stop' : 'Start'}
        </Button>
        <Button
          w={['100%', '120px']}
          colorScheme="blackAlpha"
          color="white"
          border="2px solid white"
          marginLeft={10}
          size={['md', 'lg']}
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </Button>
      </Center>
    </Heading>
  )
}

const styles = {
    timerContainer: {
        paddingTop: 40,
       
},
    timer: {
        FontFace: 'arial',
        fontSize: '10vw',
        color: "#dadada"
    },
    buttonStyle: {
        paddingTop: 50,
    }
}

export default TimerPomodoro; 