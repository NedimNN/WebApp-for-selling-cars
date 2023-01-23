// import all images from assets/images directory
import img01 from "../images/cars-img/2022-tesla-model-3.jpg";
import img02 from "../images/cars-img/2022-lamborghini-aventador-109-1625607587.jpg";
import img03 from "../images/cars-img/2022-bmw-x3-m40i-108-1650211641.jpg";
import img04 from "../images/cars-img/2022-ford-mustang-shelby-gt500-02-1636734552.jpg";
import img05 from "../images/cars-img/2021-audi-rs6-avant-110-1605052183.jpg";
import img06 from "../images/cars-img/2018-mercedes-amg-gtr-hero-1559584200.jpg";
import img07 from "../images/cars-img/2020-rolls-royce-wraith-101-1584549150.jpg";
import img08 from "../images/cars-img/2023-porsche-911-gt3-rs-201-1660575621.jpg";
import img09 from "../images/cars-img/2023-tesla-model-x-101-1671475309.jpeg";


const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 61990,
    year: 2019,
    horsePower: 122,
    automatic: "Automatic",
    condition: "New",
    bodyType: "Sedan",
    fuelType: "Electric",
    description:
      " Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.",
  },

  {
    id: 2,
    brand: "Lamborghini",
    rating: 51,
    carName: "Aventador",
    imgUrl: img02,
    model: "Model-2020",
    price: 460422,
    year: 2022,
    horsePower: 769,
    automatic: "Automatic",
    condition: "New",
    bodyType: "Sports Car",
    fuelType: "Premium Unleaded Petrol",
    description:
      " The Aventador LP 700-4 was the first iteration of the Aventador and was designed by Filippo Perini. Production of the Aventador was planned to be limited to 4,000 vehicles; however, in 2016, it achieved the 5,000 unit milestone. The moulds used to make the carbon-fibre monocoque are expected to last 500 moulds each and only 8 have been made.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 123,
    carName: "X3",
    imgUrl: img03,
    model: "Model-2020",
    price: 46395,
    year: 2020,
    horsePower: 382,
    automatic: "Automatic",
    condition: "Used",
    bodyType: "SUV",
    fuelType: "Diesel",
    description:
      " Traditionally, sports sedans have been the vehicles that best projected the spirit of the BMW brand. Not so much anymore. The 2023 X3 SUV edges in on its four-door brethren’s territory with a satisfying blend of refinement and driver engagement. As its name implies, the X3 is the crossover equivalent to the renowned 3-series sedan, and it shares its powertrains with that car. Entry-level models are powered by a 248-hp turbo-four while M40i models get a boost from the company’s revered 382-hp turbo six—an engine that never ceases to amaze us with its velvety muscle. A handsome exterior design gives the X3 enough curb appeal to fit in among style mavens such as the Genesis GV70 and Volvo XC60.",
  },

  {
    id: 4,
    brand: "Ford",
    rating: 275,
    carName: "GT-500",
    imgUrl: img04,
    model: "Mustang Shelby",
    price: 80795,
    year: 2022,
    horsePower: 760,
    automatic: "Automatic",
    condition: "New",
    bodyType: "Sports Car",
    fuelType: "Premium Gasoline",
    description:
      " Think of the 2022 Ford Mustang Shelby GT500 kind of like a rolling theme park. Its monstrous 760-hp supercharged V-8 launches the coupe with eye-watering force, and its immense grip causes sensations of euphoria or nausea or both. All the while its thrilling exhaust note provides the soundtrack, and a rapid-shifting automatic transmission handles gearchanges for the rear-drive-only coupe. The Shelby GT500 isn't just the mightiest Mustang ever, it's also the most powerful road car Ford has ever built.",
  },

  {
    id: 5,
    brand: "Audi",
    rating: 352,
    carName: "Avant",
    imgUrl: img05,
    model: "RS6",
    price: 119995,
    year: 2022,
    horsePower: 591,
    automatic: "Automatic",
    condition: "Used",
    bodyType: "Sedan",
    fuelType: "Premium Gasoline",
    description:
      " In a sea of performance SUVs like the BMW X5 M, the Audi RS6’s rakish profile, hunkered-down stance, and supercar driving character are rare and special. Powered by a 591-horsepower twin-turbocharged V-8, this station wagon is a performance beast, shooting to 60 mph in just 3.1 seconds and capable of a 190 mph top speed. That’ll make Costco runs a lot more interesting. At the same time, the long-roof body style can comfortably seat five while carrying nearly as much cargo as chunkier, less athletic SUVs.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 187,
    carName: "GT R",
    imgUrl: img06,
    model: "AMG",
    price: 160422,
    year: 2019,
    horsePower: 577 ,
    automatic: "Automatic",
    condition: "New",
    bodyType: "Sedan",
    fuelType: "Premium Gasoline",
    description:
      " Like the rest of the AMG GT lineup, the GT R models are all powered by a twin-turbo 4.0-liter V-8 engine mated to a seven-speed dual-clutch automatic transmission. Both the GT R and GT R Pro models make 577 horsepower, and rear-wheel drive is the only option. Compared with the regular GTs, the GT R has a slew of aerodynamic and chassis enhancements to make it faster around a track, with the Pro version getting additional modifications including a bigger wing and adjustable suspension.",
  },

  {
    id: 7,
    brand: "Rolls-Royce",
    rating: 32,
    carName: "Wraith",
    imgUrl: img07,
    model: "Model-2020",
    price: 332000,
    year: 2022,
    horsePower: 624 ,
    automatic: "Automatic",
    condition: "New",
    bodyType: "Coupe",
    fuelType: "Premium Unleaded Petrol",
    description:
      " Rolls-Royce is known for crafting baroque vehicles that exude gravitas and refinement. This spirit is very much in evidence with the Wraith, a luxury coupe derived from the automaker's Ghost sedan. This grand tourer comes with rear-hinged doors, and it can be customized in seemingly endless permutations. The Wraith's cabin is a place of unbridled opulence, home to meticulous craftsmanship and the finest materials money can buy. Its V-12 dispenses abundant power, and the car's satin-smooth handling diligently shields its passengers from harshness.",
  },

  {
    id: 8,
    brand: "Porsche",
    rating: 227,
    carName: "911 GT3",
    imgUrl: img08,
    model: "Model-2023",
    price: 171150,
    year: 2023,
    horsePower: 502 ,
    automatic: "Manual",
    condition: "New",
    bodyType: "Coupe",
    fuelType: "Premium Gasoline",
    description:
      " Simply put, the 2023 Porsche 911 GT3 and the all-out track-attack GT3 RS are utterly transcendent, blending everything we love about the standard 911 with otherworldly performance, uncompromised driving enjoyment, and hot-lap capability. A naturally aspirated 4.0-liter flat-six engine makes demonic sounds as it howls up to its 9000 rpm redline, producing 502 horsepower along the way in the GT3 and GT3 Touring. That same engine is twisted to 518 horsepower in the new GT3 RS, but it’s that model’s wild race-car aerodynamic elements—ideas cribbed from GT and Formula 1 race cars—that comprise its major engineering advancements.",
  },
  {
    id: 9,
    brand: "Tesla",
    rating: 135,
    carName: "Model X",
    imgUrl: img09,
    model: "Plaid model",
    price: 111630,
    year: 2023,
    horsePower: 1020,
    automatic: "Automatic",
    condition: "New",
    bodyType: "Sedan",
    fuelType: "Electric",
    description:
      " The 2023 Model X offers the performance and cachet that comes with the Tesla brand name but its gimmicks aren’t as compelling these days. The luxury electric crossover segment has expanded and now includes better options. The performance-oriented Plaid model costs more but makes an astounding 1020 horsepower and still can go up to 333 miles between charges. We’re impressed by its brutal acceleration and great driving range.",
  },
  
  
];

export default carData;