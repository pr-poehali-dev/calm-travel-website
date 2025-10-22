import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tourTitle?: string;
}

const tours = [
  "Альпийские Вершины",
  "Тропический Рай",
  "Исторические Сокровища",
  "Северное Сияние",
  "Восточная Мудрость",
  "Сафари в Саванне"
];

const BookingModal = ({ open, onOpenChange, tourTitle }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: tourTitle || '',
    date: '',
    adults: '2',
    children: '0'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        tour: '',
        date: '',
        adults: '2',
        children: '0'
      });
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Забронировать тур</DialogTitle>
              <DialogDescription>
                Заполните форму, и наш менеджер свяжется с вами в течение 30 минут
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tour">Выберите тур *</Label>
                <Select
                  value={formData.tour}
                  onValueChange={(value) => setFormData({ ...formData, tour: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите направление" />
                  </SelectTrigger>
                  <SelectContent>
                    {tours.map((tour) => (
                      <SelectItem key={tour} value={tour}>
                        {tour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Желаемая дата вылета *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adults">Взрослых</Label>
                  <Select
                    value={formData.adults}
                    onValueChange={(value) => setFormData({ ...formData, adults: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="children">Детей</Label>
                  <Select
                    value={formData.children}
                    onValueChange={(value) => setFormData({ ...formData, children: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={40} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">
              Наш менеджер свяжется с вами в ближайшее время
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
