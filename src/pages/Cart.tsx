import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      title: "پکیج طراحی گرافیک حرفه‌ای",
      price: 150000,
      originalPrice: 200000,
      image: "/placeholder.svg",
      category: "طراحی",
      quantity: 1
    },
    {
      id: "2",
      title: "قالب وب‌سایت فروشگاهی",
      price: 89000,
      image: "/placeholder.svg",
      category: "وب",
      quantity: 2
    },
    {
      id: "3",
      title: "پلاگین وردپرس SEO",
      price: 75000,
      originalPrice: 120000,
      image: "/placeholder.svg",
      category: "پلاگین",
      quantity: 1
    }
  ]);

  const walletBalance = 450000;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + ((item.originalPrice || item.price) * item.quantity), 0);
  const totalDiscount = originalTotal - subtotal;
  const tax = Math.round(subtotal * 0.09); // 9% tax
  const total = subtotal + tax;

  const canAfford = walletBalance >= total;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="py-16">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-3xl font-bold mb-4">سبد خرید خالی است</h1>
            <p className="text-muted-foreground mb-8">
              هنوز محصولی به سبد خرید خود اضافه نکرده‌اید
            </p>
            <Link to="/products">
              <Button size="lg" variant="default">
                مشاهده محصولات
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">سبد خرید</h1>
          <p className="text-muted-foreground">
            {cartItems.length} محصول در سبد خرید شما
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                        <Badge variant="outline" className="mt-1">
                          {item.category}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="font-bold text-primary">
                          {item.price.toLocaleString('fa')} تومان
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {item.originalPrice.toLocaleString('fa')}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Wallet Balance */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Wallet className="w-5 h-5 ml-2" />
                  موجودی کیف پول
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary mb-2">
                  {walletBalance.toLocaleString('fa')} تومان
                </div>
                <Link to="/wallet">
                  <Button variant="outline" size="sm" className="w-full">
                    شارژ کیف پول
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>خلاصه سفارش</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>جمع کل کالاها:</span>
                  <span>{subtotal.toLocaleString('fa')} تومان</span>
                </div>
                
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-success">
                    <span>تخفیف:</span>
                    <span>-{totalDiscount.toLocaleString('fa')} تومان</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span>مالیات (۹%):</span>
                  <span>{tax.toLocaleString('fa')} تومان</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>مبلغ نهایی:</span>
                  <span className="text-primary">{total.toLocaleString('fa')} تومان</span>
                </div>

                {!canAfford && (
                  <div className="bg-destructive/10 text-destructive p-3 rounded-lg text-sm">
                    موجودی کیف پول کافی نیست. لطفاً ابتدا کیف پول خود را شارژ کنید.
                  </div>
                )}

                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={canAfford ? "success" : "outline"}
                    disabled={!canAfford}
                  >
                    {canAfford ? "تکمیل خرید" : "موجودی ناکافی"}
                  </Button>
                  
                  <Link to="/products" className="block">
                    <Button variant="outline" className="w-full">
                      ادامه خرید
                    </Button>
                  </Link>
                </div>

                {canAfford && (
                  <div className="text-xs text-muted-foreground text-center">
                    با کلیک بر روی "تکمیل خرید" قوانین و شرایط را می‌پذیرید
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;