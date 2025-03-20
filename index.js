document.addEventListener("DOMContentLoaded", () => {
    const teamProjects = [
        {
            title: "코딩 퀴즈 (Coding Quiz)",
            description: "프로그래밍 언어(자바, 자바스크립트, 파이썬, CS) 기반의 문제를 풀고 랭킹을 기록하는 퀴즈 플랫폼",
            techStack: "fastAPI, Next.js, Python, JavaScript, Sqlite, PostgreSQL, Docker, PM2, AWS",
            gitHubLink: "https://github.com/JAQuizProject/Coding_Quiz",
            deployLink: "http://44.203.184.203:3000/",
            devLink: "https://jelkov-developer.notion.site/2025-1a8c23f3073480ae933ff8e7073daa73?pvs=4"
        },
        {
            title: "비가 오는 날에는 (Heamul Pajeon)",
            description: "강수량과 해물파전 검색량의 상관관계를 분석한 데이터 프로젝트. 기상 데이터와 검색 트렌드 데이터를 활용하여 시각화 및 예측 분석 수행.",
            techStack: "Python, Pandas, Matplotlib, Seaborn",
            gitHubLink: "https://github.com/JELKOV/Weather-KoreanPancake",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/2025-Python-Data-Visualization-Project-149c23f30734801daf84e0e3cdefe645?pvs=4"
        },
        {
            title: "붕어빵 원정대",
            description: "붕어빵 판매 위치 공유 및 리뷰 시스템 구현",
            techStack: "Spring MVC, Java, JSP, JavaScript, jQuery, Oracle, MySQL, AWS, Docker",
            gitHubLink: "https://github.com/JELKOV/Deployfishshapedbread",
            deployLink: "http://fishshapedbread.com/",
            devLink: "https://jelkov-developer.notion.site/2024-8524d899429441a6ad5ae491862184de?pvs=4"
        },
        {
            title: "메모리제이슨",
            description: "사진과 위치 정보를 활용하여 개인의 히스토리를 기록하는 웹 애플리케이션",
            techStack: "React, JavaScript, Axios, Redux, Node.js, MySQL, AWS",
            gitHubLink: "https://github.com/codestates/memory.json",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/2022-Memory-json-SEB-37th-e37f0a35dab44ca1923c6e659c918e1b?pvs=4"
        }
    ];

    const toyProjects = [
        {
            title: "Space Missions Analysis (우주 발사 기록 분석)",
            description: "전 세계 우주 발사 데이터를 분석하여 발사 비용 변화, 조직별 발사 횟수, 냉전 시대 미사일 경쟁, 임무 성공률 등을 시각화하는 프로젝트.",
            techStack: "Python, Pandas, Plotly, Jupyter Notebook",
            gitHubLink: "https://github.com/JELKOV/Space-Race-Analysis",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/Data-1abc23f307348062a17af3bf479803e7?pvs=4"
        },
        {
            title: "Income Prediction Model (소득 예측 모델)",
            description: "미국 청소년 종단 연구(NLSY97) 데이터를 활용하여 소득을 예측하는 다변량 회귀 모델을 구축. 교육 수준, 경력, 가구 소득 등의 변수가 소득에 미치는 영향을 분석.",
            techStack: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn",
            gitHubLink: "https://github.com/JELKOV/Data-Driven-Prosperity",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/Data-1a9c23f3073480428aa7ea2e2a4d667a?pvs=4"
        },
        {
            title: "Flask E-commerce Project (전자상거래 웹사이트)",
            description: "Flask 기반의 전자상거래 플랫폼으로, 사용자 회원가입, 상품 관리, 장바구니, 결제 시스템(Toss Payments API 연동) 및 PostgreSQL 기반 데이터베이스를 활용하여 완전한 쇼핑몰 기능을 구현.",
            techStack: "Python, Flask, SQLAlchemy, Flask-Migrate, Flask-Login, BeatuifulSoup, PostgreSQL, Toss Payments API, Naver API, JavaScript, Bootstrap, SweetAlert2",
            gitHubLink: "https://github.com/JELKOV/Ecommerce-By-Python",
            deployLink: "https://ecommerce-by-python.onrender.com/",
            devLink: "https://jelkov-developer.notion.site/by-Python-1a1c23f3073480b18bfded79acb67db3?pvs=4"
        },
        {
            title: "Police Use of Force Data Analysis (미국 경찰 총격 사건 데이터 분석)",
            description: "경찰 총격 사건 데이터와 미국 인구통계 데이터를 분석하여 사회적 추세를 이해하고, 경찰의 무력 사용 패턴을 탐구. 데이터 시각화를 통해 패턴을 도출하고 정책 개선에 활용 가능한 인사이트 제공.",
            techStack: "Python, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Jupyter Notebook",
            gitHubLink: "https://github.com/JELKOV/Police-Use-of-Force---Data-Analysis",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/Data-Police-Use-of-Force-Data-Analysis-19ec23f307348064a449fdfcd4863de9?pvs=4"
        },
        {
            title: "IMF DATA API (경제 데이터 분석 프로젝트)",
            description: "IMF DataMapper API를 활용하여 전 세계 경제 데이터를 분석하고, Flask와 Pandas를 이용해 데이터를 처리하며, Matplotlib으로 그래프를 생성하는 프로젝트.",
            techStack: "Python, Flask, Pandas, Matplotlib, Seaborn, Flask-Caching, IMF API",
            gitHubLink: "https://github.com/JELKOV/Economy-Analyze-by-API",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/IMF-DATA-API-19bc23f3073480278598c02a9355a420?pvs=4"
        },
        {
            title: "Space Invaders Game (스페이스 인베이더 게임)",
            description: "Pygame을 활용하여 만든 클래식 슈팅 게임 'Space Invaders'를 리팩토링하고 개선한 프로젝트. 적과 플레이어의 상호작용을 최적화하고, 새로운 난이도 조절 기능과 사운드 효과를 추가함.",
            techStack: "Python, Pygame, OOP",
            gitHubLink: "https://github.com/JELKOV/SpaceInvaders_by_Python",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/SpaceInvaders-198c23f30734805cb507c64c3bea6fa0?pvs=4"
        },
        {
            title: "Stock Market Web Scraper (주식 & 환율 크롤러)",
            description: "네이버 금융(Naver Finance)에서 특정 종목의 주식 및 환율 데이터를 크롤링하는 Python 기반 자동화 프로젝트. GUI 기반으로 사용자가 종목을 선택하여 크롤링할 수 있으며, 일정 시간마다 자동으로 크롤링이 실행됨.",
            techStack: "Python, Selenium, Pandas, Tkinter, Schedule, CSV",
            gitHubLink: "https://github.com/JELKOV/Stock-Exchange_Rate-Crawling-",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/WEB-SCRAPING-195c23f30734800aba53c933f0169715?pvs=4"
        },
        {
            title: "Image Color Picker (이미지 색상 추출기)",
            description: "사용자가 업로드한 이미지에서 가장 많이 사용된 색상 10개를 추출하는 웹 애플리케이션. FastAPI와 K-Means 클러스터링을 활용하여 색상을 분석하고, HEX 코드로 변환하여 UI에 표시.",
            techStack: "Python, FastAPI, Pillow, NumPy, scikit-learn, HTML, CSS, JavaScript, Render (배포)",
            gitHubLink: "https://github.com/JELKOV/IMAGE_COLOR_-PICKER",
            deployLink: "https://image-color-picker-gv37.onrender.com/",
            devLink: "https://jelkov-developer.notion.site/IMAGE-COLOR-PICKER-PROJECT-194c23f30734801eb59ee11057317003?pvs=4"
        },
        {
            title: "Cafe & Wifi API (카페 & 와이파이 API)",
            description: "사용자가 카페 정보를 공유하고 검색할 수 있는 API 기반 웹 애플리케이션. Flask를 활용하여 RESTful API를 제공하며, Swagger 문서를 통해 API를 문서화.",
            techStack: "Python, Flask, Flask-SQLAlchemy, Flask-Migrate, SQLite, Flasgger (Swagger UI), HTML, CSS, JavaScript",
            gitHubLink: "https://github.com/JELKOV/Coffee-Wifi",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/CAFE-WIFI-API-18dc23f3073480709a6ed08af78cf309?pvs=4"
        },
        {
            title: "To-Do List Web App (할 일 관리 앱)",
            description: "Flask 기반의 할 일 관리 웹 애플리케이션. 사용자가 작업을 추가, 수정, 삭제할 수 있으며, 카테고리 및 우선순위 기능이 포함됨.",
            techStack: "Python, Flask, SQLite, Jinja, Flask-WTF, Bootstrap",
            gitHubLink: "https://github.com/JELKOV/WHAT-ARE-YOUR-PLANS-FOR-TODAY-",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/To-Do-List-Whats-your-plan-for-today-187c23f30734808ab798e8fec417e97d?pvs=4"
        },
        {
            title: "AI Reader Bot (AI 음성 리더 봇)",
            description: "PDF 또는 텍스트 입력을 음성으로 변환하는 AI 기반 오디오 제작 시스템. Amazon Polly를 활용하여 한국어, 영어, 중국어 음성을 지원.",
            techStack: "Python, Flask, AWS Polly, PyPDF2, langdetect",
            gitHubLink: "https://github.com/JELKOV/AI-Reader-Bot",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/AI-Reader-184c23f3073480838084eca0231ae8e6?pvs=4"
        },
        {
            title: "Typing Speed App (타이핑 속도 측정 앱)",
            description: "GitHub API에서 Java 코드 샘플을 가져와 타이핑 속도를 측정하는 애플리케이션. 정확도 및 WPM(분당 타자 수)을 실시간 계산.",
            techStack: "Python, Tkinter, GitHub API, dotenv",
            gitHubLink: "https://github.com/JELKOV/TypingSpeedApp-java",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/Typing-Speed-App-17dc23f307348053b1cac201e3402818?pvs=4"
        },
        {
            title: "Breakout Game (벽돌깨기 게임)",
            description: "클래식 벽돌깨기 게임을 리메이크한 프로젝트. 패들을 조작하여 공을 튕기며 벽돌을 깨는 방식의 아케이드 게임.",
            techStack: "Python, Pygame, OOP",
            gitHubLink: "https://github.com/JELKOV/BreakOut-Game",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/BreakOut-Game-17ec23f3073480ff9793ed9c82d45df9?pvs=4"
        },
        {
            title: "Watermark Application (이미지 워터마크 앱)",
            description: "사용자가 이미지를 업로드하고, 커스터마이징 가능한 워터마크를 추가하여 저장할 수 있는 Python 기반 데스크톱 애플리케이션",
            techStack: "Python, Tkinter, Pillow (PIL), GUI Color Picker",
            gitHubLink: "https://github.com/JELKOV/Image-WaterMark",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/Image-Water-Mark-Project-17dc23f307348006aed8d2ffc4119d07?pvs=4"
        },
        {
            title: "Write or Vanish (타이핑 훈련 앱)",
            description: "사용자가 일정 시간 동안 글을 입력하지 않으면 모든 텍스트가 삭제되는 긴장감 넘치는 타이핑 훈련 앱",
            techStack: "Python, Tkinter, LocalStorage, GUI Timer",
            gitHubLink: "https://github.com/JELKOV/WriteOrVanish",
            deployLink: "",
            devLink: "https://jelkov-developer.notion.site/Write-or-Vanish-Project-182c23f30734807c96abdc4f281cab06?pvs=4"
        }
    ];

    function renderProjects(projects, containerId) {
        const container = document.getElementById(containerId);
        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project-item");

            const deployLinkHtml = project.deployLink
                ? `<a href="${project.deployLink}" target="_blank" class="deploy-link">🚀 배포 사이트 보기</a>`
                : "";

            const devLinkHtml = project.devLink
                ? `<a href="${project.devLink}" target="_blank" class="dev-link">📄 개발 문서 보기</a>`
                : "";

            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="project-tech">${project.techStack}</span>
                <div class="project-links">
                    <a href="${project.gitHubLink}" target="_blank" class="github-link">🔗 GitHub 보기</a>
                    ${deployLinkHtml}
                    ${devLinkHtml}
                </div>
            `;
            container.appendChild(projectElement);
        });
    }

    renderProjects(teamProjects, "team-projects");
    renderProjects(toyProjects, "toy-projects");
});

// 네비게이션 메뉴 토글 기능
document.addEventListener("DOMContentLoaded", () => {
    function toggleMenu() {
        const menu = document.querySelector(".nav-links");
        menu.classList.toggle("active");
    }

    document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});
