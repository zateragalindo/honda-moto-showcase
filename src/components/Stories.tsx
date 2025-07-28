import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Play } from 'lucide-react';
import { stories } from '@/data/seller';

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleStoryClick = (storyId: string) => {
    const index = stories.findIndex(story => story.id === storyId);
    setCurrentStoryIndex(index);
    setSelectedStory(storyId);
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'agora';
    if (diffInHours < 24) return `${diffInHours}h`;
    return `${Math.floor(diffInHours / 24)}d`;
  };

  const getStoryBorderColor = (type: string) => {
    switch (type) {
      case 'delivery': return 'border-green-500';
      case 'tip': return 'border-honda-blue';
      case 'promotion': return 'border-honda-red';
      default: return 'border-gray-300';
    }
  };

  return (
    <>
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => handleStoryClick(story.id)}
              >
                <div className="text-center">
                  <div className={`relative p-1 rounded-full ${getStoryBorderColor(story.type)} border-2`}>
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 bg-honda-red text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      <Play className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="text-xs mt-2 max-w-[70px] truncate">{story.title}</p>
                  <p className="text-xs text-muted-foreground">{formatTimeAgo(story.timestamp)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      <Dialog open={!!selectedStory} onOpenChange={handleCloseStory}>
        <DialogContent className="p-0 max-w-sm mx-auto bg-black border-0">
          {selectedStory && (
            <div className="relative h-[600px] bg-black rounded-lg overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={handleCloseStory}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Progress Bar */}
              <div className="absolute top-4 left-4 right-16 z-10">
                <div className="flex gap-1">
                  {stories.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full ${
                        index <= currentStoryIndex ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <img
                src={stories[currentStoryIndex]?.image}
                alt={stories[currentStoryIndex]?.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {stories[currentStoryIndex]?.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {formatTimeAgo(stories[currentStoryIndex]?.timestamp)}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Stories;