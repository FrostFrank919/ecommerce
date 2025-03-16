import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShopPage() {
  // Get unique categories
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Get unique mukhi values
  const mukhiValues = Array.from(
    new Set(
      products
        .filter(product => product.mukhi !== undefined)
        .map(product => product.mukhi)
    )
  ).sort((a, b) => (a || 0) - (b || 0));

  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-2">Shop</h1>
      <p className="text-gray-600 text-xl dark:text-gray-700 mb-8">
        Discover our collection of authentic Rudraksha beads and spiritual accessories
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Desktop */}
        <div className="hidden lg:block w-64 space-y-6">
          <div>
            <h3 className="font-medium text-2xl mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category}`} />
                  <Label htmlFor={`category-${category}`} className="text-md cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium text-2xl mb-3">Mukhi</h3>
            <div className="space-y-2">
              {mukhiValues.map((mukhi) => (
                <div key={mukhi} className="flex items-center space-x-2">
                  <Checkbox id={`mukhi-${mukhi}`} />
                  <Label htmlFor={`mukhi-${mukhi}`} className="text-md cursor-pointer">
                    {mukhi} Mukhi
                  </Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium text-2xl mb-3">Price Range</h3>
            <div className="flex items-center space-x-2">
              <Input 
                type="number" 
                placeholder="Min" 
                className="w-20" 
              />
              <span>to</span>
              <Input 
                type="number" 
                placeholder="Max" 
                className="w-20" 
              />
              <Button size="lg">Go</Button>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium text-2xl mb-3">Availability</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="in-stock" />
                <Label htmlFor="in-stock" className="text-md cursor-pointer">
                  In Stock
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="on-sale" />
                <Label htmlFor="on-sale" className="text-md cursor-pointer">
                  On Sale
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="new-arrivals" />
                <Label htmlFor="new-arrivals" className="text-md cursor-pointer">
                  New Arrivals
                </Label>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="pl-10 border-2 !text-lg placeholder:text-md w-full sm:w-[300px] h-[40px]" 
              />
            </div>
            
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden flex items-center">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="space-y-6 py-4">
                    <div>
                      <h3 className="font-medium mb-3">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-category-${category}`} />
                            <Label htmlFor={`mobile-category-${category}`} className="text-sm cursor-pointer">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-3">Mukhi</h3>
                      <div className="space-y-2">
                        {mukhiValues.map((mukhi) => (
                          <div key={mukhi} className="flex items-center space-x-2">
                            <Checkbox id={`mobile-mukhi-${mukhi}`} />
                            <Label htmlFor={`mobile-mukhi-${mukhi}`} className="text-sm cursor-pointer">
                              {mukhi} Mukhi
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="flex items-center space-x-2">
                        <Input 
                          type="number" 
                          placeholder="Min" 
                          className="w-20" 
                        />
                        <span>to</span>
                        <Input 
                          type="number" 
                          placeholder="Max" 
                          className="w-20" 
                        />
                        <Button size="sm">Go</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-3">Availability</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-in-stock" />
                          <Label htmlFor="mobile-in-stock" className="text-sm cursor-pointer">
                            In Stock
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-on-sale" />
                          <Label htmlFor="mobile-on-sale" className="text-sm cursor-pointer">
                            On Sale
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mobile-new-arrivals" />
                          <Label htmlFor="mobile-new-arrivals" className="text-sm cursor-pointer">
                            New Arrivals
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              
              {/* Sort Dropdown */}
              <div className="w-full sm:w-auto">
                <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="all" className='text-md'>All Products</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className='text-md'>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={{ ...product, images: product.images || [] }} />
                ))}
              </div>
            </TabsContent>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products
                    .filter((product) => product.category === category)
                    .map((product) => (
                      <ProductCard key={product.id} product={{ ...product, images: product.images || [] }} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}