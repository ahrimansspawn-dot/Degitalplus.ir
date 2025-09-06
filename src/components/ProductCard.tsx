import { ShoppingCart, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  downloads: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  rating, 
  downloads, 
  image, 
  category,
  isNew 
}: ProductCardProps) => {
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden">
      <CardHeader className="p-0 relative">
        <div className="aspect-video bg-muted rounded-t-xl overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-success text-success-foreground">جدید</Badge>
          )}
          {discountPercentage > 0 && (
            <Badge className="bg-destructive text-destructive-foreground">
              {discountPercentage}% تخفیف
            </Badge>
          )}
        </div>
        <Badge variant="outline" className="absolute top-3 left-3 bg-background/90">
          {category}
        </Badge>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1 space-x-reverse">
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse text-muted-foreground">
            <Download className="w-4 h-4" />
            <span className="text-sm">{downloads.toLocaleString('fa')}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-xl font-bold text-primary">
              {price.toLocaleString('fa')} تومان
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice.toLocaleString('fa')}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default">
          <ShoppingCart className="w-4 h-4 ml-2" />
          افزودن به سبد خرید
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;