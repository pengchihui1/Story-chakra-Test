import React, { useState,useRef } from 'react'
import { Button } from '@storybook/react/demo'
import {
	 ThemeProvider,
	 Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
	AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/core'

export  const  selectAlert=()=>{
	return (
	<ThemeProvider>
			<Stack spacing={3}>
			  <Alert status="error">
				<AlertIcon />
				There was an error processing your request
			  </Alert>

			  <Alert status="success">
				<AlertIcon />
				Data uploaded to the server. Fire on!
			  </Alert>

			  <Alert status="warning">
				<AlertIcon />
				Seems your account is about to expire, upgrade now!
			  </Alert>

			  <Alert status="info">
				<AlertIcon />
				Chakra is going live on August 30th. Get ready!
			  </Alert>
			</Stack>
	</ThemeProvider>
)
}
export  const  AlertDialogs=()=>{
	const [isOpen, setIsOpen] = useState();
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  return (
		  <ThemeProvider>
      <Button variantCsolor="red" onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="red" onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
		</ThemeProvider>
	)}