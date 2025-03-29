import './css/index.css';

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('root');
        
        class Person {
            name: string;
        
            constructor(name: string) {
                this.name = name;
            }
        
            introduce(): string { // Изменяем тип возвращаемого значения на string
                return `Hi, I am ${this.name}`; // Используем обратные кавычки
            }
        }
        
        class Employee extends Person {
            position: string;
        
            constructor(name: string, position: string) {
                super(name);
                this.position = position;
            }
        
            showPosition(): string { // Изменяем тип возвращаемого значения на string
                return `My position is ${this.position}`; // Используем обратные кавычки
            }
        }
        
        // Создаем экземпляр класса Employee
        const employee = new Employee("Alice", "Software Developer");

        if (root) {
            root.textContent = `Имя: ${employee.introduce()}, должность: ${employee.showPosition()}`; // Используем обратные кавычки
        } else {
            alert("Root element not found");
        }
        
        // Вызов методов
        console.log(employee.introduce()); // Выводим результат в консоль
        console.log(employee.showPosition()); // Выводим результат в консоль
    });
} else {
    alert("This code is running outside of a browser environment.");
}
