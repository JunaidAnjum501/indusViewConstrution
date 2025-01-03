
        // Get modal elements
        const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("modalImage");
        const span = document.getElementById("closeModal");

        // Add click event to all images
        document.querySelectorAll('img[id^="image"]').forEach(function(img) {
            img.onclick = function() {
                modal.classList.remove("hidden"); // Show modal
                modalImg.src = this.src; // Set the source of the modal image
            };
        });

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.classList.add("hidden"); // Hide modal
        }

        // Close the modal when clicking anywhere outside of the modal content
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.add("hidden"); // Hide modal
            }
        }
    