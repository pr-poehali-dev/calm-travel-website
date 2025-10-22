import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Как забронировать тур?",
    answer: "Выберите интересующий тур, заполните форму бронирования на сайте или свяжитесь с нами по телефону. Наш менеджер свяжется с вами в течение 24 часов для подтверждения деталей."
  },
  {
    id: 2,
    question: "Какие документы нужны для поездки?",
    answer: "Для международных поездок требуется загранпаспорт со сроком действия не менее 6 месяцев после даты возвращения. Для некоторых стран необходима виза - мы поможем с её оформлением."
  },
  {
    id: 3,
    question: "Можно ли изменить или отменить бронирование?",
    answer: "Да, изменения и отмены возможны в соответствии с условиями выбранного тарифа. Обычно бесплатная отмена доступна за 14-30 дней до начала тура. Детали уточняйте при бронировании."
  },
  {
    id: 4,
    question: "Входит ли страховка в стоимость тура?",
    answer: "Да, базовая медицинская страховка включена во все наши туры. Также доступна расширенная страховка, покрывающая больше случаев - её можно приобрести дополнительно."
  },
  {
    id: 5,
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем оплату банковскими картами, банковским переводом и наличными в офисе. Возможна рассрочка платежа - 30% при бронировании, остаток за 14 дней до вылета."
  },
  {
    id: 6,
    question: "Предоставляете ли вы индивидуальные туры?",
    answer: "Да! Мы создаём уникальные туры под ваши пожелания - выбор отелей, маршрута, экскурсий и дат. Свяжитесь с нами для обсуждения деталей."
  },
  {
    id: 7,
    question: "Есть ли групповые скидки?",
    answer: "Да, при бронировании от 4 человек предоставляются скидки от 5% до 15% в зависимости от размера группы и выбранного направления."
  },
  {
    id: 8,
    question: "Что делать, если у меня возникли проблемы во время поездки?",
    answer: "У нас есть круглосуточная служба поддержки. Вы получите контакты для связи, наш представитель всегда на связи и поможет решить любые вопросы во время путешествия."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Часто задаваемые вопросы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ответы на популярные вопросы о бронировании и путешествиях
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-accent/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {item.question}
                </h3>
                <Icon
                  name={openId === item.id ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  className="text-primary flex-shrink-0 transition-transform"
                />
              </button>
              
              {openId === item.id && (
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-card border border-border rounded-lg p-8">
          <Icon name="MessageCircleQuestion" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-foreground">Не нашли ответ?</h3>
          <p className="text-muted-foreground mb-4">
            Свяжитесь с нами любым удобным способом - мы с радостью ответим на все ваши вопросы
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+78001234567" className="text-primary hover:underline font-semibold">
              +7 (800) 123-45-67
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="mailto:info@traveldreams.ru" className="text-primary hover:underline font-semibold">
              info@traveldreams.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
