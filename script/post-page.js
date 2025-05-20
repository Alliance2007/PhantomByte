 document.querySelector('.upload form').addEventListener('submit', function(e) {
        e.preventDefault();
        const fileInput = document.getElementById('file');
        if (fileInput.files.length === 0) {
            alert('Please select a file to upload.');
            return;
        }
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert('File uploaded successfully!');
            } else {
                alert('File upload failed.');
            }
        })
        .catch(error => {
            alert('Error uploading file.');
            console.error(error);
        });
    });