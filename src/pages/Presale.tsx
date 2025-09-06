import { Clock, Users, Star, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Presale = () => {
  const presaleProducts = [
    {
      id: "1",
      title: "پکیج کامل UI/UX طراحی اپلیکیشن",
      description: "مجموعه‌ای کامل از کامپوننت‌ها، قالب‌ها و ابزارهای طراحی اپلیکیشن موبایل",
      originalPrice: 500000,
      presalePrice: 299000,
      image: "/placeholder.svg",
      category: "طراحی",
      releaseDate: "۱۴۰۳/۱۱/۱۵",
      soldCount: 127,
      targetCount: 200,
      daysLeft: 12,
      rating: 4.9
    },
    {
      id: "2",
      title: "قالب داشبورد ادمین React Next.js",
      description: "قالب حرفه‌ای داشبورد ادمین با React، Next.js و TypeScript",
      originalPrice: 350000,
      presalePrice: 199000,
      image: "/placeholder.svg",
      category: "وب",
      releaseDate: "۱۴۰۳/۱۱/۲۰",
      soldCount: 89,
      targetCount: 150,
      daysLeft: 18,
      rating: 4.8
    },
    {
      id: "3",
      title: "پلاگین فروشگاه ساز وردپرس",
      description: "پلاگین کاملی برای تبدیل وردپرس به فروشگاه آنلاین حرفه‌ای",
      originalPrice: 400000,
      presalePrice: 249000,
      image: "/placeholder.svg",
      category: "پلاگین",
      releaseDate: "۱۴۰۳/۱۱/۲۵",
      soldCount: 156,
      targetCount: 250,
      daysLeft: 23,
      rating: 4.7
    }
  ];

  const getDiscountPercentage = (original: number, sale: number) => {
    return Math.round(((original - sale) / original) * 100);
  };

  const getProgressPercentage = (sold: number, target: number) => {
    return Math.min((sold / target) * 100, 100);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">پیش فروش ویژه</Badge>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">محصولات در پیش فروش</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            با شرکت در پیش فروش محصولات جدید، از تخفیف‌های ویژه بهره‌مند شوید
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-0 bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">دسترسی زودهنگام</h3>
              <p className="text-sm text-muted-foreground">
                اولین نفری باشید که محصول جدید را دریافت می‌کند
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <Badge className="w-12 h-12 mx-auto mb-4 bg-secondary text-secondary-foreground flex items-center justify-center rounded-full text-lg font-bold">
                %
              </Badge>
              <h3 className="font-bold mb-2">تخفیف ویژه</h3>
              <p className="text-sm text-muted-foreground">
                تا ۵۰% تخفیف نسبت به قیمت نهایی محصول
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-0 bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">جامعه انحصاری</h3>
              <p className="text-sm text-muted-foreground">
                عضویت در گروه خاص خریداران پیش فروش
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Presale Products */}
        <div className="space-y-8">
          {presaleProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-medium hover:shadow-strong transition-shadow">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Product Image */}
                <div className="lg:col-span-1">
                  <div className="aspect-video lg:aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-destructive text-destructive-foreground">
                        {getDiscountPercentage(product.originalPrice, product.presalePrice)}% تخفیف
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-background/90">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="lg:col-span-2 p-6 lg:p-8">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-3">{product.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 space-x-reverse mb-4">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 fill-secondary text-secondary" />
                          <span className="font-medium">{product.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <CalendarDays className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            انتشار: {product.releaseDate}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>پیشرفت فروش:</span>
                          <span>{product.soldCount} از {product.targetCount}</span>
                        </div>
                        <Progress 
                          value={getProgressPercentage(product.soldCount, product.targetCount)} 
                          className="h-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Pricing */}
                      <div className="text-center lg:text-right">
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground line-through">
                            قیمت اصلی: {product.originalPrice.toLocaleString('fa')} تومان
                          </div>
                          <div className="text-2xl lg:text-3xl font-bold text-primary">
                            {product.presalePrice.toLocaleString('fa')} تومان
                          </div>
                          <div className="text-sm text-success font-medium">
                            صرفه‌جویی {(product.originalPrice - product.presalePrice).toLocaleString('fa')} تومان
                          </div>
                        </div>
                      </div>

                      {/* Countdown */}
                      <Card className="bg-muted/50 border-0">
                        <CardContent className="p-4 text-center">
                          <div className="text-sm text-muted-foreground mb-1">
                            پایان پیش فروش
                          </div>
                          <div className="text-2xl font-bold text-destructive">
                            {product.daysLeft} روز
                          </div>
                          <div className="text-xs text-muted-foreground">
                            باقی مانده
                          </div>
                        </CardContent>
                      </Card>

                      {/* Actions */}
                      <div className="space-y-3">
                        <Button 
                          className="w-full" 
                          size="lg"
                          variant="secondary"
                        >
                          شرکت در پیش فروش
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                        >
                          اطلاع‌رسانی انتشار
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-gradient-primary rounded-2xl text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            از پیش فروش‌های آینده باخبر شوید
          </h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            با عضویت در خبرنامه ما، اولین نفری باشید که از محصولات جدید و پیش فروش‌های ویژه مطلع می‌شوید
          </p>
          <Button size="lg" variant="secondary">
            عضویت در خبرنامه
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Presale;