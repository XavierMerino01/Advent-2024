
class Day{
    constructor(day, title, description, image){
        this.day = day;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}

let calendarDays = [];

document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().getDate();
    const calendar = document.querySelector('.calendar-grid');
    const landingDiv = document.querySelector('#landing-page');
    const calendarDiv = document.querySelector('#calendar-page');

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

    startButton.addEventListener('click', ()=>{
        landingDiv.style.display = "none";
        calendarDiv.style.display = "block";
    })
});

function onYouTubeIframeAPIReady() {
    // Initialize the YouTube player in the placeholder div
    new YT.Player('youtube-player', {
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

    const dayTitle = document.querySelector('#day-title');
    dayTitle.textContent = dayObject.title;
    const dayInfo = document.querySelector('#day-text');
    dayInfo.textContent = dayObject.description;
}

function CreateAndAssingDayData(dayNum){
    
    const currentDay = dayData[dayNum -1]; 
    return new Day(currentDay.day, currentDay.title, currentDay.description, currentDay.image);
}


const dayData = [
    {day : "1",
        title : "It's begining to...",
        description : "Per començar el mes no se m'ha ocorregut millor idea que aquest temón. Literalment és arribar a l'1 de desembre i tot comença a fer olor de Nadal. Espero que t'agradi",
        image : "url.com"
    },
    {day : "2",
        title : "Canço X del dia 2",
        description : "Baun tu falin in lof",
        image : "https(sadf).com"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
    {day : "0",
        title : "Empty",
        description : "Empty",
        image : "Empty"
    },
]