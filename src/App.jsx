import React from 'react'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo, { SectionTwo2 } from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Review from './components/Review'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="internship" element={<Internship />} />
        <Route path="certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

function Internship() {

  const education = [
    {
      eng: "Quality Assurance and Education Standards",
      thai: "การประเมินคุณภาพและมาตรฐานการศึกษา",
      faculty: "วิทยาลัยอาชีวศึกษาเชียงราย (ปวส.)",
      imgStandOut: [
        "https://lh6.googleusercontent.com/5LxN6zHr7kBxUQXa8nMaR-m1PeoNuwnrxPserqF1IbfFeZ_t9e2lE9WuyDJuF_OlRDo=w1400",
      ],
      potition: "right",
      link: "https://cvc.ac.th/cvc2011/?usid=11050111115303901"
    },
    {
      eng: "Information Center",
      thai: "งานศูนย์ข้อมูลสารสนเทศ",
      faculty: "วิทยาลัยอาชีวศึกษาเชียงราย (ปวช.)",
      imgStandOut: [
        "https://lh5.googleusercontent.com/eyjdilsxI1NLLF1slGkRnrNrHckZDXwB5E4ZBrrfMFTpJwm3QK51yMcjfcIJQyQ2DpQ=w1400",
        "https://lh5.googleusercontent.com/11dtZFIuU78iwdOMjGJjYF8RD8Xy2vJtPBBbcLx-AbcbdmnGKkXlO65aNqIOCV3nYWw=w1400",
        "https://lh4.googleusercontent.com/GK1fcWQOwjWAZoqAzoeT_A1gzLWborMZZ0RiYOCH_cFLozrwnuVdyqXqiP_93wMH3nY=w1400",
        "https://lh6.googleusercontent.com/unaTkwMFqMkXvt7sbbzNxt0n6YiWaYAJ6keoQELe3QWklPULg8hRvNnOv_YLBCQ1PKc=w1400",
        "https://lh5.googleusercontent.com/fXUhhQk147e0hQ_w0XzrDfsvk-Ga1MqHnxsJXf6kP_wOqfN5r_0mdp-7qQ_gjpFMaPI=w1400",
        "https://lh4.googleusercontent.com/Hx1iX6pO5cDveN7zlkb41cNCditGvJ80xVIX4iiDmxDX1rRiqCznLCwjoRcPFowC-zs=w1400"
      ],
      potition: "left",
      link: "https://cvc.ac.th/cvc2011/?usid=11050111115303901"
    },
  ]
  return (
    <div>
      <Header title={"I N T E R N S H I P"} />
      {education.map((item, index) => (
        <SectionTwo2
          key={index}
          eng={item.eng}
          thai={item.thai}
          faculty={item.faculty}
          potition={item.potition}
          imgStandOut={item.imgStandOut}
        />
      ))}
      <Footer />
    </div>
  )
}

