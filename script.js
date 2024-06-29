document.getElementById("global")
let justbody = document.body.innerHTML
function settimebg(){
    if(date.getHours()>20){
        console.log("night")
        document.body.style.background = "linear-gradient(180deg, rgba(0,2,45,1) 0%, rgba(124,81,66,1) 100%)"
        document.body.innerHTML = justbody  
    }
    else{
        console.log("day")
        document.body.innerHTML = `        <img id ="cloud1" src="https://i.pinimg.com/originals/50/0a/a9/500aa9360f5573bf4c282bb6ed73cd92.png" alt="">
        <img id ="cloud2" src="https://i.pinimg.com/originals/60/a8/2c/60a82c6cf7fda046b291e6b2c78ea531.png" alt="">
        <img id ="cloud3" src="https://i.pinimg.com/originals/50/0a/a9/500aa9360f5573bf4c282bb6ed73cd92.png" alt="">`+justbody

        document.body.style.background =  "linear-gradient(180deg, rgba(6,18,128,1) 0%, rgba(0,82,255,1) 100%)"
    }
}
// localStorage.setItem("saved", "")
let color =  "rgba(206, 255, 249, 1) 0%"
const gradientColors = [
    "rgba(206, 255, 249, 1)",  // -10 градусов
    "rgba(197, 253, 247, 1)",  // -9 градусов
    "rgba(188, 250, 244, 1)",  // -8 градусов
    "rgba(179, 248, 241, 1)",  // -7 градусов
    "rgba(170, 245, 238, 1)",  // -6 градусов
    "rgba(161, 243, 236, 1)",  // -5 градусов
    "rgba(160, 245, 225, 1)",  // -4 градуса
    "rgba(159, 247, 213, 1)",  // -3 градуса
    "rgba(158, 249, 202, 1)",  // -2 градуса
    "rgba(157, 251, 190, 1)",  // -1 градус
    "rgba(156, 253, 179, 1)",  // 0 градусов
    "rgba(154, 255, 167, 1)",  // 1 градус
    "rgba(164, 255, 165, 1)",  // 2 градуса
    "rgba(174, 255, 163, 1)",  // 3 градуса
    "rgba(184, 255, 161, 1)",  // 4 градуса
    "rgba(194, 255, 159, 1)",  // 5 градусов
    "rgba(204, 255, 157, 1)",  // 6 градусов
    "rgba(213, 255, 155, 1)",  // 7 градусов
    "rgba(222, 255, 153, 1)",  // 8 градусов
    "rgba(231, 255, 151, 1)",  // 9 градусов
    "rgba(235, 255, 132, 1)",  // 10 градусов
    "rgba(237, 255, 118, 1)",  // 11 градусов
    "rgba(239, 255, 104, 1)",  // 12 градусов
    "rgba(241, 255, 90, 1)",   // 13 градусов
    "rgba(243, 255, 76, 1)",   // 14 градусов
    "rgba(245, 255, 75, 1)",   // 15 градусов
    "rgba(247, 250, 74, 1)",   // 16 градусов
    "rgba(249, 245, 73, 1)",   // 17 градусов
    "rgba(251, 240, 72, 1)",   // 18 градусов
    "rgba(253, 235, 72, 1)",   // 19 градусов
    "rgba(255, 230, 71, 1)",   // 20 градусов
    "rgba(255, 223, 71, 1)",   // 21 градус
    "rgba(255, 217, 71, 1)",   // 22 градуса
    "rgba(255, 210, 71, 1)",   // 23 градуса
    "rgba(255, 204, 72, 1)",   // 24 градуса
    "rgba(255, 199, 70, 1)",   // 25 градусов
    "rgba(255, 194, 69, 1)",   // 26 градусов
    "rgba(255, 189, 68, 1)",   // 27 градусов
    "rgba(255, 184, 67, 1)",   // 28 градусов
    "rgba(255, 179, 66, 1)",   // 29 градусов
    "rgba(255, 173, 65, 1)",   // 30 градусов
    "rgba(255, 163, 65, 1)",   // 31 градус
    "rgba(255, 154, 65, 1)",   // 32 градуса
    "rgba(255, 144, 65, 1)",   // 33 градуса
    "rgba(255, 134, 65, 1)",   // 34 градуса
    "rgba(255, 124, 65, 1)",   // 35 градусов
    "rgba(255, 114, 65, 1)",   // 36 градусов
    "rgba(255, 114, 68, 1)",   // 37 градусов
    "rgba(255, 114, 71, 1)",   // 38 градусов
    "rgba(255, 114, 71, 1)",   // 39 градусов
    "rgba(255, 114, 71, 1)"    // 40 градусов
];
let savedcities =[]
if(!localStorage.getItem("saved")){
    savedcities = ["Kyiv", "London", "Berlin", "Warsaw","Paris", "Oslo"]
    localStorage.setItem("saved", savedcities)
  
}
else{
 

}
let cloud2 = document.getElementById("cloud2")
const now = new Date();

