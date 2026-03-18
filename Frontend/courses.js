const BASE_URL = 'http://localhost:5000'

const response = await axios.get(`${BASE_URL}/users/${id}`)
const user = response.data


// โหลดข้อมูล
function loadCourses() {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        let html = "";
        data.forEach(c => {
            html += `
            <tr>
                <td>${c.courses_id}</td>
                <td>${c.title_courses}</td>
                <td>${c.description}</td>
                <td>${c.courses_code}</td>
                <td>
                    <button onclick='editCourse(${JSON.stringify(c)})'>แก้ไข</button>
                    <button onclick='deleteCourse(${c.courses_id})'>ลบ</button>
                </td>
            </tr>`;
        });
        document.getElementById("courseTable").innerHTML = html;
    });
}

// เพิ่ม / แก้ไข
document.getElementById("courseForm").addEventListener("submit", function(e){
    e.preventDefault();

    const id = document.getElementById("courses_id").value;

    const data = {
        courses_id: id,
        title_courses: document.getElementById("title_courses").value,
        description: document.getElementById("description").value,
        users_id: document.getElementById("users_id").value,
        courses_code: document.getElementById("courses_code").value
    };

    fetch(API_URL, {
        method: id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
        loadCourses();
        document.getElementById("courseForm").reset();
    });
});

// แก้ไข
function editCourse(c) {
    document.getElementById("courses_id").value = c.courses_id;
    document.getElementById("title_courses").value = c.title_courses;
    document.getElementById("description").value = c.description;
    document.getElementById("users_id").value = c.users_id;
    document.getElementById("courses_code").value = c.courses_code;
}

// ลบ
function deleteCourse(id) {
    if(confirm("ยืนยันการลบ?")) {
        fetch(API_URL + "?id=" + id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => loadCourses());
    }
}

// โหลดครั้งแรก
loadCourses();
