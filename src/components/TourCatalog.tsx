import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface TourCatalogProps {
  filters: {
    country: string;
    month: string;
  };
  setFilters: (filters: { country: string; month: string }) => void;
}

const tours = [
  {
    id: 1,
    title: "Альпийские Вершины",
    country: "Швейцария",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/7490531f-de0e-4ad9-9d0e-0fbb796bd3d2.jpg",
    duration: "7 дней",
    months: ["Июнь", "Июль", "Август"],
    price: "от 89 000 ₽",
    description: "Горные пейзажи, кристально чистые озера и альпийские луга"
  },
  {
    id: 2,
    title: "Тропический Рай",
    country: "Мальдивы",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5e60877b-1b0f-4785-9559-49475057f5d5.jpg",
    duration: "10 дней",
    months: ["Январь", "Февраль", "Март", "Декабрь"],
    price: "от 125 000 ₽",
    description: "Белоснежные пляжи, коралловые рифы и роскошный отдых"
  },
  {
    id: 3,
    title: "Исторические Сокровища",
    country: "Италия",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5cb19f56-2445-4a24-ba59-25a65c5a2159.jpg",
    duration: "8 дней",
    months: ["Апрель", "Май", "Сентябрь", "Октябрь"],
    price: "от 75 000 ₽",
    description: "Древние города, великолепная архитектура и итальянская кухня"
  },
  {
    id: 4,
    title: "Северное Сияние",
    country: "Исландия",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/7490531f-de0e-4ad9-9d0e-0fbb796bd3d2.jpg",
    duration: "6 дней",
    months: ["Сентябрь", "Октябрь", "Ноябрь", "Февраль", "Март"],
    price: "от 95 000 ₽",
    description: "Ледники, водопады, гейзеры и волшебное северное сияние"
  },
  {
    id: 5,
    title: "Восточная Мудрость",
    country: "Япония",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5cb19f56-2445-4a24-ba59-25a65c5a2159.jpg",
    duration: "12 дней",
    months: ["Март", "Апрель", "Октябрь", "Ноябрь"],
    price: "от 115 000 ₽",
    description: "Древние храмы, современные мегаполисы и цветущая сакура"
  },
  {
    id: 6,
    title: "Сафари в Саванне",
    country: "Кения",
    image: "https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/5e60877b-1b0f-4785-9559-49475057f5d5.jpg",
    duration: "9 дней",
    months: ["Июль", "Август", "Сентябрь"],
    price: "от 135 000 ₽",
    description: "Наблюдение за дикой природой в естественной среде обитания"
  }
];

const countries = ["Все страны", "Швейцария", "Мальдивы", "Италия", "Исландия", "Япония", "Кения"];
const months = ["Все месяцы", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const TourCatalog = ({ filters, setFilters }: TourCatalogProps) => {
  const filteredTours = tours.filter((tour) => {
    const matchesCountry = !filters.country || filters.country === "Все страны" || tour.country === filters.country;
    const matchesMonth = !filters.month || filters.month === "Все месяцы" || tour.months.includes(filters.month);
    return matchesCountry && matchesMonth;
  });

  return (
    <section id="catalog" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Каталог Туров</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите направление и найдите идеальное путешествие для себя
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <Select value={filters.country} onValueChange={(value) => setFilters({ ...filters, country: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите страну" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.month} onValueChange={(value) => setFilters({ ...filters, month: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Выберите месяц" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month} value={month}>
                  {month}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(filters.country || filters.month) && (
            <Button
              variant="outline"
              onClick={() => setFilters({ country: "", month: "" })}
              className="whitespace-nowrap"
            >
              Сбросить
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.country}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{tour.title}</CardTitle>
                <CardDescription className="text-base">{tour.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    <span>{tour.country}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">{tour.price}</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  Подробнее
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl text-muted-foreground">
              По вашему запросу туров не найдено. Попробуйте изменить фильтры.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TourCatalog;