function createDropdown() {
    var select = document.getElementById("linkSelect");
    select.onchange = navigate;

    // Создаем опции
    var options = [
        { value: "", text: "Выберите ссылку" },
        { value: "https://sasha1985y.github.io/TypeScript-examples/dist/bundle.html", text: "пример" },
    ];

    options.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
    });
}

function navigate() {
    var select = document.getElementById("linkSelect");
    var url = select.value;
    if (url) {
        window.location.href = url; // Переход по выбранной ссылке
    }
}


function getExample() {
    const codeExampleBtn = document.querySelector(".code-example-btn");
    const codeExample = document.querySelector(".code-example");
    
    codeExampleBtn.addEventListener('click', () => {
        codeExample.classList.toggle("visually-hidden")
    })
}

// Вызываем функцию для создания dropdown при загрузке страницы
window.onload = createDropdown;