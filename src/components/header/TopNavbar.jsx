import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
// import beruaLogo from "../../assets/img/kelurahan-berua-logo.svg";
import beruaIcon from "../../assets/img/kota-makassar.png";
import "./topNavbar.scss";


const TopNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='top-navbar sticky-top'>
            <Navbar className="top-navbar-content container" light expand="lg">
                <NavbarBrand href="/">
                    <img src={beruaIcon} style={{ width: '45px' }} alt="Icon" />
                    {/* <img className='top-navbar-content-logo' src={beruaLogo} alt="Logo" /> */}
                    <span className='top-navbar-content-logo'>Kelurahan Berua</span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="justify-content-between">
                    <Nav navbar />
                    <Nav navbar>
                        <NavItem>
                            <NavLink to="/" className='top-navbar-nav' tag={RRNavLink}>Beranda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                href="https://www.google.com/maps/place/Kantor+Lurah+Berua/@-5.1154148,119.5183811,17z/data=!3m1!4b1!4m5!3m4!1s0x2dbefb67be75eecd:0xb8e9c97cbc69d70c!8m2!3d-5.1154148!4d119.5205698"
                                className="btn-navbar top-navbar-nav">
                                Cek Lokasi !
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar