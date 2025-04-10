---
layout: page
title: 博客 | Blogs
permalink: /blogs/
ref: blogs
order: 2
---

<div class="blogs-container">
  <h2>精选博客</h2>
  
  <div class="blog-list">
    {% for post in site.posts %}
      <div class="blog-item">
        {% assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" %}
        <span class="post-date">{{ post.date | date: date_format }}</span>
        
        <h3 class="post-title">
          <a href="{{ post.url | absolute_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
        </h3>
        
        <div class="post-excerpt">
          {{ post.excerpt | markdownify | truncatewords: 30 }}
        </div>
        
        <a href="{{ post.url | absolute_url }}" class="read-more">阅读更多...</a>
      </div>
    {% endfor %}
  </div>
</div>

<style>
  .blogs-container {
    margin-top: 2rem;
  }
  
  .blog-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1.5rem;
  }
  
  .blog-item {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .blog-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .post-date {
    color: #6c757d;
    font-size: 0.9rem;
  }
  
  .post-title {
    margin: 0.5rem 0 1rem;
  }
  
  .post-title a {
    color: #0366d6;
    text-decoration: none;
  }
  
  .post-title a:hover {
    text-decoration: underline;
  }
  
  .post-excerpt {
    color: #333;
    line-height: 1.6;
  }
  
  .read-more {
    display: inline-block;
    margin-top: 1rem;
    color: #0366d6;
    font-weight: 500;
    text-decoration: none;
  }
  
  .read-more:hover {
    text-decoration: underline;
  }
</style> 