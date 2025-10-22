import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Здравствуйте! Чем могу помочь?", sender: "support", time: "Сейчас" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        text: "Спасибо за сообщение! Наш менеджер ответит вам в ближайшее время.",
        sender: "support",
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 hover:scale-110 transition-transform"
        >
          <Icon name="MessageCircle" size={28} />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Icon name="Headphones" size={20} />
                </div>
                <div>
                  <CardTitle className="text-lg">Онлайн поддержка</CardTitle>
                  <p className="text-xs opacity-90">Обычно отвечаем за 5 минут</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Введите сообщение..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSend();
                  }
                }}
              />
              <Button onClick={handleSend} size="icon">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
