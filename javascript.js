
class Day{
    constructor(day, title, description, image, source){
        this.day = day;
        this.title = title;
        this.description = description;
        this.image = image;
        this.source = source;
    }
}

let calendarDays = [];

document.addEventListener('DOMContentLoaded', function () {
    //const today = new Date().getDate();
    const today = 12;
    const calendar = document.querySelector('.calendar-grid');
    const landingDiv = document.querySelector('#landing-page');
    const calendarDiv = document.querySelector('#calendar-page');
    const presentDiv = document.querySelector('#present-page');

    // Generate 24 days dynamically
    for (let i = 1; i <= 24; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.setAttribute('data-day', i);
        dayElement.textContent = i;

        calendarDays[i-1] = CreateAndAssingDayData(i);

        if (i > today) {
            // Days in the future are locked
            dayElement.classList.add('locked');
            dayElement.addEventListener('click', () => {
                alert("Eeepaaa on vaaas? T'haurás d'esperar :P")
            });
        } else if (i === today) {
            // Today is unlocked but not opened
            dayElement.classList.add('unlocked');
            dayElement.addEventListener('click', () => openDay(i));
        } else {
            // Past days are opened
            dayElement.classList.add('opened');
            dayElement.addEventListener('click', () => openDay(i));
        }

        calendar.appendChild(dayElement); // Add the day to the calendar grid
    }
    const startButton = document.querySelector('#start-button');
    const backButton = document.querySelector('#back-button');

    startButton.addEventListener('click', ()=>{
        landingDiv.style.display = "none";
        calendarDiv.style.display = "flex";
    })

    backButton.addEventListener('click', ()=>{
        calendarDiv.style.display = "flex";
        presentDiv.style.display = "none";
        changeVideo('');
    })
});

let ytPlayer;

function onYouTubeIframeAPIReady() {
    // Initialize the YouTube player in the placeholder div
    ytPlayer = new YT.Player('youtube-player', {
        height: '315', // Height of the player
        width: '560',  // Width of the player
        videoId: 'QJ5DOWPGxwg', // YouTube video ID
        playerVars: {
            autoplay: 0, // Do not autoplay when loaded
            controls: 1, // Show playback controls
            modestbranding: 1, // Minimal YouTube branding
        }
    });
}

function changeVideo(newVideoId) {
    if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
        ytPlayer.loadVideoById(newVideoId);
    } else {
        console.error("Player is not initialized or not ready yet.");
    }
}

function openDay(day) {
    
    const dayElement = document.querySelector(`.day[data-day="${day}"]`);
    if (dayElement) {
        dayElement.classList.remove('unlocked');
        dayElement.classList.add('opened');
    }

    accessDay(calendarDays[day -1]);
}

function accessDay(dayObject){
    const calendarDiv = document.querySelector('#calendar-page');
    const presentDiv = document.querySelector('#present-page');

    calendarDiv.style.display = "none";
    presentDiv.style.display = "flex";

    const dayImage = document.querySelector('.day-image');
    dayImage.src = dayObject.image;
    const dayTitle = document.querySelector('#day-title');
    dayTitle.textContent = dayObject.title;
    const dayInfo = document.querySelector('#day-text');
    dayInfo.textContent = dayObject.description;
    changeVideo(dayObject.source);
}

function CreateAndAssingDayData(dayNum){
    
    const currentDay = dayData[dayNum -1]; 
    return new Day(currentDay.day, currentDay.title, currentDay.description, currentDay.image, currentDay.source);
}


