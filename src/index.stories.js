import React, { useState } from 'react'
import { Button } from '@storybook/react/demo'
import {
  Checkbox, CheckboxGroup, Icon, Stack, ThemeProvider, Heading, Flex, Text, theme, Accordion, Box,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/core'
export default { title: 'Button' }

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
  <Button>
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </Button>
)
export const Headings = () => {
  return (
    <ThemeProvider>
      <Heading as='h1' size='2xl'>
        In love with React & Next
      </Heading>
    </ThemeProvider>
  )
}
export const Checkboxs = () => {
  return (
    <ThemeProvider>
      <Stack spacing={10} isInline>
        <Checkbox isDisabled>Checkbox</Checkbox>
        <Checkbox isDisabled defaultIsChecked>
          Checkbox
        </Checkbox>
      </Stack>
    </ThemeProvider>
  )
}
export const Accordions = () => {
  return (
    <ThemeProvider>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionHeader>
            <Box flex='1' textAlign='left'>
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader>
            <Box flex='1' textAlign='left'>
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </ThemeProvider>
  )
}
export const Alerts = () => {
  return (
    <ThemeProvider>
      <Stack spacing={3}>
        <Alert status='error'>
          <AlertIcon />
    There was an error processing your request
        </Alert>

        <Alert status='success'>
          <AlertIcon />
    Data uploaded to the server. Fire on!
        </Alert>

        <Alert status='warning'>
          <AlertIcon />
    Seems your account is about to expire, upgrade now!
        </Alert>

        <Alert status='info'>
          <AlertIcon />
    Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
    </ThemeProvider>
  )
}
