import "./content.scss";
import kelurahanIcon from "../../assets/img/kelurahan-icon.svg";
import strukturKel from "../../assets/img/struktur-organisasi.svg";
import Infografis from "./Infografis";

const Content = () => {
    return (
        <div className="content container">
            <div className="first-section row py-5">
                <div className="first-section-left col-6 d-flex justify-content-center align-items-center">
                    <div className="first-section-left-desc">
                        <h1 style={{fontWeight: "bold", fontSize: "50px"}}>Selamat Datang <br/>
                            Website Kelurahan Berua
                        </h1>
                        <p style={{lineHeight: "30px"}}>
                            Dapatkan berbagai manfaat dari website profil kelurahan. <br/>  
                            halaman website profil kelurahan memuat berbagai konten menarik<br/>
                            dan penting untuk dibaca, mulai dari sejarah, struktur pemerintahan,<br/> 
                            visi dan misi, sampai dengan infografis yang dimiliki oleh kelurahan berua<br/>
                        </p>
                    </div>
                </div>
                <div className="first-section-right col-6">
                    <div className="first-section-right-img d-flex justify-content-center">
                        <img src={kelurahanIcon} alt="kelurahan-berua-icon" style={{width: "60%"}}/>
                    </div>
                </div>
            </div>  

            <div className="second-section py-5">
                <div className="second-section-header">
                    <h1 className="section-header">sejarah</h1>
                </div>
                <div className="second-section-content py-5 f18">
                    <p className="row" style={{textAlign: "justify"}} >
                        <div className="col-6">
                            Kelurahan Berua adalah salah satu kelurahan di Kecamatan Biringkanaya, Kota Makassar, Provinsi Sulawesi Selatan. 
                            Kelurahan Berua memiliki kode wilayah 73.71.11.1009. Kelurahan Berua berasal dari kata Berua yang artinya baru.  
                            Dulu wilayah ini adalah hamparan lahan kosong/tanah lapang yang ditempati oleh beberapa orang dari luar Makassar. 
                            Khususnya orang dari Kabupaten Pangkep yang mencari lapangan pekerjaan. 
                            Lama kelamaan kawasan tersebut menjadi ramai dan menjadilah 
                            sebuah perkampungan <i><b>baru</b></i> (<i><b>baru</b></i> = <i><b>beru</b></i> dalam bahasa Makassar). 
                            Yang kemudian dikenal dengan nama Kampung Berua. 
                        </div>
                        <div className="col-6">
                            Sebelah Utara berbatasan dengan Kelurahan Daya dan Kelurahan Sudiang Raya, 
                            Sebelah Selatan berbatasan dengan Kelurahan Buntusu Kecamatan Tamalanrea, 
                            Sebelah Timur berbatasan dengan Kelurahan Paccerakkang dan Kelurahan Katimbang, 
                            Sebelah Barat berbatasan dengan Kelurahan Daya, Kelurahan Kapasa dan Kelurahan Tamanlanrea Kecamatan Tamalanrea
                        </div>
                    </p>
                </div>
            </div>

            <div className="third-section py-5">
                <div className="third-section-header">
                    <h1 className="section-header">struktur pemerintahan kelurahan</h1>
                </div>
                <div className="third-section-content py-5">
                    <div className="third-section-img d-flex justify-content-center">
                        <img src={strukturKel} alt="Struktur organisasi kelurahan" style={{maxWidth: "100%"}}/>
                    </div>
                </div>
            </div>

            <div className="fourth-section py-5">
                <div className="fourth-section-header">
                    <h1 className="section-header">visi & misi</h1>
                </div>
                <div className="fourth-section-content py-5 f18">
                    <p style={{textAlign: "center"}} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sint dolores optio nisi iste iure rerum, architecto 
                        voluptates nihil porro eligendi obcaecati mollitia labore hic. 
                        Harum ea ab autem! Porro, odio.
                    </p>
                </div>
            </div>

            <div className="fifth-section py-5">
                <div className="fifth-section-header">
                    <h1 className="section-header">infografis penduduk</h1>
                </div>
                <div className="fifth-section-content d-flex justify-content-center py-5">
                    <Infografis />
                </div>
            </div>

            <div className="sixth-section py-5">
                <div className="sixth-section-header">
                    <h1 className="section-header">wilayah kelurahan berua</h1>
                </div>
                <div className="sixth-section-content py-5 f18">
                    <p style={{textAlign: "center"}} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Sint dolores optio nisi iste iure rerum, architecto 
                        voluptates nihil porro eligendi obcaecati mollitia labore hic. 
                        Harum ea ab autem! Porro, odio.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Content
