const url = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
const homeElement = document.getElementById('home');
const carElement = document.getElementById('car');
const contactElement = document.getElementById('contact');
const mainElement = document.getElementById('mainContent');
const btnElement = document.getElementById('btn');

const carInfo = ["Acura is the luxury and performance division of Japanese automaker Honda, based primarily in North America.",
"Agrale produces the Marruá 4x4 Utility vehicle in both a Jeeplike versions, a pickup truck, and as a chassis cab.",
"Alfa Romeo Automobiles S.p.A. is an Italian luxury car manufacturer and a subsidiary of Stellantis Italy.",
"AM General is an American heavy vehicle and contract automotive manufacturer based in South Bend, Indiana. ",
"It diversified into the SUV and heavy vehicles market,special military vehicles, lightweight cars, civilian jeeps.",
"Aston Martin is a modern, exclusive sports car brand with a unique heritage instantly recognised around the world. ",
"The AUDI AG stands for sporty vehicles, high build quality and progressive design – for Vorsprung durch Technik."]

// AddEventListiner to the HomeElement
homeElement.addEventListener('click', () => {
    mainElement.innerHTML = "";
    mainElement.innerHTML = "<h2>Welcome to Car Shop.... </h2><p>Explore super model cars!!</p>"
    mainElement.style.textAlign="center";
});

//AddEventListener to the carElement
carElement.addEventListener('click', ()=> {
    mainElement.innerHTML = "";
    const divElement = document.createElement("div");
    divElement.style.display="flex";
    divElement.style.flexDirection="row";
    divElement.style.flexWrap="wrap";
    divElement.style.width="60vw";
    divElement.style.height="90vh";
    divElement.style.alignItems="center";
    divElement.style.justifyContent="space-around";
    //this try will fetch url and it will collects the list of worlds best car details and it will show first 6 places.
    try{
        const getCars = async () => {
            const response = await fetch(url);
            const responseData = await response.json();
            console.log(responseData)
            console.log(responseData[0])
            for(let i=0; i<7;i++){
                const divElement1 = document.createElement("div");
                divElement1.style.height = "250px";
                divElement1.style.width = "200px"
                divElement1.style.border = "2px solid black";
                divElement1.style.textAlign = "center";
                divElement1.style.margin = "10px";
                divElement1.style.overflow = "hidden";
                divElement1.style.borderRadius = "10px";
                if (responseData[i].nome == "ASTON MARTIN") {
                    continue;
                }
                divElement1.innerHTML = `<p><b>No: </b> <i>${responseData[i].codigo}</i></p><p><b>CarModel: </b><i>${responseData[i].nome}</i></p><p><b>Description: </b><i>${carInfo[i]}</i></p> <button type="button" onclick="alert('Thanks for Booking a Demo for our ${responseData[i].nome}')">Book Demo</button>`    
                divElement.appendChild(divElement1);
                console.log(divElement);
            }
        }
        getCars()
        mainElement.appendChild(divElement);
    }catch (err) {
        console.log(err);
    }
});

//AddEventListiner to the contact Element
contactElement.addEventListener("click",() => {
   mainElement.innerHTML = ""
   mainElement.innerHTML = "<h2>Contact us for more information.... </h2><p>Phone: 90000 XXXX </p>"   
})



