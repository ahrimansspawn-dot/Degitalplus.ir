import { ArrowLeft, Download, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  // Sample products data
  const featuredProducts = [
    {
      id: "1",
      title: "پکیج طراحی گرافیک حرفه‌ای",
      description: "مجموعه کاملی از ابزارها و منابع برای طراحان گرافیک",
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
      title: "قالب وب‌سایت فروشگاهی",
      description: "قالب واکنش‌گرا و مدرن برای فروشگاه‌های آنلاین",
      price: 89000,
      rating: 4.9,
      downloads: 2100,
      image: "/placeholder.svg",
      category: "وب",
    },
    {
      id: "3",
      title: "پلاگین وردپرس SEO",
      description: "بهینه‌سازی کامل سایت برای موتورهای جستجو",
      price: 75000,
      originalPrice: 120000,
      rating: 4.7,
      downloads: 3200,
      image: "/placeholder.svg",
      category: "پلاگین",
    }
  ];

  const stats = [
    { icon: Download, label: "دانلود", value: "50,000+" },
    { icon: Star, label: "رضایت", value: "98%" },
    { icon: TrendingUp, label: "محصولات", value: "1,200+" },
    { icon: Zap, label: "پشتیبانی", value: "24/7" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 animate-gradient"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-background"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-gradient"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur">
              بهترین محصولات دیجیتال
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              فروشگاه محصولات
              <span className="block bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                دیجیتال حرفه‌ای
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 animate-fade-in-up">
              بهترین قالب‌ها، پلاگین‌ها و ابزارهای دیجیتال را از ما تهیه کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link to="/products">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  مشاهده محصولات
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </Link>
              <Link to="/presale">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  پیش فروش‌ها
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-background shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary-light text-primary">محصولات ویژه</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              محبوب‌ترین محصولات
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              کیفیت بالا، قیمت مناسب و پشتیبانی عالی
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline">
                مشاهده همه محصولات
                <ArrowLeft className="w-4 h-4 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white animate-gradient relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            همین امروز عضو شوید
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            به جمع بیش از ۱۰ هزار کاربر راضی ما بپیوندید و از تخفیف‌های ویژه بهره‌مند شوید
          </p>
          <Link to="/account">
            <Button size="lg" variant="secondary">
              ثبت نام رایگان
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;