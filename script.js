function Pizzadelivery (name, open, close, area ) {
    this.name = name,
    this.workingHours = `с ${open} по ${close}`,
    this.menu = ['маргарита', 'пеперони', 'гавайская', 'вегетарианская', '4 сыра', 'фирменная', 'итальянская'],
    this.area = area,
    this.searchMenu = function () {
        const choice = prompt('Какую пиццу вы хотите заказать?')
        if (this.menu.includes(choice)) {
            alert('Ждите пиццу через 30 мин!');
        } else {
            alert('Извините, мы только открылись. Такую пиццу пока не готовим.');
            pizza.searchMenu();
        }
    },
    this.checkHours = function () {
        const data = new Date();
        const dataHours = data.getHours();
        if (dataHours > open && dataHours <= close) {
            console.log('Заведение открыто')
            pizza.searchMenu();
        } else {
            alert('Извините, мы закрыты.')
        }
    },
    this.checkArea = function () {
        const areaQuestion = confirm(`Вы живете в ${this.area}, Республика Беларусь?`);
        if(areaQuestion) {
            console.log('Выберите пиццу');
            pizza.checkHours(); 

        }else {
            alert('Доставляем пиццу по Минску!')
        }
        
    }
}

const pizza = new Pizzadelivery ('PizzaTime', 12, 24, 'Минск');
console.log(pizza);
pizza.checkArea();


