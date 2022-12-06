// import logo from './logo.svg';
import './App.css';
import React,{useState,SyntheticEvent} from'react';
import {Button,Card,Row,Col,Container,Navbar,Nav,Jumbotron,InputGroup,Form} from 'react-bootstrap';


function App() {
  let data = {"type":1,"state":1,"startdate":1670317980373,"enddate":1670317988570}
  const [type, setType] = useState();
  const [state, setState] = useState();
  const [year, setYear] = useState();
  // รูปที่  NAVBAR
  return (
    <div>
    <Navbar class="justify-content-between" bg="light" expand="jg">
    <Navbar.Brand href='/'> 
      DMC-REPORT
    </Navbar.Brand>
    </Navbar>
  <Card>
    <div class="container-fluid pt-4 px-4">
    <InputGroup className="mb-2">
        <InputGroup.Text id="basic-addon1">ประเภท</InputGroup.Text>
        <Form.Select aria-label="Default select example">

      <option value="1">ใบอนุญาต</option>
      <option value="2">หนังสือรับรอง</option>
    </Form.Select>
      </InputGroup>
      <InputGroup className="mb-4">
      <InputGroup.Text id="basic-addon1">สถานะ</InputGroup.Text>
      <Form.Select aria-label="Default select example">
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

      <InputGroup className="mb-2">
      <InputGroup.Text id="basic-addon1">ปี</InputGroup.Text>
      <Form.Select aria-label="Default select example">
      <option value="0" selected="">ปี</option>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
   
      </Form.Select>
      </InputGroup>
    </div>

  </Card>
    </div>
  );
}

export default App;
