import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Travel Dreams</h3>
            <p className="text-muted-foreground mb-4">
              Открывайте мир вместе с нами. Незабываемые путешествия в самые живописные уголки планеты.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Компания</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Наша команда</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Карьера</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Партнёры</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог туров</a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Цены</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Оформление виз</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Страхование</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (800) 123-45-67
                  </a>
                  <p className="text-xs text-muted-foreground">Бесплатно по России</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@traveldreams.ru" className="text-muted-foreground hover:text-primary transition-colors">
                  info@traveldreams.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Москва, ул. Тверская, 15
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Travel Dreams. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
