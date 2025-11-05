import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts } from '../data/blog';

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-charcoal mb-4">Educational Blog</h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Stay informed with expert insights, tips, and educational content about permanent makeup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden group border-blush-pink-light/30">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-2">
                  <span className="px-2 py-1 bg-blush-pink-light text-blush-pink rounded text-xs">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 group-hover:text-blush-pink transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-charcoal/60">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="w-full mt-4 text-blush-pink hover:text-blush-pink-dark hover:bg-blush-pink-light group/btn">
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-blush-pink text-blush-pink hover:bg-blush-pink-light">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
