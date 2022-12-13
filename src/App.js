
import ReactDOM from'react-dom';
import './App.css';
import React,{useState,SyntheticEvent,useEffect} from'react';
import {Button,Card,Row,Col,Container,Navbar,Nav,Jumbotron,InputGroup,Form} from 'react-bootstrap';
import LineChart from './component/LineChart';


import 'chart.js/auto'; 

function App() {
  let data_mock = {"type":1,"state":1,"year":"2022"}
  const options = {
    responsive: true,
    maintainAspectRatio:false
  };
  const labels = [
    "ม.ค.",
    "ก.พ",
    "มี.ค.",
    "เม.ย",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
    "ม.ค."
  ];
  
let LineData = {labels,datasets:[
  {
    label: "ขาย",
    fill: false,
    backgroundColor: "rgba(235, 22, 22, .7)",
    borderColor: "rgba(235, 22, 22, .7)",
    borderWidth: 2,
    pointBorderColor: "rgb(255, 255, 255, 1)",
    data: [8, 80, 100, 200, 100, 90, 10, 5, 23, 45, 65, 78, 50]
  },
  {
    label: "ครอบครอง",
    fill: false,
    backgroundColor: "rgba(0, 0, 255)",
    borderColor: "rgba(0, 0, 255)",
    borderWidth: 2,
    pointBorderColor: "rgb(255, 255, 255, 1)",
    data: [60, 60, 15, 51, 6, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    label: "นำเข้า",
    fill: false,
    backgroundColor: "rgba(60, 179, 113)",
    borderColor: "rgba(60, 179, 113)",
    borderWidth: 2,
    pointBorderColor: "rgb(255, 255, 255, 1)",
    data: [20, 15, 15, 51, 60, 55, 45, 51, 80, 87, 53, 23]
  },
  {
    label: "นำผ่าน",
    fill: false,
    backgroundColor: "rgb(255, 165, 0)",
    borderColor: "rgb(255, 165, 0)",
    borderWidth: 2,
    pointBorderColor: "rgb(255, 255, 255, 1)",
    data: [15, 15, 15, 51, 6, 53, 9, 53, 40, 53, 60, 53]
  },
  {
    label: "ผลิต",
    fill: false,
    backgroundColor: "rgb(238, 130, 238)",
    borderColor: "rgb(238, 130, 238)",
    borderWidth: 2,
    pointBorderColor: "rgb(255, 255, 255, 1)",
    data: [16, 15, 15, 51, 6, 51, 52, 53, 54, 56, 59, 0]
  },
  {
    label: "ส่งออก",
    fill: false,
    backgroundColor: "rgba(165, 55, 253, 1)",
    borderColor: "rgba(165, 55, 253, 1)",
    borderWidth: 2,
    pointBorderColor: "rgb(255, 255, 255, 1)",
    data: [16, 15, 25, 51, 6, 15, 25, 35, 45, 15, 65, 6]
  }
]};


  const [type, setType] = useState();
  const [state, setState] = useState();
  const [year, setYear] = useState();
  const [ChartData,setChartData] = useState(LineData);

const SerachData =  async() => {
  console.log({type,state,year})
  let data_res

  let Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBpZCI6IjAxIiwicmVtb3RlYWRkciI6IjE3Mi4xNy4wLjEiLCJ1aWQiOjEsInVuYW1lIjoi4Lic4Li54LmJ4LiU4Li54LmB4Lil4Lij4Liw4Lia4LiaIiwiaXNzIjoxNjcwMzkzOTYzMTIxLCJleHAiOjE2NzA0NzU1OTkwMDB9.vvcDZeSunUkFPLsa8xyLjc7MAg1ShdngU7RtIQXwBhk=';

  // let url ='http://192.168.33.54:9877/DmscReportGateway/api/v1/report/01';
  let url = 'http://localhost:3005/reportData';
  const response =  await fetch(url,{
    method:'POST', 
    mode: 'cors',
    body: data_mock,
    headers:{ 
      'content-type': 'application/json;UTF-8',
      'Authorization':Authorization
    }
  }).then(response =>response.json().then(data=>({data: data,
        status: response.status})).then(res =>{
          console.log(res);
          data_res = res.data;
          console.log(data_res.datasets);
      
          setChartData({labels,datasets:data_res.datasets})
        }));
     
      
}

  return (
    <div>
    <Navbar className="justify-content-between" bg="light" expand="jg">
    <Navbar.Brand> 
      DMC-REPORT
    </Navbar.Brand>
    </Navbar>
    <br/>
    <br/>
  <div className="card col-md-8 center">
  <div className="container">
  <div className="row">
    <div className="col">
 <br/>
      <InputGroup className="mb-2">
        <InputGroup.Text id="basic-addon1">ประเภท</InputGroup.Text>
        <Form.Select aria-label="Default select example" id="type" name="type" onChange={e=>setType(parseInt(e.target.value))}>
        <option value="0" selected="">เลือกประเภท</option>
      <option value="1">ใบอนุญาต</option>
      <option value="2">หนังสือรับรอง</option>
    </Form.Select>
      </InputGroup>
    </div>
    <div className="col">
    <br/>
      <InputGroup className="mb-4">
      <InputGroup.Text id="basic-addon1">สถานะ</InputGroup.Text>
      <Form.Select aria-label="Default select example" id="state" name="state" onChange={e=>setState(parseInt(e.target.value))}>
      <option value="0" selected="">รอยืนเอกสาร</option>
      <option value="1">ยื่นคำขอ</option>
      <option value="2">หลักฐานในการยื่นไม่ครบถ้วน</option>
      <option value="3">แบบตรวจสถานที่ไม่ครบถ้วน</option>
      <option value="4">รอพิจารณาเอกสารลักษณะของสถานที่ ครั้งที่ 1</option>
      <option value="5">รอผลออกตรวจสอบสถานที่</option>
      <option value="6">รอพิจารณาอนุมัติ</option>
      <option value="7">รอผู้ประกอบการชำระค่าธรรมเนียม</option>
      <option value="8">อนุมัติคำขอเรียบร้อย</option>
      </Form.Select>
      </InputGroup>
    </div>
    <div className="col">
    <br/>
      <InputGroup className="mb-2">
      <InputGroup.Text id="basic-addon1">ปี</InputGroup.Text>
      <Form.Select aria-label="Default select example" id="year" name="year" onChange={e=>setYear(e.target.value)}>
      <option value="0" selected="">ปี</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
   
      </Form.Select>
      </InputGroup>
    </div>
    <div className="col">
    <br/>
      <Button onClick={SerachData}>ค้นหาข้อมูล</Button>
    </div>
  </div>
</div>
  </div>


  <div className="container">
    <div className="row" id="chartID">

    <LineChart options={options} ChartData={ChartData}/>
    </div>
   
      </div>
    </div> 
 
  
  );
}



export default App;

