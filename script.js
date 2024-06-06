// WebFont.load({
//     google: {
//         families: ["Roboto:300,regular,500,700"]
//     }
// });

const reviews = [
    {
        id: 1,
        name: "Kirti Goel",
        job: "Co-founder, P-TAL",
        img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
        text: "While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have."
    },
    {
        id: 2,
        name: "Diksha Pande",
        job: "Co-founder, Samosa Party",
        img: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
        text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually.Rahul and team have built a robust product with years of their experience distilled into the workflows."
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
//login
function openTab(tabNumber) {
    // Hide all content
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Hide all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected content and tab
    var contentId = 'content-' + tabNumber;
    document.getElementById(contentId).classList.add('active');
    document.querySelector('.tab:nth-child(' + tabNumber + ')').classList.add('active');
}