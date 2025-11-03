import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Eye, Upload, X, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const categories = [
  { value: "talent_strategy", label: "Talent Strategy" },
  { value: "hr_tech", label: "HR Tech" },
  { value: "culture", label: "Culture" },
  { value: "leadership", label: "Leadership" },
  { value: "future_of_work", label: "Future of Work" },
  { value: "data_insights", label: "Data Insights" }
];

const quillModules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['blockquote', 'code-block'],
    ['link', 'image'],
    ['clean']
  ]
};

export default function BlogEditor() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');
  const isEditMode = !!postId;

  const [loading, setLoading] = useState(true);
  const [quillContent, setQuillContent] = useState("");
  const [featuredImagePreview, setFeaturedImagePreview] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      featured_image: "",
      author: "",
      author_image: "",
      category: "talent_strategy",
      tags: "",
      publish_date: new Date().toISOString().split('T')[0],
      featured: false,
      read_time: 5
    }
  });

  const watchTitle = watch("title");

  // Initialize - Check auth and load post if editing
  useEffect(() => {
    const initialize = async () => {
      try {
        // Check authentication
        const user = await base44.auth.me();
        if (!user || user.role !== 'admin') {
          alert("You must be an admin to access this page");
          navigate(createPageUrl("Home"));
          return;
        }
        setCurrentUser(user);

        // If editing, load the post
        if (postId) {
          const post = await base44.entities.BlogPost.get(postId);
          
          // Populate form fields
          setValue("title", post.title);
          setValue("slug", post.slug);
          setValue("excerpt", post.excerpt || "");
          setValue("featured_image", post.featured_image || "");
          setValue("author", post.author);
          setValue("author_image", post.author_image || "");
          setValue("category", post.category);
          setValue("tags", post.tags?.join(", ") || "");
          setValue("publish_date", post.publish_date || new Date().toISOString().split('T')[0]);
          setValue("featured", post.featured || false);
          setValue("read_time", post.read_time || 5);
          
          setQuillContent(post.content || "");
          setFeaturedImagePreview(post.featured_image || "");
        } else {
          // For new posts, set author to current user
          setValue("author", user.full_name);
        }
      } catch (error) {
        console.error("Initialization error:", error);
        alert("Failed to load editor. Please try again.");
        navigate(createPageUrl("BlogAdmin"));
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [postId, navigate, setValue]);

  // Auto-generate slug from title
  useEffect(() => {
    if (watchTitle && !isEditMode) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      setValue("slug", slug);
    }
  }, [watchTitle, isEditMode, setValue]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setValue("featured_image", file_url);
      setFeaturedImagePreview(file_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload error:", error);
      alert("Failed to upload image. Please try again.");
    } finally {
      setUploadingImage(false);
    }
  };

  const createPostMutation = useMutation({
    mutationFn: (data) => base44.entities.BlogPost.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      alert("Post created successfully!");
      navigate(createPageUrl("BlogAdmin"));
    },
    onError: (error) => {
      console.error("Create error:", error);
      alert("Failed to create post. Please try again.");
    }
  });

  const updatePostMutation = useMutation({
    mutationFn: ({ id, data }) => base44.entities.BlogPost.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      alert("Post updated successfully!");
      navigate(createPageUrl("BlogAdmin"));
    },
    onError: (error) => {
      console.error("Update error:", error);
      alert("Failed to update post. Please try again.");
    }
  });

  const onSubmit = async (data, status) => {
    // Validate content
    if (!quillContent.trim()) {
      alert("Please add some content to your post");
      return;
    }

    // Parse tags
    const tagsArray = data.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    const postData = {
      ...data,
      content: quillContent,
      tags: tagsArray,
      status: status
    };

    if (isEditMode) {
      updatePostMutation.mutate({ id: postId, data: postData });
    } else {
      createPostMutation.mutate(postData);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-red-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Loading editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to={createPageUrl("BlogAdmin")}>
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {isEditMode ? "Edit Post" : "Create New Post"}
              </h1>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSubmit((data) => onSubmit(data, "draft"))}
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800"
              disabled={isSubmitting || createPostMutation.isPending || updatePostMutation.isPending}
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Save className="w-4 h-4 mr-2" />
              )}
              Save Draft
            </Button>
            <Button
              onClick={handleSubmit((data) => onSubmit(data, "published"))}
              className="fire-button text-white"
              disabled={isSubmitting || createPostMutation.isPending || updatePostMutation.isPending}
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Eye className="w-4 h-4 mr-2" />
              )}
              Publish
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-effect border-2 border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-200">Post Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-slate-300">
                    Title <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="title"
                    {...register("title", { 
                      required: "Title is required",
                      minLength: { value: 3, message: "Title must be at least 3 characters" }
                    })}
                    placeholder="Enter post title..."
                    className="bg-slate-900/50 border-slate-700 text-slate-200 text-lg"
                  />
                  {errors.title && (
                    <p className="text-red-400 text-sm">{errors.title.message}</p>
                  )}
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-slate-300">
                    URL Slug <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="slug"
                    {...register("slug", { 
                      required: "Slug is required",
                      pattern: { 
                        value: /^[a-z0-9-]+$/, 
                        message: "Slug can only contain lowercase letters, numbers, and hyphens" 
                      }
                    })}
                    placeholder="post-url-slug"
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                  {errors.slug && (
                    <p className="text-red-400 text-sm">{errors.slug.message}</p>
                  )}
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <Label htmlFor="excerpt" className="text-slate-300">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    {...register("excerpt", {
                      maxLength: { value: 300, message: "Excerpt must be less than 300 characters" }
                    })}
                    placeholder="Brief summary of the post..."
                    rows={3}
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                  {errors.excerpt && (
                    <p className="text-red-400 text-sm">{errors.excerpt.message}</p>
                  )}
                </div>

                {/* Content Editor */}
                <div className="space-y-2">
                  <Label className="text-slate-300">
                    Content <span className="text-red-400">*</span>
                  </Label>
                  <div className="bg-white rounded-lg">
                    <ReactQuill
                      theme="snow"
                      value={quillContent}
                      onChange={setQuillContent}
                      modules={quillModules}
                      className="min-h-[400px]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Image */}
            <Card className="glass-effect border-2 border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-200">Featured Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredImagePreview ? (
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={featuredImagePreview}
                      alt="Featured"
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => {
                        setValue("featured_image", "");
                        setFeaturedImagePreview("");
                      }}
                      className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors">
                      {uploadingImage ? (
                        <div className="flex flex-col items-center">
                          <Loader2 className="w-8 h-8 text-slate-400 animate-spin mb-2" />
                          <div className="text-sm text-slate-400">Uploading...</div>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                          <div className="text-sm text-slate-400">Click to upload</div>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                  </label>
                )}
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="glass-effect border-2 border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-200">Post Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Category */}
                <div className="space-y-2">
                  <Label className="text-slate-300">
                    Category <span className="text-red-400">*</span>
                  </Label>
                  <select
                    {...register("category", { required: "Category is required" })}
                    className="w-full bg-slate-900/50 border-2 border-slate-700 text-slate-200 rounded-md px-3 py-2"
                  >
                    {categories.map(cat => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-400 text-sm">{errors.category.message}</p>
                  )}
                </div>

                {/* Author */}
                <div className="space-y-2">
                  <Label htmlFor="author" className="text-slate-300">
                    Author <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="author"
                    {...register("author", { required: "Author is required" })}
                    placeholder="Author name"
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                  {errors.author && (
                    <p className="text-red-400 text-sm">{errors.author.message}</p>
                  )}
                </div>

                {/* Author Image */}
                <div className="space-y-2">
                  <Label htmlFor="author_image" className="text-slate-300">Author Image URL</Label>
                  <Input
                    id="author_image"
                    {...register("author_image")}
                    placeholder="https://..."
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                </div>

                {/* Publish Date */}
                <div className="space-y-2">
                  <Label htmlFor="publish_date" className="text-slate-300">Publish Date</Label>
                  <Input
                    id="publish_date"
                    type="date"
                    {...register("publish_date")}
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                </div>

                {/* Read Time */}
                <div className="space-y-2">
                  <Label htmlFor="read_time" className="text-slate-300">Read Time (minutes)</Label>
                  <Input
                    id="read_time"
                    type="number"
                    {...register("read_time", { 
                      min: { value: 1, message: "Read time must be at least 1 minute" }
                    })}
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                  {errors.read_time && (
                    <p className="text-red-400 text-sm">{errors.read_time.message}</p>
                  )}
                </div>

                {/* Featured */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    {...register("featured")}
                    className="w-4 h-4"
                  />
                  <Label htmlFor="featured" className="text-slate-300 cursor-pointer">
                    Feature this post
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="glass-effect border-2 border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-200">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-slate-300">
                    Tags (comma separated)
                  </Label>
                  <Input
                    id="tags"
                    {...register("tags")}
                    placeholder="hr, talent, leadership"
                    className="bg-slate-900/50 border-slate-700 text-slate-200"
                  />
                  <p className="text-xs text-slate-500">Separate tags with commas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}