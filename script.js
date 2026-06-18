document.querySelectorAll(
'.feature-card,.program-card,.support-card,.process-card,.timeline-card,.stat-card'
).forEach(function(card){

    card.addEventListener('mousemove', function(e){

        const rect = card.getBoundingClientRect();

        card.style.setProperty('--x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--y', (e.clientY - rect.top) + 'px');

    });

});