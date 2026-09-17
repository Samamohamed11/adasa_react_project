import { Outlet } from 'react-router-dom'
import NavbarComp from './NavbarComp'
import FooterComp from './FooterComp'

export default function Layout() {
  return (
    <>

    <NavbarComp/>

    <Outlet/>

    <FooterComp/>
    </>
  )
}
