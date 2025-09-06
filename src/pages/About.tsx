import { Shield, Users, Award, Clock, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "امنیت بالا",
      description: "تمام محصولات ما دارای ضمانت و امنیت کامل هستند"
    },
    {
      icon: Users,
      title: "پشتیبانی ۲۴/۷",
      description: "تیم پشتیبانی ما همیشه آماده کمک به شما است"
    },
    {
      icon: Award,
      title: "کیفیت تضمینی",
      description: "بهترین کیفیت محصولات با قیمت‌های رقابتی"
    },
    {
      icon: Clock,
      title: "بروزرسانی مداوم",
      description: "محصولات ما به‌طور مداوم بروزرسانی می‌شوند"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">درباره ما</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ما بزرگترین مرجع فروش محصولات دیجیتال با کیفیت در ایران هستیم
          </p>
        </div>

        <Tabs defaultValue="about" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="about">درباره ما</TabsTrigger>
            <TabsTrigger value="rules">قوانین</TabsTrigger>
            <TabsTrigger value="guide">راهنما</TabsTrigger>
            <TabsTrigger value="contact">ارتباط با ما</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-8">
            {/* About Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">داستان ما</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  دیجیتال پلاس در سال ۱۴۰۰ با هدف ارائه بهترین محصولات دیجیتال به جامعه طراحان و توسعه‌دهندگان ایرانی تاسیس شد. 
                  ما معتقدیم که دسترسی آسان به ابزارهای با کیفیت می‌تواند تحولی عظیم در صنعت دیجیتال کشور ایجاد کند.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  امروزه با بیش از ۱۰ هزار کاربر فعال و ارائه بیش از ۱۲۰۰ محصول متنوع، به یکی از معتبرترین پلتفرم‌های فروش محصولات دیجیتال در ایران تبدیل شده‌ایم.
                </p>
                <Button size="lg" variant="outline">
                  بیشتر بدانید
                </Button>
              </div>
              <div className="bg-gradient-card rounded-xl p-8 shadow-medium">
                <div className="grid grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <feature.icon className="w-12 h-12 mx-auto mb-3 text-primary" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>قوانین و مقررات استفاده</CardTitle>
                <CardDescription>
                  لطفاً قبل از استفاده از خدمات ما، قوانین زیر را به دقت مطالعه کنید
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">۱. ثبت نام و حساب کاربری</h3>
                  <p className="text-muted-foreground">
                    برای استفاده از خدمات، ثبت نام و ایجاد حساب کاربری الزامی است. اطلاعات ارائه شده باید صحیح و کامل باشد.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">۲. خرید و دانلود محصولات</h3>
                  <p className="text-muted-foreground">
                    پس از خرید موفقیت‌آمیز، لینک دانلود برای شما ارسال خواهد شد. هر محصول دارای مجوز استفاده خاص خود است.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">۳. بازگشت وجه</h3>
                  <p className="text-muted-foreground">
                    در صورت عدم رضایت، تا ۷ روز فرصت بازگشت وجه دارید. شرایط خاص در هر محصول ذکر شده است.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">۴. مالکیت معنوی</h3>
                  <p className="text-muted-foreground">
                    تمام محصولات دارای حق کپی‌رایت هستند و استفاده غیرمجاز از آن‌ها پیگرد قانونی دارد.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guide" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>نحوه خرید</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">۱</div>
                    <p>محصول مورد نظر را انتخاب کنید</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">۲</div>
                    <p>به سبد خرید اضافه کنید</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">۳</div>
                    <p>کیف پول خود را شارژ کنید</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">۴</div>
                    <p>خرید را تکمیل کنید</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>شارژ کیف پول</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">۱</div>
                    <p>وارد بخش کیف پول شوید</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">۲</div>
                    <p>مبلغ مورد نظر را انتخاب کنید</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">۳</div>
                    <p>درگاه پرداخت را انتخاب کنید</p>
                  </div>
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">۴</div>
                    <p>پرداخت را تکمیل کنید</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات تماس</CardTitle>
                  <CardDescription>
                    برای هرگونه سوال یا مشکل با ما در ارتباط باشید
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>support@digitalplus.ir</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>پشتیبانی آنلاین ۲۴/۷</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>پشتیبانی</CardTitle>
                  <CardDescription>
                    سوال دارید؟ ما آماده کمک هستیم
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="default">
                    شروع گفتگو آنلاین
                  </Button>
                  <Button className="w-full" variant="outline">
                    ارسال تیکت پشتیبانی
                  </Button>
                  <Button className="w-full" variant="secondary">
                    مشاهده سوالات متداول
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default About;