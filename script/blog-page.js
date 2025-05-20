  document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();
  const commentsList = document.getElementById('commentsList');

  if (name && comment) {

    const commentDiv = document.createElement('div');
    commentDiv.className = 'commente';
    commentDiv.innerHTML = `<strong>${name}</strong><p>${comment} <button onclick=deleteitem()>delete</button></p>`;

    
    commentsList.prepend(commentDiv);

    
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.push({ name, comment });
    localStorage.setItem('comments', JSON.stringify(savedComments));

    
    document.getElementById('commentForm').reset();
  }
 
 
});
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


window.addEventListener('DOMContentLoaded', () => {
  const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
  const commentsList = document.getElementById('commentsList');

  savedComments.reverse().forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `<strong>${comment.name}</strong><p>${comment.comment}</p>`;
    commentsList.appendChild(commentDiv);
  });
});
