import React from 'react'
import { ThemeProvider, CSSReset,theme } from '@chakra-ui/core'

export default ({ children })=>{
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    );

}