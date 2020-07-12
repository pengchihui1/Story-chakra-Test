import React, { useState } from 'react'
import {
	useToast,
  ThemeProvider,
	Box,
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
	Stack,
	Image,
	Checkbox, CheckboxGroup,
	Avatar, AvatarBadge,
	AspectRatioBox,
	Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparators,
  Button,
   CircularProgress,
	CircularProgressLabel,
	CloseButton,
	 Code,
	 Collapse,
	 VisuallyHidden,
	 ControlBox,
	 Icon ,
	  Divider,
	  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Editable, EditableInput, EditablePreview,
  Flex,
  Input,
   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Grid,
  Heading,
  Link,
   List, ListItem, ListIcon,
   Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem,
   NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Progress,
  PseudoBox,
  Radio, RadioGroup,
  SimpleGrid,
  Select,
  Skeleton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Spinner,
   Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Switch,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Tag, TagIcon, TagLabel, TagCloseButton,
  Textarea,Tooltip,
  Text,useClipboard,useDisclosure, useThemes
} from '@chakra-ui/core'
import { Accordions,OneTest } from '../component/menuList/index'
import { selectAlert,AlertDialogs } from '../component/alert/index'
export default { title: 'Test' }

export const clickStyle= () => {
  return (
  <ThemeProvider>
    <Accordions/>
  </ThemeProvider>
)
}
export const clickAkill= () => {
  return (
  <ThemeProvider>
     <Checkbox defaultIsChecked>Checkbox</Checkbox>
  </ThemeProvider>
)
}
export const greenCheckbox=()=>{
	return(
	  <ThemeProvider>
		<Stack spacing={10} isInline>
		  <Checkbox variantColor="red" defaultIsChecked>
			Checkbox
		  </Checkbox>
		  <Checkbox variantColor="green" defaultIsChecked>
			Checkbox
		  </Checkbox>
		</Stack>
    </ThemeProvider>
	)
	
}

export const greenAvatar=()=>{
	return(
	  <ThemeProvider>
		<Stack isInline>
		  <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
		  <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
		  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
		  <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
		  <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
		  <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
		  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
		</Stack>
    </ThemeProvider>
	)
	
}
export const greenAvataaar=()=>{
	return(
	  <ThemeProvider>
		<AspectRatioBox maxW="400px" ratio={4 / 3}>
		  <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
		</AspectRatioBox>
    </ThemeProvider>
	)
	
}
export const FrenBadge=()=>{
	return(
	  <ThemeProvider>
		<Stack isInline>
		  <Badge>Default</Badge>
		  <Badge variantColor="green">Success</Badge>
		  <Badge variantColor="red">Removed</Badge>
		  <Badge variantColor="purple">New</Badge>
		</Stack>
    </ThemeProvider>
	)
}
export const MingBox=()=>{
	return(
	  <ThemeProvider>
		<Box bg="tomato" w="100%" p={4} color="white">
		  This is the Box
	  </Box>
    </ThemeProvider>
	)
}
export const MingBreadcrumb=()=>{
	return(
	  <ThemeProvider>
		<Box bg="tomato" w="100%" p={4} color="white">
		  This is the Box
			  </Box><Breadcrumb>
		  <BreadcrumbItem>
			<BreadcrumbLink href="#">Home</BreadcrumbLink>
		  </BreadcrumbItem>

		  <BreadcrumbItem>
			<BreadcrumbLink href="#">Docs</BreadcrumbLink>
		  </BreadcrumbItem>

		  <BreadcrumbItem isCurrentPage>
			<BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
		  </BreadcrumbItem>
		</Breadcrumb>
    </ThemeProvider>
	)
}

