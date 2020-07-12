import React, {useState, useRef,useEffect} from 'react'
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
    Button, Menu, MenuItem, MenuButton, Image, MenuList,Input, useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,

} from '@chakra-ui/core'
//输出
export default {title: 'ButtonEvent'}

//定义函数 story中的一个部份
export const withEmojidfe = () => {
    return (
        <ThemeProvider>
            <Button>
            <span role='img' aria-label='so cool'>
              😀 😎 👍 💯
            </span>
            </Button>
        </ThemeProvider>
    )
}
export const MenuAlert = () => {
    return (
        <ThemeProvider>
            <Menu>
                <MenuButton as={Button}>
                    新增栏目
                </MenuButton>
                <MenuList>
                    <MenuItem minH="48px">
                        <Image
                            size="2rem"
                            rounded="full"
                            src="https://placekitten.com/100/100"
                            alt="Fluffybuns the destroyer"
                            mr="12px"
                        />
                        <span>Fluffybuns the Destroyer</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                        <Image
                            size="2rem"
                            rounded="full"
                            src="https://placekitten.com/120/120"
                            alt="Simon the pensive"
                            mr="12px"
                        />
                        <span>Simon the pensive</span>
                    </MenuItem>
                </MenuList>
            </Menu>
        </ThemeProvider>
    )
}
//useState必须要执行完react整个生命周期才会获取最新值
// 不能用useState 会导致数据更新不及时  useRef
export const ButtonDrawerAdd = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef();
    const [arrs,setArrs]=useState([])
    const TextInput =(props,ref,placeholder) => {
        return <input ref={ref} placeholder={placeholder}></input>
    }
    return (
        <ThemeProvider>
            <Button  variantColor="teal" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="top"
                onClose={onClose}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." ref={btnRef}  />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button color="blue" onClick={()=>{ setArrs([...arrs,btnRef.current.value])
                        console.log(arrs)}}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </ThemeProvider>
    )
}
export const InputRefArrayAlert = () => {
    const btnRef = useRef(null);
    const show=[]
    return (
        <ThemeProvider>
            <Input placeholder="Type here..." ref={btnRef}  />
            <Button onClick={()=>{show.push(btnRef.current.value );console.log(show)}}  variantColor="green">Button</Button>
        </ThemeProvider>
    )
}

export const dataKaobei = () => {
    var arr = ['old', 1, true, null, undefined];
    // 浅拷贝 可用concat、slice返回一个新数组的特性来实现
    var new_arr1 = arr.concat();
    var new_arr2 = arr.slice();
    //对象整合
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    const returnedTarget = Object.assign(target, source);
    // expected output: Object { a: 1, b: 4, c: 5 }
    const btnRef = useRef(null);
    return (
        <ThemeProvider>
            <Input placeholder="Type here..." ref={btnRef}  />
            <Button onClick={()=>{show.push(btnRef.current.value );console.log(show)}}  variantColor="green">Button</Button>
        </ThemeProvider>
    )
}