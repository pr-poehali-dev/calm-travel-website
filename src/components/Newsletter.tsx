import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 px-4 bg-primary/10">
      <div className="max-w-4xl mx-auto">
        <Card className="border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Icon name="Mail" size={40} className="text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Подпишитесь на рассылку
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Получайте эксклюзивные предложения, скидки до 30% и вдохновляющие истории путешественников
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button type="submit" size="lg" className="sm:w-auto">
                    <Icon name="Send" size={18} className="mr-2" />
                    Подписаться
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Подписываясь, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-primary/10 border border-primary/20 rounded-lg p-6 text-center animate-fade-in">
                <Icon name="CheckCircle" size={48} className="text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Спасибо за подписку!</h3>
                <p className="text-muted-foreground">
                  Проверьте вашу почту - мы отправили приветственное письмо с промокодом на скидку 10%
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <Icon name="Percent" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Эксклюзивные скидки</h4>
                <p className="text-sm text-muted-foreground">До 30% для подписчиков</p>
              </div>
              <div className="text-center">
                <Icon name="Bell" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Горячие предложения</h4>
                <p className="text-sm text-muted-foreground">Первыми узнавайте о турах</p>
              </div>
              <div className="text-center">
                <Icon name="Compass" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-1">Советы путешественникам</h4>
                <p className="text-sm text-muted-foreground">Полезные гайды и лайфхаки</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
