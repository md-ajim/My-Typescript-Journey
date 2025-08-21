<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My TypeScript Journey</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Calm Neutrals and Tech Blue -->
    <!-- Application Structure Plan: The SPA is designed as a personal learning dashboard. It starts with a clear introduction, followed by the main goals presented in visually distinct cards. The core of the application is an interactive progress tracker for the "Practice Plan," where each learning module is a card with a status that can be changed by the user ('To Do', 'In Progress', 'Done'). Changing a module's status dynamically updates an overall progress bar at the top. This dashboard structure was chosen to transform a static plan into an engaging, motivational tool, making it easier for the user to visualize and track their learning journey. -->
    <!-- Visualization & Content Choices: Goals -> Goal: Organize -> Presentation: HTML cards with icons -> Interaction: Subtle hover effects -> Justification: Clearly separates key objectives. Practice Plan -> Goal: Track Progress/Change -> Presentation: Interactive HTML cards with status selectors and a dynamic CSS progress bar -> Interaction: JS updates the card's status and the progress bar's width on user selection -> Justification: This creates a dynamic and rewarding experience for tracking learning, which is the primary purpose of the source document. A simple progress bar is more effective here than a complex chart. -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body {
            font-family: 'Hind Siliguri', sans-serif;
            background-color: #f8fafc;
        }
        .status-dot {
            transition: background-color 0.3s ease;
        }
        .progress-bar-inner {
            transition: width 0.5s ease-in-out;
        }
    </style>
