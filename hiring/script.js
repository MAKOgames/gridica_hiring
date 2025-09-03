document.addEventListener('DOMContentLoaded', () => {

    // --- Calculator Logic ---
    const calculatorRoot = document.getElementById('calculator-root');
    if (calculatorRoot) {
        // Using basic HTML and JS for the calculator to avoid React/Vue dependencies
        const calculatorHTML = `
            <div class="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl shadow-xl">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label for="grade" class="block text-left font-semibold mb-2 text-gray-400">Грейд специалиста</label>
                        <select id="grade" class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="100000">Middle</option>
                            <option value="150000" selected>Senior</option>
                            <option value="200000">Lead / Architect</option>
                        </select>
                    </div>
                    <div>
                        <label for="tech" class="block text-left font-semibold mb-2 text-gray-400">Направление</label>
                        <select id="tech" class="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                            <option value="1.1">Backend (Go, Python, Java)</option>
                            <option value="1.0">Frontend (React, Vue)</option>
                            <option value="1.2">Mobile (iOS, Android)</option>
                            <option value="1.3">C-level (CTO, CPO)</option>
                        </select>
                    </div>
                </div>
                <div class="text-2xl font-bold text-white">
                    <span>Ориентировочная стоимость:</span>
                    <span id="total-cost" class="text-purple-400">165 000 руб.</span>
                </div>
            </div>
        `;
        calculatorRoot.innerHTML = calculatorHTML;

        const gradeSelect = document.getElementById('grade');
        const techSelect = document.getElementById('tech');
        const totalCostEl = document.getElementById('total-cost');

        function calculateCost() {
            const gradeCost = parseFloat(gradeSelect.value);
            const techMultiplier = parseFloat(techSelect.value);
            const total = gradeCost * techMultiplier;
            
            totalCostEl.textContent = `${total.toLocaleString('ru-RU')} руб.`;
        }

        gradeSelect.addEventListener('change', calculateCost);
        techSelect.addEventListener('change', calculateCost);
        
        calculateCost(); // Initial calculation
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Form Submission ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Later we will add logic to send data to Telegram
            alert('Спасибо за вашу заявку! Мы скоро свяжемся с вами.');
            contactForm.reset();
        });
    }

    // --- Scroll Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(el => observer.observe(el));

});
