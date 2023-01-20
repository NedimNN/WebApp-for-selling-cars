import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import carData from '../assets/data/carData'
import Helmet from '../components/Helmet/Helmet'
import CarItem from '../components/UI/CarItem'
import CommonSection from '../components/UI/CommonSection'
import { useState } from 'react'

const Shop = () => {
  const [carsToLoad, setCarsToLoad] = useState(
    carData
  )
  var exists = false;
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
        if(filtered.some(item => {
          if(item.id === element.id){
            return true;
          }
          return false;
        })){
          return;
        }
        if (search.length > 1) { // the problem
          if (element.condition === x || element.brand === x || element.bodyType === x || element.fuelType === x || element.year === x) {
            filtered.push(element);
          }
        }
        else {
          if (element.condition === x) {
            if (!exists) {
              filtered.push(element);
            }
          }
          else if (element.brand === x) {
            if (!exists) {
              filtered.push(element);
            }
          }
          else if (element.bodyType === x) {
            if (!exists) {
              filtered.push(element);
            }
          }
          else if (element.fuelType === x) {
            if (!exists) {
              filtered.push(element);
            }
          }
          else if (element.year === x) {
            if (!exists) {
              filtered.push(element);
            }
          }
        }

      });
    });


    if (filtered.length > 0) {
      setCarsToLoad(filtered);
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
      <Row className='justify-content-center'>
        <Col lg='12' className='text-center mb-5'>
          <h4 className="section__title">Welcome to our shop</h4>
          <h6 className="section__subtitle">Currently available cars are displayed here !</h6>
          <div className='d-flex align-items-center  gap-3 mb-5'>
            <span className='d-flex align-items-center gap-2'>
              <i className="ri-sort-desc"></i>
            </span>
            <select>
              <option>Sort by</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>

          </div>
          <div className='filterSideBar'>
            <Col>
              <Col>
                <button onClick={loadSearchedItems}>Apply</button>
                <button onClick={resetItems}>Reset</button>
              </Col>
              <Col>
                <h2 className='section__subtitle'>Condition</h2>
                <Row><span><input id='condition-0' type="checkbox" value="New" name="New"
                  checked={condiCheckedState[0]} onChange={() => handleChange(condiCheckedState, setCondiCheckedState, 0)} />New  </span></Row>
                <Row><span><input id='condition-1' type="checkbox" value="Used" name="Used"
                  checked={condiCheckedState[1]} onChange={() => handleChange(condiCheckedState, setCondiCheckedState, 1)} />Used  </span></Row>
              </Col>
              <Col>
                <h2 className='section__subtitle'>Brand</h2>
                <Row><span><input id='brand-0' type="checkbox" value="Tesla" name="Tesla"
                  checked={brandCheckedState[0]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 0)} />Tesla  </span></Row>
                <Row><span><input id='brand-1' type="checkbox" value="Lamborghini" name="Lamborghini"
                  checked={brandCheckedState[1]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 1)} />Lamborghini  </span></Row>
                <Row><span><input id='brand-2' type="checkbox" value="BMW" name="BMW"
                  checked={brandCheckedState[2]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 2)} />BMW  </span></Row>
                <Row><span><input id='brand-3' type="checkbox" value="Ford" name="Ford"
                  checked={brandCheckedState[3]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 3)} />Ford  </span></Row>
                <Row><span><input id='brand-4' type="checkbox" value="Audi" name="Audi"
                  checked={brandCheckedState[4]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 4)} />Audi  </span></Row>
                <Row><span><input id='brand-5' type="checkbox" value="Mercedes" name="Mercedes"
                  checked={brandCheckedState[5]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 5)} />Mercedes  </span></Row>
                <Row><span><input id='brand-6' type="checkbox" value="Rolls-Royce" name="Rolls-Royce"
                  checked={brandCheckedState[6]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 6)} />Rolls-Royce  </span></Row>
                <Row><span><input id='brand-7' type="checkbox" value="Porsche" name="Porsche"
                  checked={brandCheckedState[7]} onChange={() => handleChange(brandCheckedState, setBrandCheckedState, 7)} />Porsche  </span></Row>
              </Col>
              <Col>
                <h2 className='section__subtitle'>Body type</h2>
                <Row><span><input id='body-type-0' type="checkbox" value="Sedan" name="Sedan"
                  checked={bodyCheckedState[0]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 0)} />Sedan  </span></Row>
                <Row><span><input id='body-type-1' type="checkbox" value="Sports Car" name="Sports Car"
                  checked={bodyCheckedState[1]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 1)} />Sports Car  </span></Row>
                <Row><span><input id='body-type-2' type="checkbox" value="SUV" name="SUV"
                  checked={bodyCheckedState[2]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 2)} />SUV  </span></Row>
                <Row><span><input id='body-type-3' type="checkbox" value="Coupe" name="Coupe"
                  checked={bodyCheckedState[3]} onChange={() => handleChange(bodyCheckedState, setBodyCheckedState, 3)} />Coupe  </span></Row>
              </Col>
              <Col>
                <h2 className='section__subtitle'>Fuel type</h2>
                <Row><span><input id='fuel-type-0' type="checkbox" value="Electric" name="Electric"
                  checked={fuelCheckedState[0]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 0)} />Electric  </span></Row>
                <Row><span><input id='fuel-type-1' type="checkbox" value="Premium Unleaded Petrol" name="Premium Unleaded Petrol"
                  checked={fuelCheckedState[1]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 1)} />Premium Unleaded Petrol  </span></Row>
                <Row><span><input id='fuel-type-2' type="checkbox" value="Diesel" name="Diesel"
                  checked={fuelCheckedState[2]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 2)} />Diesel  </span></Row>
                <Row><span><input id='fuel-type-3' type="checkbox" value="Premium Gasoline" name="Premium Gasoline"
                  checked={fuelCheckedState[3]} onChange={() => handleChange(fuelCheckedState, setfuelCheckedState, 3)} />Premium Gasoline  </span></Row>
              </Col>
              <Col>
                <h2 className='section__subtitle'>Year</h2>
                <Row><span><input id='year-0' type="checkbox" value="2019" name="2019"
                  checked={yearCheckedState[0]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 0)} />2019  </span></Row>
                <Row><span><input id='year-1' type="checkbox" value="2020" name="2020"
                  checked={yearCheckedState[1]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 1)} />2020  </span></Row>
                <Row><span><input id='year-2' type="checkbox" value="2022" name="2022"
                  checked={yearCheckedState[2]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 2)} />2022  </span></Row>
                <Row><span><input id='year-3' type="checkbox" value="2023" name="2023"
                  checked={yearCheckedState[3]} onChange={() => handleChange(yearCheckedState, setyearCheckedState, 3)} />2023  </span></Row>
              </Col>
            </Col>

          </div>
        </Col>
        {
          carsToLoad.map(item => (
            loadCarItem(item)
          ))
        }
      </Row>
    </Container>
  </Helmet>
}

export default Shop