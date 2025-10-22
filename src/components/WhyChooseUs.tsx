import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    id: 1,
    icon: "Award",
    title: "10 лет опыта",
    description: "Более десяти лет организуем незабываемые путешествия по всему миру"
  },
  {
    id: 2,
    icon: "Users",
    title: "Индивидуальный подход",
    description: "Персональный менеджер для каждого клиента и учёт всех ваших пожеланий"
  },
  {
    id: 3,
    icon: "ShieldCheck",
    title: "Полная безопасность",
    description: "Все туры застрахованы, работаем официально по договору"
  },
  {
    id: 4,
    icon: "HeadphonesIcon",
    title: "Поддержка 24/7",
    description: "Всегда на связи во время вашего путешествия в любой точке мира"
  },
  {
    id: 5,
    icon: "Percent",
    title: "Лучшие цены",
    description: "Прямые договоры с отелями и авиакомпаниями — цены без накруток"
  },
  {
    id: 6,
    icon: "Heart",
    title: "Любовь к деталям",
    description: "Продумываем каждую мелочь, чтобы ваше путешествие было идеальным"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Почему Выбирают Нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы делаем всё, чтобы каждое путешествие с нами было особенным
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={feature.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Довольных клиентов</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Стран мира</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9</div>
            <p className="text-muted-foreground">Средний рейтинг</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">Повторных клиентов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
