import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Елена Петрова",
    location: "Москва",
    tour: "Альпийские Вершины",
    rating: 5,
    text: "Незабываемое путешествие! Организация на высшем уровне, каждая деталь продумана. Горные пейзажи просто завораживают. Обязательно вернемся снова!",
    date: "Август 2024"
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    location: "Санкт-Петербург",
    tour: "Тропический Рай",
    rating: 5,
    text: "Мальдивы — это действительно рай на земле! Спасибо команде за идеальный отпуск. Отель превзошел все ожидания, сервис безупречный.",
    date: "Февраль 2024"
  },
  {
    id: 3,
    name: "Анна Волкова",
    location: "Казань",
    tour: "Исторические Сокровища",
    rating: 5,
    text: "Италия покорила наши сердца! Экскурсионная программа была насыщенной и интересной. Гид — просто профессионал своего дела. Всем рекомендую!",
    date: "Май 2024"
  },
  {
    id: 4,
    name: "Михаил Кузнецов",
    location: "Новосибирск",
    tour: "Северное Сияние",
    rating: 5,
    text: "Увидеть северное сияние было моей мечтой! Исландия невероятна, а команда сделала всё, чтобы мы увидели это чудо природы. Спасибо за мечту!",
    date: "Октябрь 2024"
  },
  {
    id: 5,
    name: "Ольга Смирнова",
    location: "Екатеринбург",
    tour: "Восточная Мудрость",
    rating: 5,
    text: "Япония — страна контрастов и гармонии. Цветущая сакура, древние храмы, современные города — всё это оставило неизгладимые впечатления.",
    date: "Апрель 2024"
  },
  {
    id: 6,
    name: "Алексей Павлов",
    location: "Краснодар",
    tour: "Сафари в Саванне",
    rating: 5,
    text: "Сафари в Кении — это приключение всей жизни! Видеть животных в дикой природе — непередаваемые эмоции. Всё было организовано отлично!",
    date: "Сентябрь 2024"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Отзывы Путешественников</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят наши клиенты о путешествиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 bg-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-3 italic">«{review.tour}»</p>

                <p className="text-foreground leading-relaxed mb-4">
                  {review.text}
                </p>

                <p className="text-xs text-muted-foreground">{review.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/50 px-6 py-4 rounded-lg">
            <Icon name="Award" size={32} className="text-primary" />
            <div className="text-left">
              <p className="font-semibold text-lg text-foreground">Более 500 довольных клиентов</p>
              <p className="text-sm text-muted-foreground">Рейтинг 4.9 из 5.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
