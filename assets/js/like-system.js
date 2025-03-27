// Post Like System using localStorage
document.addEventListener('DOMContentLoaded', function() {
  const likeButtons = document.querySelectorAll('.like-button');
  
  // For each like button in the page
  likeButtons.forEach(button => {
    const postId = button.getAttribute('data-post-id');
    const likeCountElement = button.querySelector('.like-count');
    
    // Set initial count from localStorage or default to 0
    let likeCount = parseInt(localStorage.getItem(`post-like-${postId}`) || 0);
    updateLikeDisplay(button, likeCountElement, likeCount);
    
    // Add click handler
    button.addEventListener('click', function() {
      // Check if already liked
      const isLiked = button.classList.contains('liked');
      
      if (isLiked) {
        // Unlike
        likeCount = Math.max(0, likeCount - 1);
        button.classList.remove('liked');
      } else {
        // Like
        likeCount += 1;
        button.classList.add('liked');
        
        // Add heart animation
        const heart = document.createElement('span');
        heart.classList.add('heart-animation');
        heart.innerHTML = '❤️';
        button.appendChild(heart);
        
        // Remove animation after it completes
        setTimeout(() => {
          heart.remove();
        }, 1000);
      }
      
      // Save to localStorage
      localStorage.setItem(`post-like-${postId}`, likeCount.toString());
      
      // Update display
      updateLikeDisplay(button, likeCountElement, likeCount);
    });
  });
  
  // Helper function to update like count display
  function updateLikeDisplay(button, countElement, count) {
    countElement.textContent = count;
    if (count > 0) {
      button.classList.add('has-likes');
    } else {
      button.classList.remove('has-likes');
    }
    
    // Check if user has liked this post
    const postId = button.getAttribute('data-post-id');
    const isLiked = localStorage.getItem(`post-like-${postId}`) > 0;
    if (isLiked) {
      button.classList.add('liked');
    } else {
      button.classList.remove('liked');
    }
  }
}); 