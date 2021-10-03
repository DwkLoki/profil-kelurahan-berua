import "./footer.scss";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <div className='footer py-5'>
            <div className="container">
                <div className="row footer-content">
                    <div className="col-lg-6 col-12 footer-left-side">
                        <ul className="kelurahan-info m-0">
                            <li className="kelurahan-info-list">
                                <div className="row">
                                    <div className="col-1 p-0 d-flex justify-content-center align-items-center"><HiOutlineLocationMarker size="25px" /></div>
                                    <div className="col-9 kelurahan-info-list-street">Jl. Berua 1 Komp. KNPI Blok A3 No.3, Paccerakkang Kota Makassar - Sulawesi Selatan 90241</div>
                                </div>
                            </li>
                            <li className="kelurahan-info-list">
                                <div className="row">
                                    <div className="col-1 p-0 d-flex justify-content-center align-items-center"><FiPhone size="25px" /></div>
                                    <div className="col-11">0898-3456-7899</div>
                                </div>
                            </li>
                            <li className="kelurahan-info-list">
                                <div className="row">
                                    <div className="col-1 p-0 d-flex justify-content-center align-items-center"><HiOutlineMail size="25px" /></div>
                                    <div className="col-11">official@berua.com</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-12 footer-right-side">
                        <p className="footer-right-side-header" style={{ fontWeight: "700" }}>Tentang Kelurahan Berua</p>
                        <p className="footer-right-side-content my-0">Berua adalah salah satu kelurahan di kecamatan Biringkanaya,
                        Makassar, Sulawesi Selatan, Indonesia.
                        Kelurahan ini dimekarkan dari Kelurahan Paccerakkang
                        pada pemekaran daerah di Kota Makassar tahun 2015.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer