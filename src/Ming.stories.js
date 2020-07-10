import React, { useState, useDisclosure, useRef } from 'react'
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
  AlertDescription,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Scale,
  AlertDialogCloseButton,
  AspectRatioBox,
  Image,
  Avatar,
  AvatarBadge,
  Divider,
  Badge
} from '@chakra-ui/core'
import { MdSettings, MdStar } from 'react-icons/md'

export default { title: 'Ming' }

export const AlertDialogs = () => {
  const [isOpen, setIsOpen] = React.useState()
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  return (
    <ThemeProvider>
      <Button variantColor='red' onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor='red' onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ThemeProvider>
  )
}
export const AspectRatioBoxs = () => {
  return (
    <ThemeProvider>
      <AspectRatioBox maxW='400px' ratio={4 / 3}>
        <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
      </AspectRatioBox>
    </ThemeProvider>
  )
}
export const Avatars = () => {
  return (
    <ThemeProvider>
      <Stack isInline>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
      </Stack>
    </ThemeProvider>
  )
}
export const Dividers = () => {
  return (
    <ThemeProvider>
      <Box>
        <span>Part 1</span>
        <Divider borderColor='red.200' />
        <span>Part 2</span>
      </Box>
    </ThemeProvider>
  )
}
export const TouXiang = () => {
  return (
    <ThemeProvider>
      <Box>
        <Image rounded='md' src='https://bit.ly/2k1H1t6' />
        <Flex align='baseline' mt={2}>
          <Badge variantColor='pink'>Plus</Badge>
          <Text
            ml={2}
            textTransform='uppercase'
            fontSize='sm'
            fontWeight='bold'
            color='pink.800'
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize='xl' fontWeight='semibold' lineHeight='short'>
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align='center'>
          <Box as={MdStar} color='orange.400' />
          <Text ml={1} fontsize='sm'><b>4.84</b> (190)</Text>
        </Flex>
      </Box>
    </ThemeProvider>
  )
}
