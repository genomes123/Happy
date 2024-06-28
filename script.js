function showBirthdayMessage() {
    const messages = [
        "Бажаю тобі здоров'я, щастя та успіхів у всіх починаннях!",
        "Нехай кожен день буде наповнений радістю та посмішками!",
        "Бажаю здійснення всіх твоїх мрій та бажань!",
        "Нехай цей рік буде найкращим у твоєму житті!",
        "Бажаю тобі багато любові, дружби та гарних моментів!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];
    document.getElementById('greeting').textContent = message;
}
