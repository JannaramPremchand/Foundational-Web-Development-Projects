const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const apiKey = 'your_api_key_here';

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

async function getChatGPTResponse(prompt) {
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) {
            // Handle HTTP errors
            if (response.status === 429) {
                throw new Error("Rate limit exceeded. Try again later.");
            } else {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }

        const data = await response.json();
        if (data.choices && data.choices.length > 0) {
            return data.choices[0].message.content;
        } else {
            throw new Error("Unexpected API response format.");
        }
    } catch (error) {
        console.error('Error:', error);
        return "Sorry, I couldn't process your request.";
    }
}

function wishMe() {
    const day = new Date();
    const hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = async (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    await takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

async function takeCommand(message) {
    console.log('Command Received:', message);

    if (message.includes('ask') || message.includes('tell me')) {
        const response = await getChatGPTResponse(message);
        speak(response);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak("The current time is " + time);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak("Today's date is " + date);
    } else if (message.includes('change background to red')) {
        document.body.style.background = "red";
        speak("Changing background to red...");
    } else if (message.includes('change background to blue')) {
        document.body.style.background = "blue";
        speak("Changing background to blue...");
    } else if (message.includes('change background to green')) {
        document.body.style.background = "green";
        speak("Changing background to green...");
    } else {
        const response = await getChatGPTResponse(message);
        speak("I found some information for " + message + ": " + response);
    }
}
