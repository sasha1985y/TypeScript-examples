import './css/index.css';

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const root = document.getElementById('root') as HTMLElement | null;

        function greet(name: string): string | void {
            if (root) {
                root.textContent = `Hello, ${name}!`; // Используйте обратные кавычки для шаблонных строк
            } else {
                console.log("Root element not found");
            }
        }

        greet("govno");
    });
} else {
    console.log("This code is running outside of a browser environment.");
}


//console.log(greet("Govno!"));