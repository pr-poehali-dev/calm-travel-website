import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface Tour {
  id: number;
  title: string;
  country: string;
  image: string;
  price: number;
  duration: string;
  description: string;
  rating: number;
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Горные вершины",
    country: "Швейцария",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/acbafad1-1007-41de-b689-7793b41b6d62.jpg",
    price: 125000,
    duration: "7 дней",
    description: "Незабываемое путешествие по альпийским вершинам",
    rating: 4.9
  },
  {
    id: 2,
    title: "Тропический рай",
    country: "Мальдивы",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/51dc1d6f-8759-451a-8219-e626d77b5b07.jpg",
    price: 180000,
    duration: "10 дней",
    description: "Белоснежные пляжи и кристальная вода",
    rating: 5.0
  },
  {
    id: 3,
    title: "Старый город",
    country: "Италия",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/d2f452d7-8cf1-462f-861b-5d771165aed4.jpg",
    price: 95000,
    duration: "5 дней",
    description: "Погружение в историю и культуру Европы",
    rating: 4.8
  }
];

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    text: "Невероятное путешествие! Всё организовано на высшем уровне. Обязательно вернусь снова.",
    rating: 5,
    tour: "Горные вершины"
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    text: "Мальдивы превзошли все ожидания. Спасибо за незабываемый отдых!",
    rating: 5,
    tour: "Тропический рай"
  },
  {
    id: 3,
    name: "Елена Иванова",
    text: "Италия — это любовь! Экскурсии были потрясающими, гид очень внимательный.",
    rating: 5,
    tour: "Старый город"
  }
];

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [date, setDate] = useState<Date>();
  
  const countries = ["all", ...Array.from(new Set(tours.map(tour => tour.country)))];
  
  const filteredTours = tours.filter(tour => 
    selectedCountry === "all" || tour.country === selectedCountry
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Plane" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Travel Adventures</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#tours" className="text-foreground hover:text-primary transition-colors">Туры</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Фото</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Откройте мир с нами
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Путешествия, которые меняют жизнь. Создаём незабываемые впечатления для вас.
            </p>
            <div className="flex gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Compass" size={20} className="mr-2" />
                Выбрать тур
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Каталог туров</h2>
          <p className="text-center text-muted-foreground mb-12">Найдите идеальное путешествие</p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Выберите страну" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все страны</SelectItem>
                {countries.filter(c => c !== "all").map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-[200px] bg-white justify-start text-left font-normal">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {date ? format(date, "PPP", { locale: ru }) : "Выберите дату"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white text-foreground">
                    <Icon name="Star" size={14} className="mr-1 fill-yellow-400 text-yellow-400" />
                    {tour.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground text-sm">
                    <Icon name="MapPin" size={16} />
                    <span>{tour.country}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-muted-foreground mb-4">{tour.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">{tour.price.toLocaleString('ru-RU')} ₽</p>
                      <p className="text-sm text-muted-foreground">{tour.duration}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея путешествий</h2>
          <p className="text-center text-muted-foreground mb-12">Моменты, которые вдохновляют</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            {tours.map((tour, index) => (
              <div 
                key={tour.id} 
                className="relative overflow-hidden rounded-lg group cursor-pointer animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{tour.title}</h3>
                    <p className="text-sm">{tour.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">Что говорят наши путешественники</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.id} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.tour}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прозрачные цены</h2>
          <p className="text-center text-muted-foreground mb-12">Без скрытых платежей</p>
          
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Перелёт включён</h3>
                  <p className="text-muted-foreground">Билеты туда и обратно</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Проживание</h3>
                  <p className="text-muted-foreground">Отели 4-5 звёзд с завтраком</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Экскурсии</h3>
                  <p className="text-muted-foreground">Профессиональные гиды</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">Страховка</h3>
                  <p className="text-muted-foreground">Полное покрытие</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">Цены указаны за человека при двухместном размещении</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Получить консультацию
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" size={24} />
                <h3 className="font-bold text-lg">Travel Adventures</h3>
              </div>
              <p className="text-white/70">Путешествия, которые меняют жизнь</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#tours" className="hover:text-white transition-colors">Туры</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Фото</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@travel.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="text-white hover:text-white/70">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-white/70">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-white/70">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 Travel Adventures. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
