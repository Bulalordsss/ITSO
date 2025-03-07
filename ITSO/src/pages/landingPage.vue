<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IP Management</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .navbar {
            background-color: #f98b9e;
            padding: 15px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: white;
            font-weight: bold;
        }
        .navbar a {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
        }
        .banner {
            width: 100%;
            height: 300px;
            background: url('image.png') center/cover;
        }
        .content {
            background-color: #fde8eb;
            padding: 30px;
        }
        h2 {
            color: #d6336c;
        }
        p {
            color: #d6336c;
            font-size: 16px;
            max-width: 800px;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="navbar">
            <a href="#" v-for="link in navLinks" :key="link">{{ link }}</a>
        </div>
        <div class="banner"></div>
        <div class="content">
            <h2>{{ visionTitle }}</h2>
            <p>{{ visionText }}</p>
            
            <h2>{{ missionTitle }}</h2>
            <p>{{ missionText }}</p>
            
            <h2>{{ overviewTitle }}</h2>
            <p>{{ overviewText }}</p>
        </div>
    </div>

    <script>
        const { createApp } = Vue;
        createApp({
            data() {
                return {
                    navLinks: ['Home', 'Service', 'Policies', 'Contact'],
                    visionTitle: 'Vision',
                    visionText: 'To simplify and secure IP management while fostering innovation and collaboration.',
                    missionTitle: 'Mission',
                    missionText: 'To provide an innovative and user-friendly IP management system that streamlines the submission and protection process, ensuring data security and compliance while fostering a culture of innovation.',
                    overviewTitle: 'Overview',
                    overviewText: 'UIC’s Innovation & Technology Support Office (ITSO) protects intellectual property, helps researchers manage IP, supports technology transfer, and assists with commercialization and legal IP matters.'
                };
            }
        }).mount('#app');
    </script>
</body>
</html>
