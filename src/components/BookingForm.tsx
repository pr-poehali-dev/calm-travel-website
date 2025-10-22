import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const tours = [
  "Альпийские Вершины (Швейцария)",
  "Тропический Рай (Мальдивы)",
  "Исторические Сокровища (Италия)",
  "Северное Сияние (Исландия)",
  "Восточная Мудрость (Япония)",
  "Сафари в Саванне (Кения)"
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    people: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Наш менеджер свяжется с вами в ближайшее время.');
  };

  return (
    <section id="booking" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Plane" size={32} className="text-primary" />
            </div>
            <CardTitle className="text-4xl">Забронировать тур</CardTitle>
            <CardDescription className="text-lg">
              Заполните форму и мы свяжемся с вами в течение 24 часов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tour">Выберите тур *</Label>
                  <select
                    id="tour"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.tour}
                    onChange={(e) => setFormData({...formData, tour: e.target.value})}
                    required
                  >
                    <option value="">Выберите направление</option>
                    {tours.map((tour, index) => (
                      <option key={index} value={tour}>{tour}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Желаемая дата *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="people">Количество человек *</Label>
                  <Input
                    id="people"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.people}
                    onChange={(e) => setFormData({...formData, people: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="bg-accent/30 border border-border rounded-lg p-4 flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  После отправки заявки наш менеджер свяжется с вами для уточнения деталей и подтверждения бронирования
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
