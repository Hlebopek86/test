let money = prompt ("Ваш бюджет на месяц?" , "Сумма");
let time = prompt ("Введите дату в формате YYYY-MM-DD" , "2021-11-21");
let appData = {
    butzhet:money,
    timeData:time,
    expenses: { //объект с обязательными расходами
        obStsatRas: prompt ("Введите обязательную статью расходов в этом месяце" , "Комуналка"),
        summaItogo: prompt ("Во сколько обойдется?" , "Сумма расходов") 
    },
    optionalExpenses: { //объект с необязательными расходами

    },
    income: [],
    savings: false
};
let butOdinDen = alert((money-appData.expenses.summaItogo) / 30 , "Бюджет на 1 день за минусом обязательных расходов.");