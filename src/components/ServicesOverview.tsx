import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { navigate } from './Router';
import { serviceHighlights } from '../data/servicesOverview';
import { getCategoryIdByName } from '../data/categories';

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-charcoal mb-4">Our Services</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Professional permanent makeup services designed to enhance your natural beauty and save you time every morning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceHighlights.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.category} 
                className="hover:shadow-lg transition-all duration-300 border-blush-pink-light/30 group cursor-pointer"
                onClick={() => {
                  const categoryId = getCategoryIdByName(service.category);
                  if (categoryId) {
                    navigate(`/services?category=${categoryId}`);
                  } else {
                    navigate('/services');
                  }
                }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blush-pink-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-blush-pink transition-colors">
                    <Icon className="w-6 h-6 text-blush-pink group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="group-hover:text-blush-pink transition-colors">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      const categoryId = getCategoryIdByName(service.category);
                      if (categoryId) {
                        navigate(`/services?category=${categoryId}`);
                      } else {
                        navigate('/services');
                      }
                    }}
                    variant="outline" 
                    className="w-full border-blush-pink text-blush-pink hover:bg-blush-pink-light"
                  >
                    View Services
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
          <Button onClick={() => navigate('/services')} size="lg" variant="outline" className="border-blush-pink text-blush-pink hover:bg-blush-pink-light">
            View All Services
          </Button>
          <Button asChild size="lg" className="bg-blush-pink hover:bg-blush-pink-dark text-charcoal">
            <a href="https://booking.lindasbeautybar.com" target="_blank" rel="noopener noreferrer">
              Book Your Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
