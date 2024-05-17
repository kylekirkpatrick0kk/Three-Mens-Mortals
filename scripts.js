document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            tabs.forEach(item => item.classList.remove('current'));
            contents.forEach(item => item.classList.remove('current'));

            tab.classList.add('current');
            document.getElementById(tabId).classList.add('current');
        });
    });
});
