import "./infografis.scss";
import ReactECharts from 'echarts-for-react';
import { IoIosPeople } from "react-icons/io";
import { ImMan, ImWoman } from "react-icons/im";

const Infografis = () => {
    const option = {
        color: [
            "#3EB7A1",
            "#F4C14F",
            "#E15E54"
        ],
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 27385, name: 'Jumlah Penduduk'},
                    {value: 14040, name: 'Jumlah Perempuan'},
                    {value: 13345, name: 'Jumlah Laki - Laki'}
                ]
            }
        ]
    };

    return (
        <div className='infografis'>
            <div className="row">
                <div className="infografis-chart col-5">
                    <ReactECharts 
                        option={option} 
                    />
                </div>
                <div className="card-infografis col-7">
                    <div>
                        <p className='card-infografis-heading'>Keterangan</p>
                        <ul className='card-infografis-check'>
                            <li><IoIosPeople 
                                className='card-infografis-check-item' 
                                color='#3EB7A1' 
                                size='30px'
                                /> 
                                    Jumlah Penduduk
                            </li>
                            <li><ImMan 
                                className='card-infografis-check-item' 
                                color='#E15E54' 
                                size='30px'
                                /> 
                                    Jumlah Laki - Laki
                            </li>
                            <li><ImWoman 
                                className='card-infografis-check-item' 
                                color='#F4C14F' 
                                size='30px'
                                /> 
                                    Jumlah Perempuan
                            </li>
                            <li>
                                <p className='card-infografis-footer'>note: data update mei 2021</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infografis