function Certificate() {
  const certificates = [
    {
      eng: "ทักษะเทคโนโลยีเครือข่าย ระดับปวส.",
      thai: "🥈 รองชนะเลิศอันดับ 4",
      faculty: "ระดับชาติ ครั้งที่ 30 ประจำปี 2564",
      imgStandOut: "https://lh3.googleusercontent.com/wXyaPTQIUvRQD53cGKaD0OFnLAWEBWkt2qOnAUAXB0b82DBOpkMMDmPM6Tlt-Hp7V2w=w1400",
      potition: "right",
      link: "https://drive.google.com/drive/u/0/folders/19-54Wnd9ZebEkT4yafTwcY1rom23iSv5?fbclid=IwAR3qt5gvkc2-EPO775mo65HWhv-RpGWW8XiQ44jK3aVQzSn3qW1WKXSgdzQ"
    },
    {
      eng: "ทักษะการเขียนโปรแกรมคอมพิวเตอร์ ระดับปวช.",
      thai: "🏅 รองชนะเลิศอันดับ 1",
      faculty: "ระดับชาติ ครั้งที่ 29 ประจำปี 2562",
      imgStandOut: "https://lh3.googleusercontent.com/3taWxUj8GHczkk5Mu_VQL16T0Lcpk8ly6ACochgaRb3dwELKmwqjNPe2DlMkmA832rc=w1400",
      potition: "left",
      link: "https://www.cvc.ac.th/"
    },
    {
      eng: "สิ่งประดิษฐ์ด้านนวัตกรรมซอฟต์แวร์และระบบสมองกลฝังตัว",
      thai: "เครื่องกดเจลแอลกอฮอล์และระบบเฝ้าระวังอัจฉริยะ (Smart gel System)",
      faculty: "🥈 รางวัลชมเชย เหรียญเงิน ระดับชาติ ประจำปี 2564",
      imgStandOut: "https://lh5.googleusercontent.com/l1UQRFv-WahDbTxSSpDYLOBWJxdSI1AyfZhRkijn25AvOMyYW1wMWwACYDLVm3EVJmE=w1400",
      potition: "right",
      link: "http://thaiinvention.net/detail.php?p=cHJvamVjdF9pZD02NTAxOSZjZmdfaWQ9NDAmY29tcGV0X2lkPTM=&cond=JnNfY29tcGV0PTEmMTUyNTY3PTE1MjU2NybguKrguKHguIrguLLguKIg4Lia4Lij4Li0PeC4quC4oeC4iuC4suC4oiDguJrguKPguLQ="
    },
    {
      eng: "สิ่งประดิษฐ์ด้านนวัตกรรมซอฟต์แวร์และระบบสมองกลฝังตัว",
      thai: "แอปพลิเคชันระบบสนับสนุนการตัดสินใจสำหรับงานฟาร์มปลา",
      faculty: "🏆 ชนะเลิศ ระดับเหรียญทอง",
      imgStandOut: "https://lh4.googleusercontent.com/jtmrqw-GIdQjpRO8Jgwdp9gbtJFCfwsUzrBRjlaamBsyC2qWjKi1fSS8-3ojIVGICdU=w1400",
      potition: "left",
      link: "http://thaiinvention.net/detail.php?p=cHJvamVjdF9pZD01NDAxMyZjZmdfaWQ9MzYmY29tcGV0X2lkPTI=&cond=JnNfY29tcGV0PTEmMTUyNTY3PTE1MjU2NybguKrguKHguIrguLLguKIg4Lia4Lij4Li0PeC4quC4oeC4iuC4suC4oiDguJrguKPguLQ="
    },
    {
      eng: "certificate collection",
      thai: "📦 แหล่งรวมเกียรติบัตรอีกมากมาย",
      faculty: "",
      imgStandOut: "https://img.freepik.com/premium-vector/trophy-cup-vector-flat-pattern-award-sign-isolated-white-background_100456-6135.jpg?w=720",
      potition: "right",
      link: "https://drive.google.com/drive/folders/1YzWG1NDmF7-LA5uKTxZX34GnBNPuOfng?usp=sharing"
    }
  ]
  return (
    <div>
      <Header title={"C E R T I F I C A T E S"} />
      {certificates.map((item, index) => (
        <SectionTwo
          key={index}
          eng={item.eng}
          thai={item.thai}
          link={item.link}
          faculty={item.faculty}
          potition={item.potition}
          imgStandOut={item.imgStandOut}
        />
      ))}
      <Footer />
    </div>
  )
}

function Education() {
  const education = [
    {
      eng: "KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK",
      thai: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ",
      faculty: "คณะเทคโนโลยีและการจัดการอุตสาหกรรม",
      imgStandOut: "https://www.print3dd.com/wp-content/uploads/2017/10/FITM-LOGO-EN-COLOR.png",
      potition: "right",
      link: "https://kmutnb.ac.th/faculty-and-agencies/prachin-campus/faculty-of-Industrial-technology-and-management.aspx"
    },
    {
      eng: "Chiangrai Vocational College",
      thai: "วิทยาลัยอาชีวศึกษาเชียงราย",
      faculty: "สาขาวิชาเทคโนโลยีสารสนเทศ",
      imgStandOut: "https://www.cvc.ac.th/assets/img/131009/cvc988.jpg",
      potition: "left",
      link: "https://www.cvc.ac.th/"
    },
    {
      eng: "daroonrajwittaya shcool",
      thai: "โรงเรียนดรุณราษฎร์วิทยา",
      faculty: "อนุบาลศึกษา - มัธยมศึกษาตอนปลาย",
      imgStandOut: "https://www.daroonrajwittaya.ac.th/schoolmin/gallery/logo/school_logo.png?1666124835",
      potition: "right",
      link: "https://www.daroonrajwittaya.ac.th/"
    }
  ]
  return (
    <div>
      <Header title={"E D U C A T I O N"} />
      {education.map((item, index) => (
        <SectionTwo
          key={index}
          eng={item.eng}
          thai={item.thai}
          faculty={item.faculty}
          potition={item.potition}
          imgStandOut={item.imgStandOut}
        />
      ))}
      <Footer />
    </div>
  )
}

function Skills() {
  return (
    <div>
      <Header title={"S K I L L S"} />
      <Review />
      <Footer />
    </div>
  )
}

function Main() {

  return (
    <div>
      <Header title={"W E L C O M E"} />
      <SectionOne />
      {/* <SectionTwo /> */}
      {/* <SectionThree /> */}
      {/* <Review /> */}
      {/* <Gallery /> */}
      <Footer />
    </div>
  )
}
