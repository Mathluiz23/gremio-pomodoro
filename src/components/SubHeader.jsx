import React from "react";
import { Heading, Input, Stack } from "@chakra-ui/react";

const SubHeader = () => {
  return (
    <Heading as="h2" size="lg">
      <Stack
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        spacing={4}
        direction="row"
        style={styles.Header}
      >
        <Input
          placeholder="What is your task for now?"
          _placeholder={{ color: 'white' }}
          fontSize="lg"
          border="border-bottom 1px solid white"
          focusBorderColor="transparent"
          fontWeight="medium"
          textAlign="center"
          color="white"
        ></Input>
      </Stack>
    </Heading>
  );
};

const styles = {
  Header: {
    color: "white",
  },
};

export default SubHeader;