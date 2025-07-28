import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, Share, Phone } from 'lucide-react';
import { posts, seller } from '@/data/seller';
import { sendWhatsAppMessage } from '@/utils/whatsapp';

const PostsFeed = () => {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleWhatsAppClick = (postContent: string) => {
    const message = `Oi ${seller.name}! Vi seu post: "${postContent.slice(0, 50)}..." e gostaria de conversar! 😊`;
    sendWhatsAppMessage(message);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'agora';
    if (diffInHours < 24) return `há ${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `há ${diffInDays}d`;
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'delivery': return '🎉';
      case 'tip': return '💡';
      case 'achievement': return '🏆';
      case 'promotion': return '🎯';
      default: return '📝';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feed do Especialista</h2>
          <p className="text-muted-foreground text-lg">
            Acompanhe as últimas novidades, dicas e entregas do {seller.name}
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Header do Post */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={seller.avatar} alt={seller.name} />
                    <AvatarFallback>{seller.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{seller.name}</h3>
                      <span className="text-lg">{getPostTypeIcon(post.type)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{formatTimeAgo(post.timestamp)}</p>
                  </div>
                </div>

                {/* Conteúdo do Post */}
                <div className="mb-4">
                  <p className="text-foreground leading-relaxed">{post.content}</p>
                </div>

                {/* Imagem do Post */}
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Ações do Post */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 ${
                        likedPosts.has(post.id) ? 'text-red-500' : 'text-muted-foreground'
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedPosts.has(post.id) ? 'fill-current' : ''
                        }`}
                      />
                      <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                    </Button>

                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments.length}</span>
                    </Button>

                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground">
                      <Share className="w-4 h-4" />
                      <span>Compartilhar</span>
                    </Button>
                  </div>

                  <Button
                    size="sm"
                    onClick={() => handleWhatsAppClick(post.content)}
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Conversar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            onClick={() => handleWhatsAppClick('Gostaria de saber mais sobre as novidades!')}
          >
            Ver mais no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostsFeed;