---
layout: page
title: 简历 | Resume
permalink: /resume/
---

# 简历 | Resume

<div class="resume-container">
    <div class="resume-section">
        <div class="section-header">
            <h2>中文简历</h2>
            <a href="/assets/resume/pdf/resume_zh.pdf" class="btn btn-primary" download>
                <i class="fas fa-download"></i> 下载PDF
            </a>
        </div>
        {% include_relative assets/resume/resume_zh.md %}
    </div>
    
    <div class="resume-section">
        <div class="section-header">
            <h2>English Resume</h2>
            <a href="/assets/resume/pdf/resume_en.pdf" class="btn btn-primary" download>
                <i class="fas fa-download"></i> Download PDF
            </a>
        </div>
        {% include_relative assets/resume/resume_en.md %}
    </div>
</div>

<style>
.resume-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
}

.resume-section {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #0366d6;
}

.section-header h2 {
    color: #0366d6;
    margin: 0;
}

.btn-primary {
    background-color: #0366d6;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s;
    font-size: 0.9rem;
}

.btn-primary:hover {
    background-color: #0256b4;
    color: white;
    text-decoration: none;
}

.fas {
    margin-right: 0.5rem;
}

/* 响应式设计 */
@media (min-width: 768px) {
    .resume-container {
        flex-direction: row;
    }
    
    .resume-section {
        flex: 1;
    }
}

/* Markdown 样式优化 */
.resume-section h1 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
}

.resume-section h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
}

.resume-section h3 {
    font-size: 1.3rem;
    color: #333;
    margin-top: 1.2rem;
}

.resume-section ul {
    padding-left: 1.5rem;
}

.resume-section li {
    margin-bottom: 0.5rem;
}

.resume-section strong {
    color: #0366d6;
}
</style> 