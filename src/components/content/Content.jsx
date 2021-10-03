import "./content.scss";
import kelurahanIcon from "../../assets/img/kelurahan-icon.svg";
import strukturKel from "../../assets/img/struktur-organisasi.svg";
import rtIcon from "../../assets/img/icon-rt.svg";
import rwIcon from "../../assets/img/icon-rw.svg";
import distanceIcon from "../../assets/img/distance-icon.svg";
import Infografis from "./Infografis";
import { GiPathDistance } from "react-icons/gi";

const Content = () => {
    return (
        <div className="content">
            <div className="first-section" style={{backgroundColor: "white"}}>
                <div className="container">
                    <div className="row first-section-row py-5">
                        <div className="first-section-left col-lg-6 col-12 d-flex justify-content-center align-items-center">
                            <div className="first-section-left-desc">
                                <h1 className="first-section-title">
                                    Selamat Datang <br/>
                                    Website Kelurahan Berua
                                </h1>
                                <p className="first-section-subtitle">
                                    Dapatkan berbagai manfaat dari website profil kelurahan.   
                                    halaman website profil kelurahan memuat berbagai konten menarik
                                    dan penting untuk dibaca, mulai dari sejarah, struktur pemerintahan, 
                                    visi dan misi, sampai dengan infografis yang dimiliki oleh kelurahan berua
                                </p>
                            </div>
                        </div>
                        <div className="first-section-right col-6">
                            <div className="d-flex justify-content-center">
                                <img className="first-section-right-img" src={kelurahanIcon} alt="kelurahan-berua-icon" style={{width: "60%"}}/>
                            </div>
                        </div>
                    </div>     
                </div> 
            </div>

            <div className="second-section" style={{backgroundColor: "#fcf4e6"}}>
                <div className="container second-section-container py-5">
                    <div className="second-section-header header-for-section">
                        <h1 className="section-header">sejarah</h1>
                    </div>
                    <div className="second-section-content f18">
                        <p className="row" style={{textAlign: "justify"}} >
                            <div className="sejarah-content-first col-lg-6 col-12">
                                Kelurahan Berua adalah salah satu kelurahan di Kecamatan Biringkanaya, Kota Makassar, Provinsi Sulawesi Selatan. 
                                Kelurahan Berua memiliki kode wilayah 73.71.11.1009. Kelurahan Berua berasal dari kata Berua yang artinya baru.  
                                Dulu wilayah ini adalah hamparan lahan kosong/tanah lapang yang ditempati oleh beberapa orang dari luar Makassar. 
                                Khususnya orang dari Kabupaten Pangkep yang mencari lapangan pekerjaan. 
                                Lama kelamaan kawasan tersebut menjadi ramai dan menjadilah 
                                sebuah perkampungan <i><b>baru</b></i> (<i><b>baru</b></i> = <i><b>beru</b></i> dalam bahasa Makassar). 
                                Yang kemudian dikenal dengan nama Kampung Berua.
                            </div>
                            <div className="sejarah-content-second col-lg-6 col-12">
                                Sebelah Utara berbatasan dengan Kelurahan Daya dan Kelurahan Sudiang Raya, 
                                Sebelah Selatan berbatasan dengan Kelurahan Buntusu Kecamatan Tamalanrea, 
                                Sebelah Timur berbatasan dengan Kelurahan Paccerakkang dan Kelurahan Katimbang, 
                                Sebelah Barat berbatasan dengan Kelurahan Daya, Kelurahan Kapasa dan Kelurahan Tamanlanrea Kecamatan Tamalanrea
                            </div>
                        </p>
                    </div>
                </div>
            </div>

            <div className="third-section" style={{backgroundColor: "#E9F2F6"}}>
                <div className="container py-5">
                    <div className="third-section-header header-for-section">
                        <h1 className="section-header">struktur pemerintahan kelurahan</h1>
                    </div>
                    <div className="third-section-content">
                        <div className="third-section-img d-flex justify-content-center">
                            <img src={strukturKel} alt="Struktur organisasi kelurahan" style={{maxWidth: "100%"}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fourth-section" style={{backgroundColor: "#fcf4e6"}}>
                <div className="container py-5">
                    <div className="fourth-section-header header-for-section">
                        <h1 className="section-header">wilayah kelurahan berua</h1>
                    </div>
                    <div className="fourth-section-content">
                        <div className="row">
                            <div className="col-lg-4 col-12 d-flex justify-content-center text-center">
                                <div className="fourth-section-content-box">
                                    <img className="fourth-section-content-img" src={rtIcon} alt="icon rt"/>
                                    <h1 className="fourth-section-content-number">52</h1>
                                    <h4 className="fourth-section-content-string">Jumlah Rt</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 d-flex justify-content-center text-center">
                                <div className="fourth-section-content-box">
                                    <img className="fourth-section-content-img" src={rwIcon} alt="icon rw"/>
                                    <h1 className="fourth-section-content-number">8</h1>
                                    <h4 className="fourth-section-content-string">Jumlah Rw</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 d-flex justify-content-center text-center">
                                <div className="fourth-section-content-box">
                                    <img className="fourth-section-content-img" src={distanceIcon} alt="icon luas wilayah"/>
                                    <h1 className="fourth-section-content-number">270 Ha</h1>
                                    <h4 className="fourth-section-content-string">Luas Wilayah</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fifth-section" style={{backgroundColor: "white"}}>
                <div className="container py-5">
                    <div className="fifth-section-header header-for-section">
                        <h1 className="section-header">infografis penduduk</h1>
                    </div>
                    <div className="fifth-section-content d-flex justify-content-center">
                        <Infografis />
                    </div>
                </div>
            </div>

            <div className="sixth-section" style={{backgroundColor: "#E9F2F6"}}>
                <div className="container py-5">
                    <div className="sixth-section-header header-for-section">
                        <h1 className="section-header">visi & misi</h1>
                    </div>
                    <div className="sixth-section-content f18">
                        <p style={{textAlign: "center"}} >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Sint dolores optio nisi iste iure rerum, architecto 
                            voluptates nihil porro eligendi obcaecati mollitia labore hic. 
                            Harum ea ab autem! Porro, odio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
