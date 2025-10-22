import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/9e34e272-60cb-4d86-8731-1e28d7a7c49f/files/7490531f-de0e-4ad9-9d0e-0fbb796bd3d2.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Откройте Мир Вместе с Нами
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Незабываемые путешествия в самые живописные уголки планеты
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white shadow-xl"
            onClick={() => scrollToSection("catalog")}
          >
            <Icon name="Compass" size={20} className="mr-2" />
            Выбрать тур
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/90 hover:bg-white text-foreground border-white shadow-xl"
            onClick={() => scrollToSection("reviews")}
          >
            Отзывы путешественников
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white drop-shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;