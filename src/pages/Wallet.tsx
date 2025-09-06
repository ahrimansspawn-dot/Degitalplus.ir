import { useState } from "react";
import { Plus, CreditCard, History, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Wallet = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const walletBalance = 450000; // Sample balance
  const predefinedAmounts = [50000, 100000, 200000, 500000, 1000000];

  const transactions = [
    {
      id: "1",
      type: "charge",
      amount: 200000,
      description: "شارژ کیف پول - درگاه زرین‌پال",
      date: "۱۴۰۳/۱۰/۱۵",
      status: "موفق"
    },
    {
      id: "2",
      type: "purchase",
      amount: -89000,
      description: "خرید قالب وب‌سایت فروشگاهی",
      date: "۱۴۰۳/۱۰/۱۴",
      status: "موفق"
    },
    {
      id: "3",
      type: "charge",
      amount: 100000,
      description: "شارژ کیف پول - درگاه ملت",
      date: "۱۴۰۳/۱۰/۱۲",
      status: "موفق"
    },
    {
      id: "4",
      type: "purchase",
      amount: -150000,
      description: "خرید پکیج طراحی گرافیک",
      date: "۱۴۰۳/۱۰/۱۰",
      status: "موفق"
    }
  ];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
  };

  const getSelectedAmount = () => {
    return customAmount || selectedAmount;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">کیف پول</h1>
          <p className="text-muted-foreground">مدیریت موجودی و تراکنش‌های خود</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Wallet Balance & Charge */}
          <div className="space-y-6">
            {/* Balance Card */}
            <Card className="bg-gradient-primary text-white border-0 shadow-strong">
              <CardHeader>
                <CardTitle className="text-white">موجودی کیف پول</CardTitle>
                <CardDescription className="text-white/80">
                  موجودی فعلی شما
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-4">
                  {walletBalance.toLocaleString('fa')} تومان
                </div>
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                >
                  <History className="w-4 h-4 ml-2" />
                  تاریخچه تراکنش‌ها
                </Button>
              </CardContent>
            </Card>

            {/* Charge Wallet */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 ml-2" />
                  شارژ کیف پول
                </CardTitle>
                <CardDescription>
                  مبلغ مورد نظر را انتخاب کرده و کیف پول خود را شارژ کنید
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Predefined Amounts */}
                <div className="space-y-3">
                  <Label>مبالغ پیشنهادی</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount.toString() ? "default" : "outline"}
                        onClick={() => handleAmountSelect(amount.toString())}
                        className="h-12"
                      >
                        {amount.toLocaleString('fa')} تومان
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="space-y-2">
                  <Label htmlFor="custom-amount">مبلغ دلخواه</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="مبلغ را وارد کنید..."
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                  />
                </div>

                {/* Payment Gateway */}
                <div className="space-y-2">
                  <Label>درگاه پرداخت</Label>
                  <Select defaultValue="zarinpal">
                    <SelectTrigger>
                      <SelectValue placeholder="انتخاب درگاه" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zarinpal">زرین‌پال</SelectItem>
                      <SelectItem value="mellat">درگاه ملت</SelectItem>
                      <SelectItem value="parsian">پارسیان</SelectItem>
                      <SelectItem value="sadad">سداد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Summary */}
                {getSelectedAmount() && (
                  <div className="bg-muted rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span>مبلغ شارژ:</span>
                      <span className="font-semibold">
                        {parseInt(getSelectedAmount()).toLocaleString('fa')} تومان
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-sm">
                      <span>موجودی جدید:</span>
                      <span className="font-semibold text-success">
                        {(walletBalance + parseInt(getSelectedAmount())).toLocaleString('fa')} تومان
                      </span>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!getSelectedAmount()}
                  variant="success"
                >
                  <CreditCard className="w-4 h-4 ml-2" />
                  پرداخت و شارژ کیف پول
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Transaction History */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>تاریخچه تراکنش‌ها</CardTitle>
                <CardDescription>
                  آخرین تراکنش‌های شما
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === 'charge' 
                            ? 'bg-success/10 text-success' 
                            : 'bg-primary/10 text-primary'
                        }`}>
                          {transaction.type === 'charge' 
                            ? <ArrowDownLeft className="w-5 h-5" />
                            : <ArrowUpRight className="w-5 h-5" />
                          }
                        </div>
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-left">
                        <p className={`font-semibold ${
                          transaction.amount > 0 ? 'text-success' : 'text-primary'
                        }`}>
                          {transaction.amount > 0 ? '+' : ''}
                          {transaction.amount.toLocaleString('fa')} تومان
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">
                    مشاهده همه تراکنش‌ها
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;