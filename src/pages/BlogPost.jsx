import React, { useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Share2, ArrowLeft, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

const categories = [
  { value: "talent_strategy", label: "Talent Strategy", color: "#B82E2B" },
  { value: "hr_tech", label: "HR Tech", color: "#6F88B5" },
  { value: "culture", label: "Culture", color: "#591E45" },
  { value: "leadership", label: "Leadership", color: "#1A6566" },
  { value: "future_of_work", label: "Future of Work", color: "#B9472C" },
  { value: "data_insights", label: "Data Insights", color: "#1A6566" }
];

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const queryClient = useQueryClient();

  const { data: posts = [] } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => base44.entities.BlogPost.filter({ status: "published" }, "-publish_date", 100)
  });

  const post = posts.find(p => p.slug === slug);
  const relatedPosts = posts.filter(p => p.id !== post?.id && p.category === post?.category).slice(0, 3);

  const incrementViewsMutation = useMutation({
    mutationFn: (postId) => base44.entities.BlogPost.update(postId, { views: (post?.views || 0) + 1 }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    }
  });

  useEffect(() => {
    if (post?.id) {
      incrementViewsMutation.mutate(post.id);
    }
  }, [post?.id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-200 mb-4">Post not found</h1>
          <Link to={createPageUrl("Blog")}>
            <Button className="fire-button">Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryColor = categories.find(c => c.value === post.category)?.color || "#B82E2B";

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Back Button */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to={createPageUrl("Blog")}>
            <Button variant="ghost" className="text-slate-300 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src={post.featured_image || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1950&q=80"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 lg:p-12 border-2 border-slate-800"
        >
          {/* Category Badge */}
          <Badge 
            className="mb-4 text-sm font-medium px-4 py-1.5"
            style={{ backgroundColor: `${categoryColor}30`, color: categoryColor, borderColor: `${categoryColor}50` }}
          >
            {categories.find(c => c.value === post.category)?.label}
          </Badge>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-200 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-slate-800">
            {/* Author */}
            <div className="flex items-center gap-3">
              {post.author_image && (
                <img 
                  src={post.author_image} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                />
              )}
              <div>
                <p className="text-slate-200 font-semibold">{post.author}</p>
                <p className="text-slate-500 text-sm">Author</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4" />
              {post.publish_date && format(new Date(post.publish_date), 'MMMM d, yyyy')}
            </div>

            {/* Read Time */}
            {post.read_time && (
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                {post.read_time} min read
              </div>
            )}

            {/* Share Button */}
            <Button
              onClick={handleShare}
              variant="outline"
              size="sm"
              className="ml-auto border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-slate-300 mb-8 leading-relaxed italic">
              {post.excerpt}
            </p>
          )}

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown className="text-slate-300 leading-relaxed">
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-slate-400 border-slate-700">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-slate-200">Related Posts</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`${createPageUrl("BlogPost")}?slug=${relatedPost.slug}`}>
                  <div className="glass-effect rounded-xl overflow-hidden border-2 border-slate-800 hover:border-slate-700 transition-all group">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.featured_image || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-red-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </article>
    </div>
  );
}