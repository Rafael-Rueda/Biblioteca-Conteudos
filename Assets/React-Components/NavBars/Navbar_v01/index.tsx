import React from 'react'
import { MobileMenuProvider } from './Common/mobileconteudo'
import Navbar_v01_build from './Navbar_v01_build'

export default function Navbar_v01() {
    return (
        <MobileMenuProvider>
            <Navbar_v01_build />
        </MobileMenuProvider>
    )
}
