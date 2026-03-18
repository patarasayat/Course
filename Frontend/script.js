// อ่านพารามิเตอร์ course จาก URL
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const title = document.getElementById("courseTitle");
const lessonList = document.getElementById("lessonList");

// ข้อมูลบทเรียน
const courses = {
    web: {
        name: "🌐 Web Development",
        lessons: [
            { title: "Lesson 1: HTML", link: "https://www.youtube.com/watch?v=WEB1" },
            { title: "Lesson 2: CSS", link: "https://www.youtube.com/watch?v=WEB2" },
            { title: "Lesson 3: JavaScript", link: "https://www.youtube.com/watch?v=WEB3" }
        ]
    },
    java: {
        name: "☕ Java Programming",
        lessons: [
            { title: "Lesson 1: Intro Java", link: "https://www.youtube.com/watch?v=JAVA1" },
            { title: "Lesson 2: OOP", link: "https://www.youtube.com/watch?v=JAVA2" },
            { title: "Lesson 3: Advanced", link: "https://www.youtube.com/watch?v=JAVA3" }
        ]
    },
    uiux: {
        name: "🎨 UI/UX Design",
        lessons: [
            { title: "Lesson 1: UI Basics", link: "https://www.youtube.com/watch?v=UIUX1" },
            { title: "Lesson 2: UX Research", link: "https://www.youtube.com/watch?v=UIUX2" },
            { title: "Lesson 3: Wireframe", link: "https://www.youtube.com/watch?v=UIUX3" }
        ]
    }
};

// แสดงบทเรียน
if (courses[course]) {
    title.innerText = courses[course].name;

    courses[course].lessons.forEach(lesson => {
        // กล่องบทเรียน
        const box = document.createElement("div");
        box.className = "lesson-box";

        // ชื่อบทเรียน
        const lessonTitle = document.createElement("h3");
        lessonTitle.innerText = lesson.title;

        // ปุ่มลิงค์ YouTube
        const link = document.createElement("a");
        link.href = lesson.link;
        link.target = "_blank";
        link.className = "yt-btn";
        link.innerText = "▶️ ดูวิดีโอ";

        // รวมกล่อง
        box.appendChild(lessonTitle);
        box.appendChild(link);

        lessonList.appendChild(box);
    });
} else {
    title.innerText = "ไม่พบคอร์ส";
}