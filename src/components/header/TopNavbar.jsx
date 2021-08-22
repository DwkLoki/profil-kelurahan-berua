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
                    <img src={beruaIcon} style={{width: '45px'}} alt="Icon" />
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
                            <NavLink to="/provinsi" className="btn-navbar top-navbar-nav" tag={RRNavLink}>Cek Lokasi !</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default TopNavbar