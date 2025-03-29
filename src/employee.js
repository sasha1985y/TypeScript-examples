var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('root');
        var Person = /** @class */ (function () {
            function Person(name) {
                this.name = name;
            }
            Person.prototype.introduce = function () {
                return "Hi, I am ".concat(this.name); // Используем обратные кавычки
            };
            return Person;
        }());
        var Employee = /** @class */ (function (_super) {
            __extends(Employee, _super);
            function Employee(name, position) {
                var _this = _super.call(this, name) || this;
                _this.position = position;
                return _this;
            }
            Employee.prototype.showPosition = function () {
                return "My position is ".concat(this.position); // Используем обратные кавычки
            };
            return Employee;
        }(Person));
        // Создаем экземпляр класса Employee
        var employee = new Employee("Alice", "Software Developer");
        if (root) {
            root.textContent = "\u0418\u043C\u044F: ".concat(employee.introduce(), ", \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C: ").concat(employee.showPosition()); // Используем обратные кавычки
        }
        else {
            alert("Root element not found");
        }
        // Вызов методов
        console.log(employee.introduce()); // Выводим результат в консоль
        console.log(employee.showPosition()); // Выводим результат в консоль
    });
}
else {
    alert("This code is running outside of a browser environment.");
}
