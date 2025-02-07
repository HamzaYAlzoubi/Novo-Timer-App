const Add_Big_Project = document.querySelector(".Add_Big_Project");
const container_Projects = document.querySelector(".container_Projects");
const container_Big_Project = document.querySelectorAll(".container_Big_Project");
const editProject = document.querySelectorAll(".editProject");
const Edit_container = document.querySelector(".Edit_container");

Add_Big_Project.onclick = function () {
    const create_big_Project = document.createElement("div");
    create_big_Project.innerHTML =` <div class="container_Project">
                <div class="container_Big_Project flex-center">
                    <i class="fa-solid fa-angle-right"></i>
                    <span>1253h 42m</span>
                    <span class="Project_Name">البرمجة</span>
                    <i class="fa-solid fa-ellipsis-vertical editProject flex-center">
                        <div class="EDContainer">
                            <div class="Edit">Edit</div>
                            <hr>
                            <div class="Delete">Delete</div>
                        </div>
                    </i>
                </div>
                <div class="container_min_Project_containers display_none">
                    <div class="container_min_Project flex-center">
                        <i class="fa-solid fa-angle-right "></i>
                        <span>200h 42m</span>
                        <span class="Project_Name"> C++تعلم ال</span>
                        <i class="fa-solid fa-ellipsis-vertical editProject flex-center">
                            <div class="EDContainer">
                                <div class="Edit">Edit</div>
                                <div class="Delete">Delete</div>
                            </div>
                        </i>
                    </div>
                </div>

            </div>`;
container_Projects.appendChild(create_big_Project);
}

// قلب السهم لتحت بالمشروع الكبير
container_Big_Project.forEach(element => {
        element.addEventListener("click", (e) => {
            element.children[0].classList.toggle("angle_Down");
            element.nextElementSibling.classList.toggle("display_none");
        });
});

// اظهار خانة التعديلات
editProject.forEach(element => {
    element.addEventListener("click", (e) => {
        editProject.forEach(item => {
            Array.from(item.children).forEach(child => {
                child.style.display = "none"; 
            });
        });
        
        Array.from(e.target.children).forEach(child => {
            child.style.display = "flex"; 
        });
    });
});


document.addEventListener("click" , (e) => {

    editProject.forEach(element => {
        if (!element.contains(e.target)) {
            element.children[0].style.display = "none"; 
        }
    });

    if (e.target.className === "Delete") {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
    }
    
    if (e.target.className === "Edit") {
        Edit_container.style.display = "flex";
        Edit_container.onsubmit = function (event) {
            event.preventDefault();
            e.target.parentElement.parentElement.parentElement.children[2].textContent = Edit_container.children[1].value;
            Edit_container.children[1].value = ""
            Edit_container.style.display = "none";
        };
    }
    if (e.target.className === "Cancel") {
        Edit_container.style.display = "none";
    }
});
