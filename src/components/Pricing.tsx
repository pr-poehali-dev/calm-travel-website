import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const pricingPlans = [
  {
    id: 1,
    name: "Эконом",
    price: "от 45 000 ₽",
    description: "Идеально для бюджетных путешествий",
    features: [
      "Отель 3* с завтраками",
      "Трансфер аэропорт-отель",
      "Базовая медицинская страховка",
      "Помощь в оформлении визы",
      "Электронный путеводитель"
    ],
    icon: "Plane",
    popular: false
  },
  {
    id: 2,
    name: "Комфорт",
    price: "от 75 000 ₽",
    description: "Оптимальное соотношение цены и качества",
    features: [
      "Отель 4* с полупансионом",
      "Все трансферы включены",
      "Расширенная страховка",
      "Оформление визы",
      "3 групповые экскурсии",
      "Русскоговорящий гид",
      "Поддержка 24/7"
    ],
    icon: "Palmtree",
    popular: true
  },
  {
    id: 3,
    name: "Премиум",
    price: "от 125 000 ₽",
    description: "Роскошное путешествие без компромиссов",
    features: [
      "Отель 5* all inclusive",
      "VIP трансферы",
      "Премиум страховка",
      "Услуги консьержа",
      "Индивидуальные экскурсии",
      "Личный гид-переводчик",
      "Приоритетная поддержка",
      "Фото-видео сопровождение"
    ],
    icon: "Crown",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Цены и Пакеты</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите пакет, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative flex flex-col ${
                plan.popular 
                  ? 'border-primary border-2 shadow-xl scale-105' 
                  : 'hover:shadow-lg'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Популярный выбор
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={plan.icon} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">/ чел</span>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Выбрать пакет
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={40} className="text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Индивидуальный тур на заказ</h3>
              <p className="text-muted-foreground">
                Хотите что-то особенное? Мы создадим уникальное путешествие специально для вас, 
                учитывая все ваши пожелания и предпочтения.
              </p>
            </div>
            <Button size="lg" className="flex-shrink-0">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
