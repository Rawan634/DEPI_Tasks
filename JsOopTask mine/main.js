class Course {
   title;
   slug;
   courseType;
   courseId;
 
   constructor(title, slug, courseType, courseId) {
     this.title = title;
     this.slug = slug;
     this.courseType = courseType;
     this.courseId = courseId;
   }
 }
 
 class CourseUi {
   static showCourse(course) {
     const tbody = document.querySelector('tbody');
     const tr = document.createElement('tr');
     tr.innerHTML = `
       <td>${course.title}</td>
       <td>${course.slug}</td>
       <td>${course.courseType}</td>
       <td>${course.courseId}</td>
       <td>
         <button class="btn btn-danger delete btn-sm">Delete</button>
       </td>
     `;
     tbody.appendChild(tr);
   }
 
   static clearInputs() {
     document.querySelector("#title").value = "";
     document.querySelector("#slug").value = "";
     document.querySelector("#courseType").value = "";
     document.querySelector("#courseId").value = "";
   }
 
   static showMessage(message, clsName) {
     const div = document.createElement('div');
     div.className = `alert alert-${clsName}`;
     div.appendChild(document.createTextNode(message));
     const section = document.querySelector('.form-section');
     const form = document.querySelector('form');
     section.insertBefore(div, form);
 
     setTimeout(() => {
       if (document.querySelector('.alert')) {
         document.querySelector('.alert').remove();
       }
     }, 4000);
   }
 
   static deleteCourse(element) {
     if (element.classList.contains('delete')) {
       element.parentElement.parentElement.remove();
       CourseUi.showMessage("Course Deleted Successfully", "warning");
     }
   }
 }
 
 // Handle manual form submission
 const form = document.querySelector('form');
 form.addEventListener('submit', (event) => {
   event.preventDefault();
 
   const titleVal = document.querySelector('#title').value.trim();
   const slugVal = document.querySelector('#slug').value.trim();
   const typeVal = document.querySelector('#courseType').value.trim();
   const idVal = document.querySelector('#courseId').value.trim();
 
   if (titleVal === "" || slugVal === "" || typeVal === "" || idVal === "") {
     CourseUi.showMessage("All Inputs Are Required", "danger");
   } else {
     const course = new Course(titleVal, slugVal, typeVal, idVal);
     CourseUi.showCourse(course);
     CourseUi.clearInputs();
     CourseUi.showMessage("Course Added Successfully", "success");
   }
 });
 
 // Handle delete course
 document.querySelector('tbody').addEventListener('click', (e) => {
   CourseUi.deleteCourse(e.target);
 });
 
 // Fetch courses from Coursera API
 const fetchCoursesBtn = document.getElementById('fetch-courses');
fetchCoursesBtn.addEventListener('click', async () => {
  try {
    const proxyUrl = 'https://corsproxy.io/?';
    const targetUrl = 'https://api.coursera.org/api/courses.v1?limit=10';

    const res = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    const data = await res.json();

    data.elements.forEach(courseData => {
      const course = new Course(
        courseData.name || "No Title",
        courseData.slug || "No Slug",
        courseData.courseType || "Unknown Type",
        courseData.id || "No ID"
      );
      CourseUi.showCourse(course);
    });

    CourseUi.showMessage("Coursera Courses Loaded", "success");
  } catch (error) {
    console.error(error);
    CourseUi.showMessage("Failed to Fetch Courses", "danger");
  }
});

 