
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
    const today = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const DECEMBER = 11;
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

        if (currentMonth !== DECEMBER) {
            dayElement.classList.add('locked');
            dayElement.addEventListener('click', () => {
                alert("Aquest calendari només està disponible al desembre!");
            });
        } else if (i > today) {
            dayElement.classList.add('locked');
            dayElement.addEventListener('click', () => {
                alert("Eeepaaa on vaaas? T'haurás d'esperar :P")
            });
        } else if (i === today) {
            dayElement.classList.add('unlocked');
            dayElement.addEventListener('click', () => openDay(i));
        } else {
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
        title: "JA HI TORNEM A SER!!!",
        description : " Com no podia ser d'altre manera, aquí tens el teu calendari d'advent fet amb molt d'amor. Perdó per repetir pero hem de començar amb la millor cançó de Nadal. Espero que t'agradi <3",
        image : "./images/fotodia1.jpeg",
        source : 'QJ5DOWPGxwg',
    },
    {day : "2",
        title : "Seguiiiim!",
        description : "Dimarts dia 2! Actualment estic absolutament enganxat a aixó xddd, si no et convenç pots escoltar-te l'álbum de 'Nadal Mix 2023' que segur que alguna t'agradaaa!",
        image : "./images/fotodia2.jpeg",
        source : 'G4Y1XL_sqT0',
    },
    {day : "3",
        title : "Sant ??????",
        description : "M'han dit que aquest tema esta prou bé, a mi no m'acaba de convèncer però bueno, per variar una mica! detrasdetiiiiiiiiiivoooooy    PD: Pots ampliar la pagina per llegir tremendos factos del cotxe jajajajjajaj",
        image : "./images/fotodia3.jpeg",
        source : 'fLmQbJ4SDTA'
    },
    {day : "4",
        title : "Las minitas",
        description : "Fotiki amb les panas i temazooo per acompanyar. GAAASSS que ja es dijoousss :)",
        image : "./images/fotodia4.jpeg",
        source : 'vz_vU53JvvI'
    },
    {day : "5",
        title : "Nerviiitsss??!??!",
        description : "Tornem al Nadal i recuperem una mica la vibra perque s'acosten uns dies... BOOOOOOFFF!!!! Fotliii dur al divendres que ja ho teniim",
        image : "./images/fotodia5.jpeg",
        source : '4EvZOXEoJ84'
    },
    {day : "6",
        title : "LET'S GOOOO!",
        description : "Are we nervous honey? On our way to fucking London!!!! LOVE YOUUUU",
        image : "./images/fotodia6.jpeg",
        source : 'XqLTe8h0-jo'
    },
    {day : "7",
        title : "Here we are TOOOMAA",
        description : "Let's speak English for our time here jeje, I LOVE when you sing this song, can i get a taste? Also, AMAZING night yesterday thanks a lot for everything <3",
        image : "./images/fotodia7.jpeg",
        source : 'gset79KMmt0'
    },
    {day : "8",
        title : "Surprise surpriseeee",
        description : "To celebrate one of the best surprises I've ever recieved! What a concert jeje. Hope you enjoy whatever we are doing today, it's not gonna be as amazing as the picture but we will be fine, I promise :P",
        image : "./images/fotodia8.jpeg",
        source : 'G5YwhjCywvw'
    },
    {day : "9",
        title : "CYA Soon London :/",
        description : "Back to reality... but hey, we have Christmas to look forward to! Let's enjoy this freakin bangeeer",
        image : "./images/fotodia9.jpeg",
        source : 'yqrAPOZxgzU',
    },
    {day : "10",
        title : "MA TA TE IU",
        description : "Tornem a la rutina :( estic segur que ha set un viatge increïble i amb ganes del seguent jaaaaa... La cançó no te res a veure pero m'encanta i espero que t'animi la rutina",
        image : "./images/fotodia10.jpeg",
        source : 'zOdKS_ayMyM'
    },
    {day : "11",
        title : "Oleee la mamii",
        description : "Per acompanyar un tema que em fa pensar molt en la teva mare (I que li encanta a la meva). Quan estava el viena em va mencionar el poema que es menciona en la cançó: Caminante no hay camino, se hace camino al andar...",
        image : "./images/fotodia11.jpeg",
        source : '8tHLw8FHlCE'
    },
    {day : "12",
        title : "Escapi qui escapi",
        description : "Gràcies per compartir aquests moments amb els meus amiicsss, tant de bo no sigui la última ni la penúltima que fem cosetes aixi. La cançó nose si t'agrada gaire pero a mi s'em posa dins les tres neurones que em queden i no paroooo....",
        image : "./images/fotodia12.jpeg",
        source : 'wm8cyg-wgwQ'
    },
    {day : "13",
        title : "FUUURBOOOO",
        description : "Dia de partiiit! Tant de bo estem veien-ho juntetssss. BAAAAAARRRRÇA! Temarraaaal per agafar energia! ",
        image : "./images/fotodia13.jpeg",
        source : 'TV2U_Nz4oU8'
    },
    {day : "14",
        title : "BOOOOOF",
        description : "Quin foton, probablement de les meves preferides d'aquest any, i per tant, l'acompanyo amb una de les meves cançons més repetides.",
        image : "./images/fotodia14.jpeg",
        source : '8P09rxVaQAM'
    },
    {day : "15",
        title : "El Mago Flop",
        description : "He decidit que aquesta setmana tocarà una foto familiar diferent cada diaaa. (Són les que he pogut trobar a la galeria) Molts ànimsss que ja queda pooooc de calendari!",
        image : "./images/fotodia15.jpeg",
        source : 'Z5joBD-Ade8'
    },
    {day : "16",
        title : "¿¿¿¿¿?????",
        description : "M'expliques com es pot ser tant bonica siusplau? Whatsapp al 618480816, gràcies. Fotiki amb el patron i tema que crec que et recordara a ell jeje",
        image : "./images/fotodia16.jpeg",
        source : '7hx4gdlfamo'
    },
    {day : "17",
        title : "La Patrona",
        description : "Aquest any heu visitat els teatres un tou de cops! I jo algun que altre també de rebot :P Tant de bo un dia poder cuinar la meitat de bé que ella, anda que no et molaria...",
        image : "./images/fotodia17.jpeg",
        source : 'v_yoiiABDrM'
    },
    {day : "18",
        title : "Aventures varies",
        description : "La foto que he vist amb el teu germà que més gràcia mha fet, espero que a tu també i que la cançó, encara que té poc merit escollirla, la gaudeixis moltíssim un altre cop!",
        image : "./images/fotodia18.jpeg",
        source : 'wOOY1cLH7F8'
    },
    {day : "19",
        title : "Latin Girls",
        description : "Una mica per la cara jajjajajajaa pero tenia la foto i mha fet ilu afegirla aqui amb aquesta cançó que a data de fer el calendari no pares de repetiiiiiir",
        image : "./images/fotodia19.jpeg",
        source : '2V1exaAqx-k'
    },
    {day : "20",
        title : "Quin regal :)",
        description : "No se si té molt sentit, pero aquesta foto m'emociona una barbaritat. Encara que potser no n'ets del tot conscient, sento que mai podré agrair-te prou tot el que fas per mi, i per la meva familia. T'estimo!",
        image : "./images/fotodia20.jpeg",
        source : 'oZo_6_RbRg8'
    },
    {day : "21",
        title : "Los chavaaaleee",
        description : "No hi surt tothooom! Pero m'encantava la foto jajajajajja tremenda experiència viure per fi la festa major amb vosaltrees. Tant de bo repetiir molts anys mes! MÉS FOC!",
        image : "./images/fotodia21.jpeg",
        source : 'loL3lDftQ98'
    },
    {day : "22",
        title : "Tic Tac",
        description : "Ja s'acaba això! Aqui tens una foto amb el coleguita que no podia faltar, segur que et troba a faltar! Rematem-ho amb música de nadal, com toca, que se m'ha anat una mica de les mans la temàtica.",
        image : "./images/fotodia22.jpeg",
        source : '5modsEYHaMg'
    }, 
    {day : "23",
        title : "Perque no?",
        description : "Saco random, tant la foto, però sobretot la cançó, que he trobat per la cara, i no podia no posarles. DISFRUTI!",
        image : "./images/fotodia23.jpeg",
        source : '35yXRbzf7rE'
    },
    {day : "24",
        title : "Bon Nadal!",
        description : "Hem arribat al final! Espero que hagis gaudit d'aquest petit obsequi que he renovat amb tot el carinyo del món! T'estimo moltíssim i m'encanta poder compartir el Nadal de nou amb tu <3",
        image : "./images/fotodia24.jpeg",
        source : '-FL16hvG4X0'
    },
]