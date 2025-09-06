import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const location = useLocation();
  const cartItemsCount = 3; // This will be dynamic with state management

  const isActive = (path: string) => location.pathname === path;

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
          <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
            <Link 
              to="/" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              خانه
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/products') ? 'text-primary' : 'text-foreground'
              }`}
            >
              محصولات
            </Link>
            <Link 
              to="/presale" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/presale') ? 'text-primary' : 'text-foreground'
              }`}
            >
              پیش فروش
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              درباره ما
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <Link to="/wallet">
              <Button variant="outline" size="sm" className="hidden sm:flex">
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
        </div>
      </div>
    </header>
  );
};

export default Header;