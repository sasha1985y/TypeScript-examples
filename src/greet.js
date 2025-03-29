if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('root');
        function greet(name) {
            if (root) {
                root.textContent = "Hello, ".concat(name, "!"); // Используйте обратные кавычки для шаблонных строк
            }
            else {
                console.log("Root element not found");
            }
        }
        greet("govno");
    });
}
else {
    console.log("This code is running outside of a browser environment.");
}
//console.log(greet("Govno!"));
