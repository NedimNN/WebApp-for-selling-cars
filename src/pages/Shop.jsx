import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import carData from '../assets/data/carData'
import Helmet from '../components/Helmet/Helmet'
import CarItem from '../components/UI/CarItem'
import CommonSection from '../components/UI/CommonSection'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import '../styles/shop.css'

const Shop = () => {
  const options =[
    {value:'', text:'Sort by'},
    {value:'low', text:'Low to High'},
    {value:'high', text:'High to Low'}
  ];
  const location = useLocation();
  const [selected,setSelected] = useState(options[0].value);
  const [carsToLoad, setCarsToLoad] = useState(
    carData
  );
  const [s,setS] = useState("");
  const [condiCheckedState, setCondiCheckedState] = useState(
    new Array(2).fill(false)
  );
  const [brandCheckedState, setBrandCheckedState] = useState(
    new Array(8).fill(false)
  );
  const [bodyCheckedState, setBodyCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [fuelCheckedState, setfuelCheckedState] = useState(
    new Array(4).fill(false)
  );
  const [yearCheckedState, setyearCheckedState] = useState(
    new Array(4).fill(false)
  );
  if(window.search === "" && s === "stop"){
    setCarsToLoad(carData);
    setS("empty");
  }
  if(window.search === "" && s === "" && s !== "stop"){
    setCarsToLoad(carData);
    setS("empty");
  }
  if(window.search !== "" && s !== "go" && s !== "stop" ){
    setS("go");
  }
  if(window.search !== "" && s === "go" && location.pathname === "/shop" && s !== "stop" ){
    var searched = [];
    carData.forEach((item)=> {
      if(item.brand.toLocaleLowerCase().includes(window.search) ||
      item.model.toLocaleLowerCase().includes(window.search) ||
      item.fuelType.toLocaleLowerCase().includes(window.search) ||
      item.bodyType.toLocaleLowerCase().includes(window.search) ||
      item.carName.toLocaleLowerCase().includes(window.search)){
        searched.push(item);
      }
    })
    if(searched.length > 0){
      setCarsToLoad(searched);
      setS("stop");
    }
  }


  function handleChange(checkedState, setCheckedState, x) {
    const updateCheckedState = checkedState.map((item, index) =>
      index === x ? !item : item
    );
    setCheckedState(updateCheckedState);
  }
  function loadCarItem(item) {
    return <CarItem item={item} key={item.id} />
  }

  function loadSearchedItems() {
    var search = [];
    var filtered = [];

    for (let i = 0; i < condiCheckedState.length; i++) {//condition
      const element = condiCheckedState[i];
      var condition = document.getElementById("condition-" + i)
      if (element === true) {
        search.push(condition.value);
      }
    }
    for (let i = 0; i < brandCheckedState.length; i++) {//brand
      const element = brandCheckedState[i];
      var brand = document.getElementById("brand-" + i);
      if (element === true) {
        search.push(brand.value);
      }
    }
    for (let i = 0; i < bodyCheckedState.length; i++) {//body-type
      const element = bodyCheckedState[i];
      var bodyType = document.getElementById("body-type-" + i);
      if (element === true) {
        search.push(bodyType.value);
      }
    }
    for (let i = 0; i < fuelCheckedState.length; i++) {//fuel-type
      const element = fuelCheckedState[i];
      var fuel = document.getElementById("fuel-type-" + i);
      if (element === true) {
        search.push(fuel.value);
      }
    }
    for (let i = 0; i < yearCheckedState.length; i++) {//year
      const element = yearCheckedState[i];
      var year = document.getElementById("year-" + i);
      if (element === true) {
        search.push(year.value);
      }
    }

    carData.forEach((element) => {//add to filter array
      search.forEach(x => {
        if (filtered.some(item => {
          if (item.id === element.id) {
            return true;
          }
          return false;
        })) {
          return;
        }
        if (search.length > 1) { // the problem
          if (element.condition === x || element.brand === x || element.bodyType === x || element.fuelType === x || element.year.toString() === x) {
            filtered.push(element);
          }
        }
        else {
          if (element.condition === x) {
            filtered.push(element);
          }
          else if (element.brand === x) {
            filtered.push(element);
          }
          else if (element.bodyType === x) {
            filtered.push(element);
          }
          else if (element.fuelType === x) {
            filtered.push(element);
          }
          else if (element.year.toString() === x) {
            filtered.push(element);
          }
        }

      });
    });


    if (filtered.length > 0) {
      setCarsToLoad(filtered);
    }
  }
  const sortItems = event => {
    if(event.target.value === "low"){
      var ascending = [...carsToLoad].sort((a,b)=> a.price - b.price);
      setCarsToLoad(ascending);
      setSelected(event.target.text)
    }
    else if( event.target.value === "high"){
      var descending = [...carsToLoad].sort((a,b)=> b.price - a.price);
      setCarsToLoad(descending);
      setSelected(event.target.text)
    }
    else{
      setCarsToLoad(carData);
    }
  }

  function resetItems() {
    setCarsToLoad(carData);
    setCondiCheckedState(new Array(2).fill(false));
    setBrandCheckedState(new Array(8).fill(false));
    setBodyCheckedState(new Array(4).fill(false));
    setfuelCheckedState(new Array(4).fill(false));
    setyearCheckedState(new Array(4).fill(false));
  }

  return <Helmet title='Shop'>
    <CommonSection title='Shop with us' />
    {/*~~~ Shop section ~~~ */}
    <Container>
      <Col lg='12' className='text-center mb-5'>
        <h4 className="section__title">Welcome to our shop</h4>
        <h6 className="section__subtitle">Currently available cars are displayed here !</h6>
        <div className='d-flex align-items-center  gap-3 mb-5'>
          <span className='d-flex align-items-center gap-2'>
            <i className="ri-sort-desc"></i>
          </span>
          <select value={selected} onChange={sortItems}>
            {
              options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))

            }
          </select>

        </div>
      </Col>
      <div className='cars__sidebar'>
        <div className='sideBar-content'>
          <Col>
            <Col>
              <div className='filter__buttons'>
                <button className='btn-apply' onClick={loadSearchedItems}>Apply</button>
                <button className='btn-reset' onClick={resetItems}>Reset</button>
              </div>
            </Col>
            <hr />
            <div className='sidebar-sections'>
              <Col>
                <h2 className='section__subtitle'>Condition</h2>
                <Row><span>New  <input id='condition-0' type="checkbox" value="New" name="New"
                  checked={condiCheckedState[0]} onChange={() => handleChange(condiCheckedState, setCondiCheckedState, 0)} /></span></Row>
                  <hr />
                <Row><span>Used  <input id='condition-1' type="checkbox" value="Used" name="Used"
                  checked={condiCheckedState[1]} onChange={() => handleChange(condiCheckedState, setCondiCheckedState, 1)} /></span></Row>
                  <hr />
              </Col>
              <Col>
                <h2 className='section__subtitle'>Brand</h2>
                <Row><span>Tesla  <input id='brand-0' type="checkbox" value="Tesla" name="Tesla"
                  checked={brandCheckedState[0]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 0)} /></span></Row>
                <hr />
                <Row><span>Lamborghini  <input id='brand-1' type="checkbox" value="Lamborghini" name="Lamborghini"
                  checked={brandCheckedState[1]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 1)} /></span></Row>
                <hr />
                <Row><span>BMW  <input id='brand-2' type="checkbox" value="BMW" name="BMW"
                  checked={brandCheckedState[2]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 2)} /></span></Row>
                <hr />
                <Row><span>Ford  <input id='brand-3' type="checkbox" value="Ford" name="Ford"
                  checked={brandCheckedState[3]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 3)} /></span></Row>
                <hr />
                <Row><span>Audi  <input id='brand-4' type="checkbox" value="Audi" name="Audi"
                  checked={brandCheckedState[4]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 4)} /></span></Row>
                <hr />
                <Row><span>Mercedes  <input id='brand-5' type="checkbox" value="Mercedes" name="Mercedes"
                  checked={brandCheckedState[5]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 5)} /></span></Row>
                <hr />
                <Row><span>Rolls-Royce  <input id='brand-6' type="checkbox" value="Rolls-Royce" name="Rolls-Royce"
                  checked={brandCheckedState[6]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 6)} /></span></Row>
                <hr />
                <Row><span>Porsche  <input id='brand-7' type="checkbox" value="Porsche" name="Porsche"
                  checked={brandCheckedState[7]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 7)} /></span></Row>
                  <hr />             
              </Col>
              <Col>
                <h2 className='section__subtitle'>Body type</h2>
                
                <Row><span>Sedan  <input id='body-type-0' type="checkbox" value="Sedan" name="Sedan"
                  checked={bodyCheckedState[0]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 0)} /></span></Row>
                <hr />
                <Row><span>Sports Car  <input id='body-type-1' type="checkbox" value="Sports Car" name="Sports Car"
                  checked={bodyCheckedState[1]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 1)} /></span></Row>
                <hr />
                <Row><span>SUV  <input id='body-type-2' type="checkbox" value="SUV" name="SUV"
                  checked={bodyCheckedState[2]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 2)} /></span></Row>
                <hr />
                <Row><span>Coupe  <input id='body-type-3' type="checkbox" value="Coupe" name="Coupe"
                  checked={bodyCheckedState[3]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 3)} /></span></Row>
                  <hr />
              </Col>
              <Col>
                <h2 className='section__subtitle'>Fuel type</h2>
                
                <Row><span>Electric  <input id='fuel-type-0' type="checkbox" value="Electric" name="Electric"
                  checked={fuelCheckedState[0]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 0)} /></span></Row>
                <hr />
                <Row><span>Premium Unleaded Petrol  <input id='fuel-type-1' type="checkbox" value="Premium Unleaded Petrol" name="Premium Unleaded Petrol"
                  checked={fuelCheckedState[1]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 1)} /></span></Row>
                <hr />
                <Row><span>Diesel  <input id='fuel-type-2' type="checkbox" value="Diesel" name="Diesel"
                  checked={fuelCheckedState[2]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 2)} /></span></Row>
                <hr />
                <Row><span>Premium Gasoline  <input id='fuel-type-3' type="checkbox" value="Premium Gasoline" name="Premium Gasoline"
                  checked={fuelCheckedState[3]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 3)} /></span></Row>
                  <hr />
              </Col>
              <Col>
                <h2 className='section__subtitle'>Year</h2>
                
                <Row><span>2019  <input id='year-0' type="checkbox" value="2019" name="2019"
                  checked={yearCheckedState[0]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 0)} /></span></Row>
                <hr />
                <Row><span>2020  <input id='year-1' type="checkbox" value="2020" name="2020"
                  checked={yearCheckedState[1]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 1)} /></span></Row>
                <hr />
                <Row><span>2022  <input id='year-2' type="checkbox" value="2022" name="2022"
                  checked={yearCheckedState[2]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 2)} /></span></Row>
                <hr />
                <Row><span>2023  <input id='year-3' type="checkbox" value="2023" name="2023"
                  checked={yearCheckedState[3]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 3)} /></span></Row>
                  <hr />
              </Col>
            </div>
          </Col>
        </div>
        <Row className='car-items'>

          {
            carsToLoad.map(item => (
              loadCarItem(item)
            ))
          }
        </Row>
      </div>
    </Container>
  </Helmet >
}

export default Shop