export const MingButton=()=>{
	return(
	 <ThemeProvider>
	     <Button variantColor="green">Button</Button>
	 </ThemeProvider>
	)
}
export const MingCircularProgress=()=>{
	return(
	 <ThemeProvider>
	    <CircularProgress value={80} />
	 </ThemeProvider>
	)
}
export const MingCloseButton=()=>{
	return(
	 <ThemeProvider>
	   <Stack isInline spacing={6}>
		  <CloseButton size="sm" />
		  <CloseButton size="md" />
		  <CloseButton size="lg" />
		</Stack>
	 </ThemeProvider>
	)
}
export const MingCode=()=>{
	return(
	 <ThemeProvider>
	  <Stack isInline>
		  <Code children="console.log(welcome)" />
		  <Code variantColor="red" children="var chakra = 'awesome!'" />
		  <Code variantColor="yellow" children="npm install chakra" />
	 </Stack>
	 </ThemeProvider>
	)
}
export const MingCollapse=()=>{
	 const [show, setShow] = React.useState(false);
     const handleToggle = () => setShow(!show);

	return(
	 <ThemeProvider>
	     <Button variantColor="blue" onClick={handleToggle}>
          Toggle
		  </Button>
		  <Collapse mt={4} isOpen={show}>
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
			terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
			labore wes anderson cred nesciunt sapiente ea proident.
		  </Collapse>
	 </ThemeProvider>
	)
}
export const MingControlBox=()=>{
	return(
	 <ThemeProvider>
	    <label>
		  {/* This is the sibling input, it's visually hidden */}
		  <VisuallyHidden as="input" type="checkbox" defaultChecked />

		  {/* This is the control box with a check icon as children */}
		  <ControlBox
			borderWidth="1px"
			size="24px"
			rounded="sm"
			_checked={{ bg: "green.500", color: "white", borderColor: "green.500" }}
			_focus={{ borderColor: "green.600", boxShadow: "outline" }}
		  >
			<Icon name="check" size="16px" />
		  </ControlBox>

		  {/* You can pass additional text */}
		  <Box as="span" verticalAlign="top" ml={3}>
			Checkbox Label
		  </Box>
		</label>
	 </ThemeProvider>
	)
}
export const MingDivider=()=>{
	return(
	 <ThemeProvider>
	   <Box>
		  <span>Part 1</span>
		  <Divider borderColor="red.200" />
		  <span>Part 2</span>
		</Box>
	 </ThemeProvider>
	)
}
export const MingDrawer=()=>{
	 const [size, setSize] = React.useState("md");
     const { isOpen, onOpen, onClose } = useDisclosure();
	 const handleClick = newSize => {
			setSize(newSize);
			onOpen();
		  };
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
	return(
	 <ThemeProvider>
	    {sizes.map(size => (
        <Button
          onClick={() => handleClick(size)}
          type="button"
          key={size}
          m={4}
        >{`Open ${size} Drawer`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            {size === "full"
              ? `You're trapped 😆, refresh the page to leave`
              : null}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
	 </ThemeProvider>
	)
}
export const MingEditable=()=>{
	return(
	 <ThemeProvider>
	    <Editable defaultValue="Take some chakra">
		  <EditablePreview />
		  <EditableInput />
		</Editable>
	 </ThemeProvider>
	)
}
export const MingFlex=()=>{
	 const [value, setValue] = React.useState("Hello world");
     const { onCopy, hasCopied } = useClipboard(value);
	return(
	 <ThemeProvider>
	 <>
	  <Flex mb={2}>
        <Input value={value} isReadOnly placeholder="Welcome" />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview w="100%" />
        <EditableInput />
      </Editable>
	  </>
	 </ThemeProvider>
	)
}
export const MingFormControl=()=>{
	return(
	 <ThemeProvider>
	    <FormControl>
		  <FormLabel htmlFor="email">Email address</FormLabel>
		  <Input type="email" id="email" aria-describedby="email-helper-text" />
		  <FormHelperText id="email-helper-text">
			We'll never share your email.
		  </FormHelperText>
		</FormControl>
	 </ThemeProvider>
	)
}
export const MingGrid=()=>{
	return(
	 <ThemeProvider>
	   <Grid templateColumns="repeat(5, 1fr)" gap={6}>
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		  <Box w="100%" h="10" bg="blue.500" />
		</Grid>
	 </ThemeProvider>
	)
}
export const MingHeading=()=>{
	return(
	 <ThemeProvider>
	   <Stack spacing={3}>
	  <Heading as="h1" size="2xl">
		In love with React & Next
	  </Heading>
	  <Heading as="h2" size="xl">
		In love with React & Next
	  </Heading>
	  <Heading as="h3" size="lg">
		In love with React & Next
	  </Heading>
	  <Heading as="h4" size="md">
		In love with React & Next
	  </Heading>
	  <Heading as="h5" size="sm">
		In love with React & Next
	  </Heading>
	  <Heading as="h6" size="xs">
		In love with React & Next
	  </Heading>
	</Stack>
	 </ThemeProvider>
	)
}
export const MingIcons=()=>{
	return(
	 <ThemeProvider>
	  <Stack isInline>
	  {/* Default size is 1em => 16px */}
	  <Icon name="phone" />

	  {/* Use the `size` prop to change the icon size */}
	  <Icon name="check-circle" size="24px" />

	  {/* Use the `color` prop to change the icon color */}
	  <Icon name="warning" size="32px" color="red.500" />
	</Stack>
	 </ThemeProvider>
	)
}
export const MingImage=()=>{
	return(
	 <ThemeProvider>
	   <Stack isInline>
		  <Image
			size="100px"
			objectFit="cover"
			src="https://bit.ly/sage-adebayo"
			alt="Segun Adebayo"
		  />
		  <Image
			size="150px"
			objectFit="cover"
			src="https://bit.ly/dan-abramov"
			alt="Dan Abramov"
		  />
		  <Image size="200px" src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
		</Stack>
	 </ThemeProvider>
	)
}
export const MingInput=()=>{
	return(
	 <ThemeProvider>
	  <Stack spacing={3}>
		  <Input placeholder="large size" size="lg" />
		  <Input placeholder="default size" size="md" />
		  <Input placeholder="small size" size="sm" />
		</Stack>
	 </ThemeProvider>
	)
}
export const MingLink=()=>{
	return(
	 <ThemeProvider>
	   <Link href="https://chakra-ui.com" isExternal>
		  Chakra Design system <Icon name="external-link" mx="2px" />
		</Link>
	 </ThemeProvider>
	)
}
export const MingList=()=>{
	return(
	 <ThemeProvider>
	    <List styleType="disc">
		  <ListItem>Lorem ipsum dolor sit amet</ListItem>
		  <ListItem>Consectetur adipiscing elit</ListItem>
		  <ListItem>Integer molestie lorem at massa</ListItem>
		  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
		</List>
	 </ThemeProvider>
	)
}
export const MingMenu=()=>{
	return(
	 <ThemeProvider>
	   <Menu>
		  <MenuButton as={Button} rightIcon="chevron-down">
			Actions
		  </MenuButton>
		  <MenuList>
			<MenuItem>Download</MenuItem>
			<MenuItem>Create a Copy</MenuItem>
			<MenuItem>Mark as Draft</MenuItem>
			<MenuItem>Delete</MenuItem>
			<MenuItem as="a" href="#">
			  Attend a Workshop
			</MenuItem>
		  </MenuList>
		</Menu>
	 </ThemeProvider>
	)
}
export const MingModal=()=>{
	const { isOpen, onOpen, onClose } = useDisclosure();
	return(
	 <ThemeProvider>
	   <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           服务协议 
          </ModalBody>
          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
	 </ThemeProvider>
	)
}
export const MingNumberInput=()=>{
	return(
	 <ThemeProvider>
	   <NumberInput defaultValue={15} min={10} max={20}>
		  <NumberInputField />
		  <NumberInputStepper>
			<NumberIncrementStepper />
			<NumberDecrementStepper />
		  </NumberInputStepper>
		</NumberInput>
	 </ThemeProvider>
	)
}
export const MingPopover=()=>{
	return(
	 <ThemeProvider>
	    <Popover>
		  <PopoverTrigger>
			<Button>Trigger</Button>
		  </PopoverTrigger>
		  <PopoverContent zIndex={4}>
			<PopoverArrow />
			<PopoverCloseButton />
			<PopoverHeader>Confirmation!</PopoverHeader>
			<PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
		  </PopoverContent>
		</Popover>
	 </ThemeProvider>
	)
}
export const MingProgress=()=>{
	return(
	 <ThemeProvider>
	    <Progress hasStripe value={64} />
	 </ThemeProvider>
	)
}
export const MingPseudoBox=()=>{
	return(
	 <ThemeProvider>
	    <PseudoBox
		  as="button"
		  color="blue.700"
		  fontWeight="semibold"
		  py={2}
		  px={4}
		  borderWidth="1px"
		  borderColor="blue.500"
		  rounded="md"
		  _hover={{ bg: "blue.500", color: " white" }}
		  _focus={{ boxShadow: "outline" }}
		>
		  Hover me
		</PseudoBox>
	 </ThemeProvider>
	)
}
export const MingRadio=()=>{
	 const [value, setValue] = React.useState("1");
	return(
	 <ThemeProvider>
	 <RadioGroup onChange={e => setValue(e.target.value)} value={value}>
			  <Radio value="1">First</Radio>
			  <Radio value="2">Second</Radio>
			  <Radio value="3">Third</Radio>
    </RadioGroup>	
	 </ThemeProvider>
	)
}
export const MingSimpleGrid=()=>{
	return(
	 <ThemeProvider>
	   <SimpleGrid columns={3} spacing={10}>
		  <Box bg="tomato" height="80px"></Box>
		  <Box bg="tomato" height="80px"></Box>
		  <Box bg="tomato" height="80px"></Box>
		  <Box bg="tomato" height="80px"></Box>
		  <Box bg="tomato" height="80px"></Box>
		</SimpleGrid>
	 </ThemeProvider>
	)
}
export const MingSelect=()=>{
	return(
	 <ThemeProvider>
	    <Select placeholder="Select option">
		  <option value="option1">Option 1</option>
		  <option value="option2">Option 2</option>
		  <option value="option3">Option 3</option>
		</Select>
	 </ThemeProvider>
	)
}
export const MingSkeleton=()=>{
	return(
	 <ThemeProvider>
	    <div>
		  <Skeleton height="20px" my="10px" />
		  <Skeleton height="20px" my="10px" />
		  <Skeleton height="20px" my="10px" />
		</div>
	 </ThemeProvider>
	)
}
export const MingSlider=()=>{
	return(
	 <ThemeProvider>
	    <Slider defaultValue={30}>
		  <SliderTrack />
		  <SliderFilledTrack />
		  <SliderThumb />
		</Slider>
	 </ThemeProvider>
	)
}
export const MingSpinners=()=>{
	return(
	 <ThemeProvider>
	  <Spinner color="red.500" />
	 </ThemeProvider>
	)
}
function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export const MingStack=()=>{
	return(
	 <ThemeProvider>
	    <Stack spacing={8}>
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
	 </ThemeProvider>
	)
}
export const MingSwitch=()=>{
	return(
	 <ThemeProvider>
	    <Flex justify="center" align="center">
		  <FormLabel htmlFor="email-alerts">Enable email alerts?</FormLabel>
		  <Switch id="email-alerts" />
		</Flex>
	 </ThemeProvider>
	)
}
export const MingTabs=()=>{
	return(
	 <ThemeProvider>
	   <Tabs>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
	 </ThemeProvider>
	)
}
export const MingTag=()=>{
	return(
	 <ThemeProvider>
	  <Stack spacing={4} isInline>
		  {["sm", "md", "lg"].map(size => (
			<Tag size={size} key={size} variantColor="gray">
			  Gray
			</Tag>
		  ))}
		</Stack>
	 </ThemeProvider>
	)
}
export const MingText=()=>{
	return(
	 <ThemeProvider>
	   <Stack spacing={3}>
		  <Text fontSize="6xl">In love with React & Next</Text>
		  <Text fontSize="5xl">In love with React & Next</Text>
		  <Text fontSize="4xl">In love with React & Next</Text>
		  <Text fontSize="3xl">In love with React & Next</Text>
		  <Text fontSize="2xl">In love with React & Next</Text>
		  <Text fontSize="xl">In love with React & Next</Text>
		  <Text fontSize="lg">In love with React & Next</Text>
		  <Text fontSize="md">In love with React & Next</Text>
		  <Text fontSize="sm">In love with React & Next</Text>
		  <Text fontSize="xs">In love with React & Next</Text>
		</Stack>
	 </ThemeProvider>
	)
}
export const MingTextarea=()=>{
	return(
	 <ThemeProvider>
	   <Textarea placeholder="Here is a sample placeholder" />
	 </ThemeProvider>
	)
}
export const MingToast=()=>{
	const toast = useToast();
	return(
	 <ThemeProvider>
	   <Button
      onClick={() =>
         toast({
          position: "bottom-left",
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
       Show Toast
    </Button>
	 </ThemeProvider>
	)
}
export const MingTooltip=()=>{
	return(
	 <ThemeProvider>
	   <Tooltip label="Welcome home" placement="bottom">
		  <Icon name="phone" />
		</Tooltip>
	 </ThemeProvider>
	)
}
export const MingUseClipboard=()=>{
	const [value, setValue] = React.useState("Hello world");
  const { onCopy, hasCopied } = useClipboard(value);
	return(
	 <ThemeProvider>
	     <Flex mb={2}>
        <Input value={value} isReadOnly placeholder="Welcome" />
        <Button onClick={onCopy} ml={2}>
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview w="100%" />
        <EditableInput />
      </Editable>
	  </ThemeProvider>
	)
}
export const MingUseDisclosure=()=>{
	const { isOpen, onOpen, onClose } = useDisclosure();
  const { onCopy, hasCopied } = useClipboard(null);
	return(
	 <ThemeProvider>
	     <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
	  </ThemeProvider>
	)
}
