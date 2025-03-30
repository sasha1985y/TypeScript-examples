if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {

        function createDropdown() {
            var select = document.getElementById("linkSelect");
            if (select === null) {
                return
            }else {
                select.onchange = navigate;
        
                // Создаем опции
                var options = [
                    { value: "", text: "Выберите ссылку" },
                    { value: "https://sasha1985y.github.io/TypeScript-examples/dist/index.html", text: "пример" },
                ];
            
                options.forEach(function(option) {
                    var opt = document.createElement("option");
                    opt.value = option.value;
                    opt.textContent = option.text;
                    if (select === null) {
                        return
                    }else {
                        select.appendChild(opt);
                    }
                });
            }
        
        }
        
        function navigate() {
            var select = document.getElementById("linkSelect");
            if (select === null) {
                return
            }else {
                var url = select.innerText;
            }
            if (url) {
                window.location.href = url; // Переход по выбранной ссылке
            }
        }
        
        
        function getExample() {
            const codeExampleBtn = document.querySelector(".code-example-btn");
            const codeExample = document.querySelector(".code-example");

            if (codeExampleBtn === null || codeExample === null) {
                return
            }else {               
                codeExampleBtn.addEventListener('click', () => {
                    codeExample.classList.toggle("visually-hidden")
                })
            }
            
        }
        
        // Вызываем функцию для создания dropdown при загрузке страницы
        window.onload = createDropdown;
    });
}
