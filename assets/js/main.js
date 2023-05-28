window.addEventListener("DOMContentLoaded", () => {
  let teamMembers = document.querySelectorAll(".team-group ul li");
  let memberDetails = document.querySelector(".member-details");

  let burger = document.querySelector(".burger");
  let list = document.querySelector(".list");
  burger.addEventListener("click", () => {
    list.classList.add("show");
  });

  let listClose = document.querySelector(".close");

  listClose.addEventListener("click", () => {
    list.classList.remove("show");
  });

  // members
  var membersObj = [
    {
      fullName: "abdelmohsen",
      jobTitle: "chair man",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "ahmed mohamed",
      jobTitle: "general manager",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "yasser hemdan",
      jobTitle: "Project Manager",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "yassin ahmed",
      jobTitle: "HR Manager",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "omar ali",
      jobTitle: "Finance Manager",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "yehia kamel",
      jobTitle: "IT Manager",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "mahmoud ahmed",
      jobTitle: "Procurlses",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "ali ahmed",
      jobTitle: "Site Engineers",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "aya ali",
      jobTitle: "HR Coordinator",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "noha mohamed",
      jobTitle: "Accountant",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
    {
      fullName: "moamen mahmoud",
      jobTitle: "Secretary",
      breifBio:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ex deleniti, veritatis corporis libero, quaerat tenetur aperiam dolorem obcaecati",
      experience: "5",
      email: "CDE@gmail.com",
      imageSrc: "avatar.png",
    },
  ];

  teamMembers.forEach((member) => {
    member.addEventListener("click", (e) => {
      teamMembers.forEach((member) => {
        member.classList.remove("active");
      });
      e.target.classList.add("active");
      for (let i = 0; i < membersObj.length; i++) {
        if (
          e.target.innerHTML.toLowerCase() ===
          membersObj[i].jobTitle.toLowerCase()
        ) {
          memberDetails.innerHTML = `
          <div class="personal-info">
            <div class="member-image">
              <img src="assets/images/${membersObj[i].imageSrc}" alt="" />
            </div>
            <div class="personal-data">
              <div class="name">
                <h3>${membersObj[i].fullName}</h3>
                <p>${membersObj[i].jobTitle}</p>
              </div>
            </div>
          </div>
          <div class="breif">
            <p>
              <span>Breif bio :</span> ${membersObj[i].breifBio}
            </p>
    
            <div class="experience-and-email">
              <p><span>Experience :</span> ${membersObj[i].experience} years</p>
              <p><span>Email :</span> ${membersObj[i].email}</p>
            </div>
          </div>
          `;
        }
      }
    });
  });
});

window.onload = function () {
  // Home Popup
  $(".playIcon").click(function () {
    $(".homePopup").fadeIn();
    $(".homeIntro").get(0).play();
  });

  function homeIntroClose() {
    setTimeout(function () {
      $(".homeIntro").get(0).pause();
      $(".homeIntro").get(0).currentTime = 0;
    }, 100);
  }

  $(".homePopup").click(function () {
    homeIntroClose();
    $(this).fadeOut();
  });

  $(".close").click(function () {
    homeIntroClose();
    $(".homePopup").fadeOut();
  });

  $(".homePopup .inner-popup").click(function (e) {
    e.stopPropagation();
  });
};

var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  nav: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    960: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
