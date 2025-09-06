import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample products data
  const products = [
    {
      id: "1",
      title: "پکیج طراحی گرافیک حرفه‌ای",
      description: "مجموعه کاملی از ابزارها و منابع برای طراحان گرافیک شامل براش‌ها، فونت‌ها، الگوها و غیره",
      price: 150000,
      originalPrice: 200000,
      rating: 4.8,
      downloads: 1250,
      image: "/placeholder.svg",
      category: "طراحی",
      isNew: true
    },
    {
      id: "2", 
      title: "قالب وب‌سایت فروشگاهی ریسپانسیو",
      description: "قالب واکنش‌گرا و مدرن برای فروشگاه‌های آنلاین با پنل مدیریت کامل",
      price: 89000,
      rating: 4.9,
      downloads: 2100,
      image: "/placeholder.svg",
      category: "وب",
    },
    {
      id: "3",
      title: "پلاگین وردپرس SEO پیشرفته",
      description: "بهینه‌سازی کامل سایت برای موتورهای جستجو با قابلیت‌های پیشرفته",
      price: 75000,
      originalPrice: 120000,
      rating: 4.7,
      downloads: 3200,
      image: "/placeholder.svg",
      category: "پلاگین",
    },
    {
      id: "4",
      title: "مجموعه آیکون‌های وکتور",
      description: "بیش از ۱۰۰۰ آیکون وکتور با کیفیت بالا در فرمت‌های مختلف",
      price: 45000,
      rating: 4.6,
      downloads: 5600,
      image: "/placeholder.svg",
      category: "طراحی",
    },
    {
      id: "5",
      title: "اپلیکیشن موبایل React Native",
      description: "قالب کامل اپلیکیشن موبایل با امکانات پیشرفته",
      price: 250000,
      originalPrice: 350000,
      rating: 4.9,
      downloads: 890,
      image: "/placeholder.svg",
      category: "موبایل",
      isNew: true
    },
    {
      id: "6",
      title: "پکیج انیمیشن After Effects",
      description: "مجموعه‌ای از انیمیشن‌های آماده برای استفاده در پروژه‌ها",
      price: 120000,
      rating: 4.8,
      downloads: 1800,
      image: "/placeholder.svg",
      category: "ویدئو",
    }
  ];

  const categories = [
    { value: 'all', label: 'همه دسته‌ها' },
    { value: 'طراحی', label: 'طراحی' },
    { value: 'وب', label: 'وب' },
    { value: 'پلاگین', label: 'پلاگین' },
    { value: 'موبایل', label: 'موبایل' },
    { value: 'ویدئو', label: 'ویدئو' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'جدیدترین' },
    { value: 'popular', label: 'محبوب‌ترین' },
    { value: 'price-low', label: 'قیمت: کم به زیاد' },
    { value: 'price-high', label: 'قیمت: زیاد به کم' },
    { value: 'rating', label: 'بالاترین امتیاز' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">محصولات دیجیتال</h1>
          <p className="text-xl text-muted-foreground">
            {filteredProducts.length} محصول یافت شد
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl shadow-soft p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="جستجو محصولات..." 
                className="pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="دسته‌بندی" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="مرتب‌سازی" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2">
            {searchTerm && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchTerm('')}>
                جستجو: {searchTerm} ×
              </Badge>
            )}
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory('all')}>
                دسته: {categories.find(c => c.value === selectedCategory)?.label} ×
              </Badge>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">محصولی یافت نشد</h3>
            <p className="text-muted-foreground mb-6">
              لطفاً فیلترهای جستجو را تغییر دهید یا دوباره تلاش کنید
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}>
              پاک کردن فیلترها
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;