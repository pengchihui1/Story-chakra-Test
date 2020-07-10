import React, { useState } from 'react'
import { Button } from '@storybook/react/demo'
import {
	 ThemeProvider,
	 Box,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,Icon
 
} from '@chakra-ui/core'

export  const  Accordions=()=>{
	return (
	<ThemeProvider>
				<AccordionItem>
				<AccordionHeader _expanded={{ bg: "tomato", color: "white" }}>
					<Box flex="1" textAlign="left">
						Click me to see a different style
					</Box>
					<AccordionIcon />
				</AccordionHeader>
				<AccordionPanel>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</AccordionPanel>
			</AccordionItem>
			</ThemeProvider>
)
}
export  const  OneTest=()=>{
	return (
	  <ThemeProvider>
		 <Accordion allowMultiple>
  <AccordionItem>
    <AccordionHeader>
      <Box flex="1" textAlign="left">
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

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            Section 2 title
          </Box>
          <Icon size="12px" name={isExpanded ? "minus" : "add"} />
        </AccordionHeader>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accordion>
		</ThemeProvider>
	
	)}