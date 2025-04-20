export default function Math({num1 = 5, num2 = 15}) {
    function sum(num1, num2) {
        return num1 + num2;
    }


    return <div>
        <p>Результат: {sum(num1, num2)}</p>
    </div>
}