</head>
<body class="text-gray-800">

    <div class="container mx-auto p-4 sm:p-6 md:p-8 max-w-5xl">

        <!-- Header Section -->
        <header class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-2">🚀 আমার TypeScript যাত্রা</h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">এই রিপোজিটরিটি আমার টাইপস্ক্রিপ্ট শেখার যাত্রার একটি অংশ। এখানে আমি বিভিন্ন অনুশীলন এবং প্রজেক্টের মাধ্যমে টাইপস্ক্রিপ্ট শিখব। 📖</p>
        </header>

        <main>
            <!-- Goal Section -->
            <section id="goals" class="mb-12">
                <h2 class="text-3xl font-bold text-center mb-8">🎯 লক্ষ্য</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 class="text-xl font-semibold mb-2">মৌলিক ধারণা বোঝা</h3>
                        <p class="text-gray-600">টাইপস্ক্রিপ্টের মূল ধারণাগুলি, যেমন টাইপ, ইন্টারফেস, এবং ক্লাস সম্পর্কে পরিষ্কার ধারণা অর্জন করা।</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 class="text-xl font-semibold mb-2">লাইব্রেরি ও ফ্রেমওয়ার্ক</h3>
                        <p class="text-gray-600">React, Angular বা Vue-এর মতো বিভিন্ন লাইব্রেরি এবং ফ্রেমওয়ার্কের সাথে টাইপস্ক্রিপ্ট ব্যবহার করা।</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 class="text-xl font-semibold mb-2">বাস্তবভিত্তিক প্রজেক্ট</h3>
                        <p class="text-gray-600">ছোটখাটো প্রজেক্ট তৈরি করে টাইপস্ক্রিপ্টের ব্যবহারিক জ্ঞান এবং দক্ষতা অর্জন করা।</p>
                    </div>
                </div>
            </section>

            <!-- Practice Plan Section -->
            <section id="practice">
                <h2 class="text-3xl font-bold text-center mb-4">💻 অনুশীলন পরিকল্পনা</h2>
                <p class="text-center text-gray-600 mb-8">নিচে আমার অনুশীলনের পরিকল্পনা দেওয়া হলো। প্রতিটি ধাপের স্ট্যাটাস পরিবর্তন করে আমার অগ্রগতি ট্র্যাক করা যাবে।</p>

                <!-- Progress Bar -->
                <div class="mb-8">
                    <div class="flex justify-between mb-1">
                        <span class="text-base font-medium text-blue-700">অগ্রগতি</span>
                        <span id="progress-text" class="text-sm font-medium text-blue-700">0%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-4">
                        <div id="progress-bar" class="bg-blue-600 h-4 rounded-full progress-bar-inner" style="width: 0%"></div>
                    </div>
                </div>

                <!-- Practice Cards -->
                <div id="practice-cards-container" class="space-y-6">
                    <!-- Cards will be dynamically inserted here -->
                </div>
            </section>
        </main>

        <!-- Contact Footer -->
        <footer class="text-center mt-16 py-6 border-t border-gray-200">
            <h3 class="text-2xl font-bold mb-2">📬 যোগাযোগ</h3>
            <p class="text-gray-600">যদি আপনার কোনো প্রশ্ন বা পরামর্শ থাকে, তাহলে নির্দ্বিধায় আমার সাথে যোগাযোগ করুন।</p>
        </footer>
    </div>

    <script>
        const practicePlan = [
            {
                id: 1,
                title: "[দিন ১-৫] - বেসিক সিনট্যাক্স এবং ডেটা টাইপ",
                description: "ভেরিয়েবল, ডেটা টাইপ (number, string, boolean, array), এবং বেসিক সিনট্যাক্স শেখা।",
                status: "todo" // 'todo', 'inProgress', 'done'
            },
            {
                id: 2,
                title: "[দিন ৬-১০] - ফাংশন এবং ইন্টারফেস",
                description: "টাইপস্ক্রিপ্টে ফাংশন লেখা, প্যারামিটার এবং রিটার্ন টাইপ ডিফাইন করা এবং ইন্টারফেসের ব্যবহার শেখা।",
                status: "todo"
            },
            {
                id: 3,
                title: "[দিন ১১-১৫] - ক্লাস এবং অবজেক্ট",
                description: "অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিংয়ের জন্য ক্লাস, কনস্ট্রাক্টর, এবং ইনহেরিটেন্সের ধারণা পাওয়া।",
                status: "todo"
            },
            {
                id: 4,
                title: "[দিন ১৬-২০] - জেনেরিকস এবং অ্যাডভান্সড টাইপ",
                description: "পুনরায় ব্যবহারযোগ্য কম্পোনেন্ট তৈরির জন্য জেনেরিকস এবং Union, Intersection টাইপসের মতো অ্যাডভান্সড ধারণা।",
                status: "todo"
            }
        ];

        const statusConfig = {
            todo: { text: "করণীয়", color: "bg-gray-400", textColor: "text-gray-800" },
            inProgress: { text: "চলছে", color: "bg-yellow-400", textColor: "text-yellow-800" },
            done: { text: "সম্পন্ন", color: "bg-green-500", textColor: "text-green-800" }
        };

        const container = document.getElementById('practice-cards-container');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');

        function renderCards() {
            container.innerHTML = '';
            practicePlan.forEach(item => {
                const card = document.createElement('div');
                card.className = "bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4";
                
                let optionsHTML = '';
                for (const key in statusConfig) {
                    optionsHTML += `<option value="${key}" ${item.status === key ? 'selected' : ''}>${statusConfig[key].text}</option>`;
                }

                card.innerHTML = `
                    <div class="flex-grow">
                        <div class="flex items-center mb-2">
                            <span class="status-dot h-3 w-3 rounded-full mr-3 ${statusConfig[item.status].color}"></span>
                            <h4 class="text-xl font-semibold">${item.title}</h4>
                        </div>
                        <p class="text-gray-600 pl-6">${item.description}</p>
                    </div>
                    <div class="flex-shrink-0 w-full sm:w-auto">
                        <select 
                            data-id="${item.id}" 
                            class="status-selector bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            ${optionsHTML}
                        </select>
                    </div>
                `;
                container.appendChild(card);
            });
            updateProgress();
        }

        function updateProgress() {
            const doneCount = practicePlan.filter(item => item.status === 'done').length;
            const totalCount = practicePlan.length;
            const percentage = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
            
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${percentage}%`;
        }

        container.addEventListener('change', (e) => {
            if (e.target.classList.contains('status-selector')) {
                const itemId = parseInt(e.target.dataset.id);
                const newStatus = e.target.value;
                
                const itemToUpdate = practicePlan.find(item => item.id === itemId);
                if (itemToUpdate) {
                    itemToUpdate.status = newStatus;
                    renderCards();
                }
            }
        });

        document.addEventListener('DOMContentLoaded', renderCards);
    </script>

</body>
</html>
