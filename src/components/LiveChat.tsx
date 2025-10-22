import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  text: string;
  sender: "user" | "support";
  time: string;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Здравствуйте! Чем могу помочь?",
      sender: "support",
      time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
    }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      setTimeout(() => {
        const autoReply: Message = {
          id: messages.length + 2,
          text: "Спасибо за сообщение! Наш специалист ответит вам в ближайшее время.",
          sender: "support",
          time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })
        };
        setMessages(prev => [...prev, autoReply]);
      }, 1000);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl bg-primary hover:bg-primary/90 z-50"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg">Онлайн поддержка</CardTitle>
                  <p className="text-xs text-primary-foreground/80">Обычно отвечаем за 5 минут</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20 h-8 w-8 p-0"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="p-4 border-t border-border flex-shrink-0">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Напишите сообщение..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="sm" className="bg-primary hover:bg-primary/90">
                <Icon name="Send" size={18} />
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <Icon name="Clock" size={12} />
              <span>Мы онлайн: Пн-Вс 9:00-21:00</span>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default LiveChat;
