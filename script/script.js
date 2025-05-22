

window.addEventListener('DOMContentLoaded', () => {
  const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
  const postsList = document.getElementById('postsList');

  savedPosts.reverse().forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    // postDiv.
    postDiv.textContent = post;
    postsList.appendChild(postDiv);
  });
});

document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const postContent = document.getElementById('postContent').value.trim();
  if (postContent === "") return;

  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(postContent);
  localStorage.setItem('posts', JSON.stringify(posts));

  location.reload(); // Reload to show the new post from localStorage
});
//delet funtion
function deleteitem(event) {
    
    const btn = event.target;
    const commentDiv = btn.closest('.commente');
    if (commentDiv) {
    
        commentDiv.remove();

        
        const name = commentDiv.querySelector('strong').textContent;
        const comment = commentDiv.querySelector('p').childNodes[0].textContent.trim();
        let savedComments = JSON.parse(localStorage.getItem('comments')) || [];
        savedComments = savedComments.filter(
            c => !(c.name === name && c.comment === comment)
        );
        localStorage.setItem('comments', JSON.stringify(savedComments));
    }
}


document.getElementById('commentsList').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'delete') {
        deleteitem(e);
    }
});

