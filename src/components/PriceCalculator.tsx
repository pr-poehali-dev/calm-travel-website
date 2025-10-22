import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const packages = [
  { id: 'economy', name: 'Эконом', basePrice: 45000 },
  { id: 'comfort', name: 'Комфорт', basePrice: 75000 },
  { id: 'premium', name: 'Премиум', basePrice: 125000 }
];

const seasonMultipliers: { [key: string]: number } = {
  'high': 1.3,
  'mid': 1.0,
  'low': 0.8
};

const PriceCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState('comfort');
  const [people, setPeople] = useState(2);
  const [season, setSeason] = useState('mid');
  const [insurance, setInsurance] = useState(false);

  const calculatePrice = () => {
    const pkg = packages.find(p => p.id === selectedPackage);
    if (!pkg) return 0;

    let totalPrice = pkg.basePrice * people;
    totalPrice *= seasonMultipliers[season];
    
    if (insurance) {
      totalPrice += 5000 * people;
    }

    if (people >= 4) {
      totalPrice *= 0.9;
    } else if (people >= 6) {
      totalPrice *= 0.85;
    }

    return Math.round(totalPrice);
  };

  const totalPrice = calculatePrice();

  return (
    <section id="calculator" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Калькулятор стоимости</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Рассчитайте примерную стоимость вашего путешествия
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Settings" size={24} className="text-primary" />
                Параметры поездки
              </CardTitle>
              <CardDescription>Выберите опции для расчёта стоимости</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Пакет услуг</Label>
                <div className="space-y-2">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="package"
                        value={pkg.id}
                        checked={selectedPackage === pkg.id}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-4 h-4 text-primary"
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{pkg.name}</div>
                        <div className="text-sm text-muted-foreground">от {pkg.basePrice.toLocaleString()} ₽</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="people">Количество человек: {people}</Label>
                <input
                  id="people"
                  type="range"
                  min="1"
                  max="10"
                  value={people}
                  onChange={(e) => setPeople(parseInt(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>10 человек</span>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Сезон поездки</Label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="low">Низкий сезон (-20%)</option>
                  <option value="mid">Средний сезон</option>
                  <option value="high">Высокий сезон (+30%)</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-all">
                  <input
                    type="checkbox"
                    checked={insurance}
                    onChange={(e) => setInsurance(e.target.checked)}
                    className="w-4 h-4 text-primary rounded"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">Расширенная страховка</div>
                    <div className="text-sm text-muted-foreground">+5 000 ₽ на человека</div>
                  </div>
                </label>
              </div>

              {people >= 4 && (
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
                  <Icon name="Sparkles" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div className="font-semibold text-foreground mb-1">Групповая скидка!</div>
                    <div className="text-muted-foreground">
                      Скидка {people >= 6 ? '15%' : '10%'} за бронирование от {people >= 6 ? '6' : '4'} человек
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="lg:sticky lg:top-4 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" size={24} className="text-primary" />
                Итоговая стоимость
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Базовая стоимость</span>
                  <span className="font-semibold">
                    {(packages.find(p => p.id === selectedPackage)?.basePrice || 0).toLocaleString()} ₽
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Количество человек</span>
                  <span className="font-semibold">× {people}</span>
                </div>

                {season !== 'mid' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Сезонная наценка</span>
                    <span className={`font-semibold ${season === 'high' ? 'text-destructive' : 'text-green-600'}`}>
                      {season === 'high' ? '+30%' : '-20%'}
                    </span>
                  </div>
                )}

                {insurance && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Расширенная страховка</span>
                    <span className="font-semibold">+{(5000 * people).toLocaleString()} ₽</span>
                  </div>
                )}

                {people >= 4 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Групповая скидка</span>
                    <span className="font-semibold text-green-600">
                      -{people >= 6 ? '15%' : '10%'}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-foreground">Итого:</span>
                  <span className="text-3xl font-bold text-primary">{totalPrice.toLocaleString()} ₽</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {Math.round(totalPrice / people).toLocaleString()} ₽ на человека
                </p>
              </div>

              <Button size="lg" className="w-full">
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать тур
              </Button>

              <div className="bg-accent/30 rounded-lg p-4">
                <p className="text-xs text-muted-foreground text-center">
                  Цена является приблизительной. Окончательная стоимость рассчитывается индивидуально и зависит от выбранного отеля, авиаперевозчика и других факторов.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
