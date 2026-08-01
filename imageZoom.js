        document.addEventListener('DOMContentLoaded', function() {
            const lightboxModal = document.getElementById('lightboxModal');
            if (lightboxModal) {
                lightboxModal.addEventListener('show.bs.modal', function (event) {
                    const imageClicked = event.relatedTarget;
                    if (imageClicked) {
                        const src = imageClicked.getAttribute('src');
                        const altText = imageClicked.getAttribute('alt');
                        
                        const modalImage = document.getElementById('modalImage');
                        const modalCaption = document.getElementById('modalCaption');
                        
                        if (modalImage) modalImage.setAttribute('src', src);
                        
                        if (modalCaption) {
                            if (altText) {
                                modalCaption.textContent = altText;
                                modalCaption.classList.remove('d-none');
                            } else {
                                modalCaption.classList.add('d-none');
                            }
                        }
                    }
                });
            }
        });