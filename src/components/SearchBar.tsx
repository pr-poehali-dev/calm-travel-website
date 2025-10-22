import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface SearchBarProps {
  onSearch: (params: { query: string; priceRange: string; duration: string }) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [duration, setDuration] = useState("");

  const handleSearch = () => {
    onSearch({ query, priceRange, duration });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Поиск по названию или стране..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-12"
          />
        </div>

        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="w-full lg:w-48 h-12">
            <SelectValue placeholder="Цена" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Любая цена</SelectItem>
            <SelectItem value="0-50000">До 50 000 ₽</SelectItem>
            <SelectItem value="50000-100000">50-100 тыс ₽</SelectItem>
            <SelectItem value="100000-150000">100-150 тыс ₽</SelectItem>
            <SelectItem value="150000+">От 150 000 ₽</SelectItem>
          </SelectContent>
        </Select>

        <Select value={duration} onValueChange={setDuration}>
          <SelectTrigger className="w-full lg:w-48 h-12">
            <SelectValue placeholder="Длительность" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Любая</SelectItem>
            <SelectItem value="1-5">1-5 дней</SelectItem>
            <SelectItem value="6-10">6-10 дней</SelectItem>
            <SelectItem value="11-15">11-15 дней</SelectItem>
            <SelectItem value="15+">Более 15 дней</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={handleSearch} size="lg" className="h-12 lg:w-48">
          <Icon name="Search" size={20} className="mr-2" />
          Найти
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