const dayData = [
    {day : "1",
        title : "It's begining to...",
        description : "Per començar el mes no se m'ha ocorregut millor idea que aquest temón. Literalment és arribar a l'1 de desembre i tot comença a fer olor de Nadal. Espero que t'agradi <3",
        image : "./images/fotodia1.jpeg",
        source : 'QJ5DOWPGxwg',
    },
    {day : "2",
        title : "Primer dilluns del mes!",
        description : "Seguim i comencem la setmana amb una cosa una mica més catalana, ànims i escalf que ja ho teenss! Per ajudar-te amb els dilluns et posaré una foto del tete :P",
        image : "./images/fotodia2.jpeg",
        source : 'YlWMGfY7b34',
    },
    {day : "3",
        title : "Llença't!",
        description : "Dia de Sant Francesc Xavier (jeje), canviem una mica de tema que ho cremarem abans d'hora! Per seguir la setmana, tremendo tema de Lax'n'Busto.",
        image : "./images/fotodia3.jpeg",
        source : 'GY7JWIIHtlQ'
    },
    {day : "4",
        title : "MARTTEIN - EL RUBIO",
        description : "Una mica per la puta cara, pero com que és el meu calendari, poso el que vull jeje. Tema bizarro perque descobreixis coses noves (videoclip raro de cojones també)",
        image : "./images/fotodia4.jpeg",
        source : 'A89J1BnTBfg'
    },
    {day : "5",
        title : "La Cabra",
        description : "Cal que digui res? Jo crec que no, simplement disfruta. Ja em donaràs les gràcies.",
        image : "./images/fotodia5.jpeg",
        source : 'cF1Na4AIecM'
    },
    {day : "6",
        title : "Som-hi(?)",
        description : "Estarem marxant a algun lloc? Mmmm, espero que si i que ho escoltem junts <3 (Si no es aixi almenys gaudeix fent alguna cosa xula jeje)",
        image : "./images/fotodia6.jpeg",
        source : 'qugVVyNL0Oc'
    },
    {day : "7",
        title : "Christmas is All Around",
        description : "Reconeixes d'on és aquesta cançó? Si ho encertes et convido al que vulguis :P (PD: Repetimos?)",
        image : "./images/fotodia7.jpeg",
        source : 't_KI-mRyE_0'
    },
    {day : "8",
        title : "Sultans Of Swing",
        description : "De nou, espero que puguem escoltar-la junts a la carretera tornant cap a casa, i si no és aixi, que pensis en la ruteta que vam tenir fins a Toulouse! (Fotos incloses...)",
        image : "./images/fotodia8.jpeg",
        source : '0fAQhSRLQnM'
    },
    {day : "9",
        title : "Gas Gas Gaaass",
        description : "Aqui et deixo al teu colegon jeje, i a part un combo musical un tant estrany per donar-te forces!",
        image : "./images/fotodia9.jpeg",
        source : 'EzU0ofo3jOs',
    },
    {day : "10",
        title : "Ghost Town ",
        description : "Aquesta foto nostra m'ha recordat a la tremenda portada d'aquest álbum (casi xavier, casi). Segur que l'has escoltat mil cops, però una vegada més no pot fer mal.",
        image : "./images/fotodia10.jpeg",
        source : 'qAsHVwl-MU4'
    },
    {day : "11",
        title : "Som-hi BARÇA!",
        description : "És dia de partit i el cos ho sap! Olele, Olala!!!",
        image : "./images/fotodia11.jpeg",
        source : 'pQ791J7N068'
    },
    {day : "12",
        title : "A-Punk",
        description : "De nou descobrint cremita per a tu. Si et mola el grup en te varies de goooood. Aixi com a dato, me'ls va descobrir en Marià, altres coses no pero coneixement musical en té un rato el tio.",
        image : "./images/fotodia12.jpeg",
        source : '_XC2mqcMMGQ'
    },
    {day : "13",
        title : "Divieernees",
        description : "Pura cultura de la partitura, orfebrería de corxeres. Simplement gaudeixi! ",
        image : "./images/fotodia13.jpeg",
        source : 'e74C11fdjak'
    },
    {day : "14",
        title : "BAAAAAAUN",
        description : "Too faaalling in loooooove... Segur que la tens cremadisima pero no podia faltar, t'estimooooo <3 <3 <3",
        image : "./images/fotodia14.jpeg",
        source : 'wVRF3SqLUi0'
    },
    {day : "15",
        title : "La Marató!",
        description : "Avui es la Marató de TV3, probablement fa anys que no veig un sol segon del programa, pero tremendos discos que es treuen els màquines. Escoltat alguns fragments a youtube, jo te'n deixo un per aqui :P",
        image : "./images/fotodia15.jpeg",
        source : 'Z5joBD-Ade8'
    },
    {day : "16",
        title : "Mi cara cuando",
        description : "Mi cara cuando és dilluns un altre puto cop... Molts besitos i ànimsss!!! Un rap duro con cojones per que condueixis la mala llet que deus portar.",
        image : "./images/fotodia16.jpeg",
        source : 'w2sSx6FNz80'
    },
    {day : "17",
        title : "Si morís demà...",
        description : "Buscaria al pibón que em va descobrir aquesta cançó i li faria mooooooltes cosetes...",
        image : "./images/fotodia17.jpeg",
        source : '36kJqctKaSY'
    },
    {day : "18",
        title : "Zarcillos de plata | Judeline",
        description : "Descobriment recent (no se si la coneixies ja), temarral casi tant bonic com tu. Si t'agrada aquesta, tot el seu últim disc és una joia.",
        image : "./images/fotodia18.jpeg",
        source : 'CEc4uljjbwY'
    },
    {day : "19",
        title : "Estic conteent",
        description : "Ja casi acabem la setmana i també ja casi arribeeeem al final del calendari!!! Alegria pal cuerpooo, molts ànimsssss",
        image : "./images/fotodia19.jpeg",
        source : '3LSA4xXWcUM'
    },
    {day : "20",
        title : "Debate serio",
        description : "Com es pot ser tan bonica amb una gerra de litre de cervesa a la mà? Per acabar la setmana et poso una versió d'aquesta nadala a la que em recorda el teu somriure jeje ",
        image : "./images/fotodia20.jpeg",
        source : '3ViDtcWxHwA'
    },
    {day : "21",
        title : "Barça vs Patético",
        description : "Dia de Partit! Últim partit de l'any contra un equip marrano de pebrots! BAAAAAAR SA! (Que miras xinorri?)",
        image : "./images/fotodia21.jpeg",
        source : 'PBBnqpfJLyM'
    },
    {day : "22",
        title : "luther",
        description : "Potser a aquestes altures ja la tens cremada, però no podia no posar-la i a més amb aquesta foto GOOOOOOD. T'estimooo!!!",
        image : "./images/fotodia22.png",
        source : 'HfWLgELllZs'
    }, 
    {day : "23",
        title : "Mi cara cuando",
        description : "Mi cara cuando veo tu tremendo culamen... Dale duro a l'últim dilluns abans de Nadal! Que vagi molt bé el diaaa <3",
        image : "./images/fotodia23.jpeg",
        source : 'U19TQhm4dyM'
    },
    {day : "24",
        title : "Bon Nadal!",
        description : "Arribem a l'últim dia! Espero que hagis gaudit d'aquest petit obsequi que he fet amb tot el carinyo del món! T'estimo moltíssim i m'encanta compartir coses noves amb tu <3",
        image : "./images/fotodia24.jpeg",
        source : 'STnpL1COEyI'
    },
]