let hourforecast = document.getElementById("hourforecast")
document.addEventListener("DOMContentLoaded", function() {
 
    function horizontalScroll(e) {
        e.preventDefault();
        hourforecast.scrollLeft += e.deltaY/3;
    }

    hourforecast.addEventListener("wheel", horizontalScroll, { passive: false });
});
let difmaxmin = 0
const days = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const date = new Date();
console.log(date.getMonth())
const dayOfWeek = date.getDay();

let curdays = []
for(let i = 0; i<10;i++){

    if(dayOfWeek+i>13){
        curdays.push(days[dayOfWeek+i-14])

    }
    else if(dayOfWeek+i>6){


        curdays.push(days[dayOfWeek+i-7 ])
    }
    else{
        curdays.push(days[dayOfWeek+i])
    }

}

async function getWeatherByCity(city) {
    const apiKey = '0e9a74a9222e462abf6112046242306';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&lang=uk&days=10`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let maxtemps =[]
        let mintemps = []
        maxtemps.push(Math.round(data.forecast.forecastday[0].day.maxtemp_c))
        mintemps.push(Math.round(data.forecast.forecastday[0].day.mintemp_c))
        for(let i =1; i<10;i++ ){
            maxtemps.push(Math.round(data.forecast.forecastday[i].day.maxtemp_c))
            mintemps.push(Math.round(data.forecast.forecastday[i].day.mintemp_c))
        }
        global.innerHTML = `
        <div id = "citydiv"><h1 id = "CityName">${data.location.name}</h1><div id = "morecities">
        <div id ="line1"></div>
        <div id ="line1"></div>
        <div id ="line1"></div>
    </div></div>
        <h1 id = "tempglobal">${Math.round(data.current.temp_c)}°</h1>
        <h3 id = "weatherforecast">${data.current.condition.text}</h3>                            
        <h3 id = "maxmin">В:${data.forecast.forecastday[0].day.maxtemp_c}°     Н:${data.forecast.forecastday[0].day.mintemp_c}°</h3>
    `;
    // document.body.style.background =" linear-gradient(180deg, rgba(0,0,0,0)  0%, rgba(0,0,0,0)  100%);"
   
    document.getElementById("morecities").addEventListener('click', function() {
        // Можно выполнить другие действия здесь
          document.body.style.background = "linear-gradient(180deg, rgba(0,0,0)  0%, rgba(0,0,0)  100%)"
        document.body.innerHTML=`  <div id = "menu"><label for="tags" id= "Pogodalbl">Погода </label><div class="ui-widget">
   
    <input id="tags">
    </div>
    <button id = "confirm"</button></div>
    <div id = "savedlocs" ></div>
  `

  preparelist()
        $( function() {
            var availableTags = [
                "Kyiv",
              "Kharkiv",
              "Odesa",
              "Dnipro",
              "Donetsk",
              "Zaporizhzhia",
              "Lviv",
              "Kryvyi Rih",
              "Mykolaiv",
              "Mariupol",
              "Luhansk",
              "Vinnytsia",
              "Makiivka",
              "Sevastopol",
              "Simferopol",
              "Kherson",
              "Poltava",
              "Chernihiv",
              "Cherkasy",
              "Zhytomyr",
              "Sumy",
              "Khmelnytskyi",
              "Chernivtsi",
              "Rivne",
              "Kirovohrad",
              "Ternopil",
              "Ivano-Frankivsk",
              "Lutsk",
              "Bila Tserkva",
              "Kremenchuk",
              "Kramatorsk",
              "Melitopol",
              "Kerch",
              "Uzhhorod",
              "Nikopol",
              "Berdyansk",
              "Sloviansk",
              "Alchevsk",
              "Pavlohrad",
              "Severodonetsk",
              "Kamianske",
              "Drohobych",
              "Yalta",
              "Enerhodar",
              "Konotop",
              "Feodosia",
              "Boryspil",
              "Brovary",
              "Uman",
              "Izmail",
              "Krasnyi Luch",
              "Yevpatoria",
              "Oleksandriia",
              "Mukachevo",
              "Khust",
              "Novomoskovsk",
              "Kostiantynivka",
              "Bohuslav",
              "Izyum",
              "Shostka",
              "Slavutych",
              "Netishyn",
              "Korosten",
              "Toretsk",
              "Lozova",
              "Balakliia",
              "Svaliava",
              "Kupyansk",
              "Skadovsk",
              "Zhovti Vody",
              "Kamianets-Podilskyi",
              "Chervonohrad",
              "Tulchyn",
              "Novovolynsk",
              "Balta",
              "Korsun-Shevchenkivskyi",
              "Kuznetsovsk",
              "Chervonograd",
              "Dubno",
              "Kovel",
              "Shakhtarsk",
              "Bakhmut",
              "Kalush",
              "Kolomyia",
              "Zolochiv",
              "Novyi Rozdil",
              "Drohobych",
              "Chervonohryhorivka",
              "Stryi",
              "Rivne",
              "Kramatorsk",
              "Lysychansk",
              "Pokrovsk",
              "Volnovakha",
              "Kostopil",
              "Skadovsk",
              "Oslo",
              "Bergen",
              "Stavanger",
              "Trondheim",
              "Drammen",
              "Fredrikstad",
              "Kristiansand",
              "Sandnes",
              "Tromsø",
              "Sarpsborg",
              "Skien",
              "Ålesund",
              "Sandefjord",
              "Haugesund",
              "Tønsberg",
              "Moss",
              "Porsgrunn",
              "Bodø",
              "Arendal",
              "Hamar",
              "Ytrebygda",
              "Molde",
              "Kristiansund",
              "Harstad",
              "Larvik",
              "Askøy",
              "Kongsberg",
              "Horten",
              "Gjøvik",
              "Narvik",
              "Lillehammer",
              "Halden",
              "Alta",
              "Mo i Rana",
              "Leirvik",
              "Holmestrand",
              "Førde",
              "Verdal",
              "Notodden",
              "Bryne",
              "Vennesla",
              "Egersund",
              "Elverum",
              "Kongsvinger",
              "Hamar",
              "Åkrehamn",
              "Fauske",
              "Lillesand",
              "Sandnessjøen",
              "Namsos",
              "Stjørdalshalsen",
              "Nesoddtangen",
              "Jessheim",
              "Ski",
              "Volda",
              "Raufoss",
              "Lørenskog",
              "Nøtterøy",
              "Hønefoss",
              "Osøyro",
              "Jørpeland",
              "Brumunddal",
              "Larvik",
              "Ski",
              "Drobak",
              "Horten",
              "Grimstad",
              "Drøbak",
              "Mandal",
              "Stavern",
              "Råholt",
              "Skedsmokorset",
              "Holmestrand",
              "Tananger",
              "Gjøvik",
              "Narvik",
              "Brevik",
              "Hokksund",
              "Svelvik",
              "Sauda",
              "Røros",
              "Høvik",
              "Hommersåk",
              "Florø",
              "Brønnøysund",
              "Fosnavåg",
              "Ørsta",
              "Straume",
              "Måløy",
              "Alta",
              "New York",
              "Los Angeles",
              "Chicago",
              "Houston",
              "Phoenix",
              "Philadelphia",
              "San Antonio",
              "San Diego",
              "Dallas",
              "San Jose",
              "Austin",
              "Jacksonville",
              "Fort Worth",
              "Columbus",
              "San Francisco",
              "Charlotte",
              "Indianapolis",
              "Seattle",
              "Denver",
              "Washington",
              "Boston",
              "El Paso",
              "Detroit",
              "Nashville",
              "Portland",
              "Memphis",
              "Oklahoma City",
              "Las Vegas",
              "Louisville",
              "Baltimore",
              "Milwaukee",
              "Albuquerque",
              "Tucson",
              "Fresno",
              "Sacramento",
              "Mesa",
              "Kansas City",
              "Atlanta",
              "Long Beach",
              "Colorado Springs",
              "Raleigh",
              "Miami",
              "Virginia Beach",
              "Omaha",
              "Oakland",
              "Minneapolis",
              "Tulsa",
              "Arlington",
              "New Orleans",
              "Wichita",
              "Cleveland",
              "Tampa",
              "Bakersfield",
              "Aurora",
              "Anaheim",
              "Honolulu",
              "Santa Ana",
              "Corpus Christi",
              "Riverside",
              "Lexington",
              "St. Louis",
              "Stockton",
              "Pittsburgh",
              "Saint Paul",
              "Anchorage",
              "Cincinnati",
              "Henderson",
              "Greensboro",
              "Plano",
              "Newark",
              "Toledo",
              "Lincoln",
              "Orlando",
              "Chula Vista",
              "Jersey City",
              "Chandler",
              "Fort Wayne",
              "Buffalo",
              "Durham",
              "St. Petersburg",
              "Irvine",
              "Laredo",
              "Lubbock",
              "Madison",
              "Gilbert",
              "Norfolk",
              "Reno",
              "Winston-Salem",
              "Glendale",
              "Hialeah",
              "Garland",
              "Scottsdale",
              "Irving",
              "Chesapeake",
              "North Las Vegas",
              "Fremont",
              "Baton Rouge",
              "Richmond",
              "Berlin",
              "Hamburg",
              "Munich",
              "Cologne",
              "Frankfurt",
              "Stuttgart",
              "Düsseldorf",
              "Dortmund",
              "Essen",
              "Leipzig",
              "Bremen",
              "Dresden",
              "Hanover",
              "Nuremberg",
              "Duisburg",
              "Bochum",
              "Wuppertal",
              "Bielefeld",
              "Bonn",
              "Münster",
              "Karlsruhe",
              "Mannheim",
              "Augsburg",
              "Wiesbaden",
              "Gelsenkirchen",
              "Mönchengladbach",
              "Braunschweig",
              "Chemnitz",
              "Kiel",
              "Aachen",
              "Halle",
              "Magdeburg",
              "Freiburg",
              "Krefeld",
              "Lübeck",
              "Oberhausen",
              "Erfurt",
              "Rostock",
              "Mainz",
              "Kassel",
              "Hagen",
              "Saarbrücken",
              "Hamm",
              "Herne",
              "Ludwigshafen",
              "Mülheim",
              "Osnabrück",
              "Solingen",
              "Leverkusen",
              "Oldenburg",
              "Neuss",
              "Potsdam",
              "Heidelberg",
              "Paderborn",
              "Darmstadt",
              "Regensburg",
              "Ingolstadt",
              "Würzburg",
              "Fürth",
              "Wolfsburg",
              "Offenbach",
              "Ulm",
              "Heilbronn",
              "Pforzheim",
              "Göttingen",
              "Bottrop",
              "Recklinghausen",
              "Reutlingen",
              "Koblenz",
              "Bergisch Gladbach",
              "Bremerhaven",
              "Jena",
              "Remscheid",
              "Erlangen",
              "Moers",
              "Siegen",
              "Hildesheim",
              "Salzgitter",
              "Kaiserslautern",
              "Witten",
              "Gütersloh",
              "Iserlohn",
              "Zwickau",
              "Schwerin",
              "Düren",
              "Hanau",
              "Esslingen",
              "Ludwigsburg",
              "Flensburg",
              "Trier",
              "Ratingen",
              "Lünen",
              "Dubai"
          ]

        
        $( "#tags" ).autocomplete({
          source: availableTags
        });
        $( "#confirm" ).click(function() {
             document.body.style.background =  "linear-gradient(180deg, rgba(6,18,128,1) 0%, rgba(0,82,255,1) 100%)"
             if(localStorage.getItem("saved")){
                savedcities = localStorage.getItem("saved").split(",");

                savedcities.pop()

                savedcities.unshift($( "#tags" ).val())
                localStorage.setItem("saved",savedcities)
                
             }
             else{
                localStorage.setItem("saved", ["Kyiv", "London", "Berlin", "Warsaw","Paris", "Oslo"])
             }
             
            var selectedCity = $( "#tags" ).val();
          
            settimebg()
     
            getWeatherByCity(selectedCity)
        })      
      } );
    })
        for(let i =1; i<24;i++){
            if(now.getHours()+i>24){
            document.getElementById("hourforecast").innerHTML += `<div id = "hour"><p id = "hourstime">${now.getHours()+i-25}:00</p>
                <img id = "imghour" src="https:${data.forecast.forecastday[1].hour[now.getHours()+i-25].condition.icon}" alt="" srcset="">
                <p id = "hourtemp">${Math.round(data.forecast.forecastday[0].hour[now.getHours()+i-25].temp_c)}°</p>
            </div>`
            }
            else{
                document.getElementById("hourforecast").innerHTML += `<div id = "hour"><p id = "hourstime">${now.getHours()+i-1}:00</p>
                <img id = "imghour" src="https:${data.forecast.forecastday[0].hour[now.getHours()+i-1].condition.icon}" alt="" srcset="">
                <p id = "hourtemp">${Math.round(data.forecast.forecastday[0].hour[now.getHours()+i-1].temp_c)}°</p></div>`
            }
            
        }

    document.getElementById(0).innerHTML = ` <p id= "dayname">Сьогодні</p> <img src="https:${data.forecast.forecastday[0].day.condition.icon}" id = "weatherIcon" alt=""><p id = "mintemp">${Math.round(data.forecast.forecastday[0].day.mintemp_c)}°</p>
        <div id="progress-container">
        <div id="progress-bar0" style="width: 70%;">
        <div id = "dot"></div></div>
        </div>
        <p id="maxtemp">${Math.round(data.forecast.forecastday[0].day.maxtemp_c)}°</p>`
        difmaxmin = Math.max(...maxtemps)- Math.min(...mintemps)
        document.getElementById(`progress-bar0`).style.background = `linear-gradient(to right, ${gradientColors[Math.round((data.forecast.forecastday[0].day.mintemp_c ))+10]} 0%, ${gradientColors[Math.round((data.forecast.forecastday[0].day.maxtemp_c ))+10]} 100%)`
        document.getElementById(`progress-bar0`).style.marginLeft = `${Math.round((data.forecast.forecastday[0].day.mintemp_c - Math.min(...mintemps))*(200/difmaxmin))-5}px`
        document.getElementById(`progress-bar0`).style.width = `${((data.forecast.forecastday[0].day.maxtemp_c-data.forecast.forecastday[0].day.mintemp_c)*100)/(Math.max(...maxtemps)- Math.min(...mintemps))}%`
        document.getElementById("dot").style.marginLeft = `${((data.forecast.forecastday[0].day.maxtemp_c-data.forecast.forecastday[0].day.mintemp_c)*100)/(Math.max(...maxtemps)- Math.min(...mintemps))*2/(data.forecast.forecastday[0].day.maxtemp_c-data.forecast.forecastday[0].day.mintemp_c )*
            (data.current.temp_c - data.forecast.forecastday[0].day.mintemp_c)}px`
            
        for(let i =1; i<10;i++ ){
    
        document.getElementById(i).innerHTML = ` <p id= "dayname">${curdays[i]}</p> <p id = "datanum">${data.forecast.forecastday[i].date.slice(5)}</p><img src="https:${data.forecast.forecastday[i].day.condition.icon}" id = "weatherIcon" alt=""> <p id = "mintemp">${Math.round(data.forecast.forecastday[i].day.mintemp_c)}°</p>
        <div id="progress-container">
        <div id="progress-bar ${i}" style="border-radius:25px;"></div>
        </div>
        <p id="maxtemp">${Math.round(data.forecast.forecastday[i].day.maxtemp_c)}°</p>`
        document.getElementById(`progress-bar ${i}`).style.background = `linear-gradient(to right, ${gradientColors[Math.round((data.forecast.forecastday[i].day.mintemp_c ))+10]} 0%, ${gradientColors[Math.round((data.forecast.forecastday[i].day.maxtemp_c ))+10]} 100%)`
        document.getElementById(`progress-bar ${i}`).style.marginLeft = `${Math.round((data.forecast.forecastday[i].day.mintemp_c - Math.min(...mintemps))*(200/difmaxmin))}px` 
        document.getElementById(`progress-bar ${i}`).style.width = `${((data.forecast.forecastday[i].day.maxtemp_c-data.forecast.forecastday[i].day.mintemp_c)*100)/ (Math.max(...maxtemps)- Math.min(...mintemps))}%`
        document.getElementById(`progress-bar ${i}`).style.borderRadius = '25px';
        document.getElementById(`progress-bar ${i}`).style.height = '5px';
        document.getElementById(`progress-bar ${i}`).style.marginTop = '0px';}

       
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
async function getUserLocation() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=8ae1bd6733a52b');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        getWeatherByCity(data.city)
    } catch (error) {
        console.error('Error fetching location data:', error);
    }
}

getWeatherByCity(getUserLocation())
async function preparelist(){
    const apiKey = '0e9a74a9222e462abf6112046242306';
    let savedlocs = document.getElementById("savedlocs")
    savedcities = localStorage.getItem("saved").split(",");

    try {
        for(let i = 0; i<6; i++){

        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${savedcities[i]}&aqi=no&lang=uk&days=1`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        savedlocs.innerHTML += `
  
    <div id = "locationsaveddiv", onclick=getWeatherByCity(Brovary) 'class = "locationsaveddiv${i}" >
    <div id = "firstcl">
           <h2 id = "locationsaved">${savedcities[i]}</h2>
    <p id = "time">${data.location.localtime.slice(-5)}</p>
    <p id = "weathertipelocation">${data.forecast.forecastday[0].day.condition.text}</p>
    </div>



    <h1 id ="temperature">${Math.round(data.current.temp_c)}°</h1>
        <img id = "sun" src="https://pngimg.com/uploads/sun/sun_PNG13446.png" alt="">
    </div>`}
        
        // Вы можете добавить здесь дальнейшую обработку данных
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
;
settimebg()