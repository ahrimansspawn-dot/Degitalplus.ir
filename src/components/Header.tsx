import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Wallet, Menu, Home, Package, Calendar, Info, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const cartItemsCount = 3; // This will be dynamic with state management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { href: "/", label: "خانه", icon: Home },
    { href: "/products", label: "محصولات", icon: Package },
    { href: "/presale", label: "پیش فروش", icon: Calendar },
    { href: "/about", label: "درباره ما", icon: Info },
    { href: "/wallet", label: "کیف پول", icon: Wallet },
    { href: "/cart", label: "سبد خرید", icon: ShoppingCart },
    { href: "/account", label: "حساب کاربری", icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">DP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              دیجیتال پلاس
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="جستجو محصولات..." 
                className="pl-10 rounded-xl border-2 hover:border-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link 
              to="/" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:text-primary hover:bg-primary/10 ${
                isActive('/') ? 'text-primary bg-primary/20' : 'text-foreground'
              }`}
            >
              خانه
            </Link>
            <Link 
              to="/products" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:text-primary hover:bg-primary/10 ${
                isActive('/products') ? 'text-primary bg-primary/20' : 'text-foreground'
              }`}
            >
              محصولات
            </Link>
            <Link 
              to="/presale" 
              className={`font-medium px-4 py-2 rounded-lg bg-gradient-primary text-white shadow-medium hover:shadow-strong transform hover:scale-105 transition-all duration-300 ${
                isActive('/presale') ? 'bg-primary-hover' : ''
              }`}
            >
              پیش فروش
            </Link>
            <Link 
              to="/about" 
              className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:text-primary hover:bg-primary/10 ${
                isActive('/about') ? 'text-primary bg-primary/20' : 'text-foreground'
              }`}
            >
              درباره ما
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3 space-x-reverse">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3 space-x-reverse">
              <Link to="/wallet">
                <Button variant="outline" size="sm">
                  <Wallet className="w-4 h-4 ml-2" />
                  کیف پول
                </Button>
              </Link>
              
              <Link to="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="w-5 h-5" />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-secondary text-secondary-foreground">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              <Link to="/account">
                <Button variant="default" size="sm">
                  <User className="w-4 h-4 ml-2" />
                  حساب کاربری
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="text-right">منوی اصلی</SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-4">
                    {/* User Info Section */}
                    <div className="bg-gradient-primary text-white p-4 rounded-xl">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <User className="w-8 h-8" />
                        <div>
                          <p className="font-semibold">کاربر میهمان</p>
                          <p className="text-sm text-white/80">برای ورود کلیک کنید</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Navigation Menu */}
                    <nav className="space-y-2">
                      {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center space-x-3 space-x-reverse p-3 rounded-lg transition-colors ${
                            isActive(item.href) 
                              ? 'bg-primary text-primary-foreground' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.label}</span>
                          {item.href === '/cart' && cartItemsCount > 0 && (
                            <Badge className="mr-auto bg-secondary text-secondary-foreground">
                              {cartItemsCount}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </nav>

                    <Separator />

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <Link to="/wallet" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full justify-start" variant="outline">
                          <CreditCard className="w-4 h-4 ml-2" />
                          شارژ کیف پول
                        </Button>
                      </Link>
                      
                      <Link to="/account" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full justify-start" variant="default">
                          <User className="w-4 h-4 ml-2" />
                          ورود / ثبت نام
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;