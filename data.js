const name = "Rohan Hussain"

// these appear on the top one after the other as if being typed
const titles = [
    "Software Engineer",
    "Teacher",
    "Vector Illustration Artist",
    "Graphics Designer",
]

// each icon corresopnds to a title
const title_icons = [
    "fas fa-code",
    "fas fa-chalkboard-teacher",
    "fas fa-seedling",
    "fas fa-paint-brush",
];

// this goes in <head> in <meta> tags for SEO
const metaDescription = "Rohan Hussain is an Ex-Airlift Software Engineer who graduated from LUMS in 2022 and worked as Team Lead at Open Data Pakistan as well as at the Institute of Emerging Careers (IEC)."

// goes in head <title> tags
const siteTitle = "Rohan Hussain's Portfolio"

const data = {
    story: [
        "It started in <b>8th Grade</b> when I made a facemash website (inspired by Mark Zuckerberg's Harvard project) for my school. By high school, I had started building industry-grade software solutions. For example, I built a <b>Clinic Management System</b> which ran in Murad Clinic, Lahore.",
        "I brought my passion to LUMS and completed my Bachelors in Computer Science with my final year project being the HEC-funded <a href='https://opendata.com.pk' target='_blank'><b>Open Data Pakistan</b></a>, based on the open source <a href='https://ckan.org' target='_blank'>CKAN project</a>. During this time, I built a usability-centric <b>Acquisition System & Placements System</b> for the <a href='https://iec.org.pk' target='_blank'>Institute of Emerging Careers</a>.",
        "After graduation, I joined Airlift. When Airlift shut down, I moved to Educative briefly, only to later return to the Apollo Group which is the Airlift team's next project."
    ],
    resumeLink: "Rohan Hussain.pdf",
    imagePath: "images/my_picture.png",
    professionIconClass: "fas fa-coffee",
    copyright: "Copyright 2022 Rohan Hussain"
};

const featuredWorks = [
    {
        imagePath: "images/iec-lcms.jpg",
        projectLink: "https://iec.rohanhussain.com",
        projectName: "IEC LMS & Acquisition System",
        date: "2021-2022",
        role: "Full Stack Software Engineer",
        technologies: "NodeJS | ExpressJS | ReactJS | MySQL | AWS EC2 | AWS SES | Redis-Bull",
        projectDescriptionParagraphs: [`<p>IEC teaches emerging technologies to students. They receive <b>thousands of applications</b> for
        each
        cohort and use a multi-step Acquisition Process to shortlist candidates, which includes:</p>`,
            `<ol>
        <li>Application Form</li>
        <li>Online Multi Part Assessment</li>
        <li>Orientation</li>
        <li>Online Interviews</li>
        <li>Onboarding</li>
    </ol>`,
            `<p>Students that apply for IEC Cohorts often come from a <b>low-computer-literacy background</b> and
        hence had problems using the Assessments Systems IEC was using, which had been built in the US.
        IEC hired me to solve this problem.
        I started off with an Assessments system but the project later expanded to all phases of the
        Acquisition process.</p>`,
            `<p>My Acquisition System has been in use for a year now and has had an <b>average student rating of
            4.5/5</b> averaging thousands of student reviews. It has enabled the company to onboard a
        new cohort <b>every 3 weeks</b>, a process that previously took several months.</p>`,
            `<p>The portal is <b>server-side routed with ExpressJS</b> and React is used merely for UI rendering.
        React-router was not used. This decision was made to avoid the excessive load of client-side
        routing on students' low-powered computers. The system is hosted on <b>AWS EC2</b> and
        uses the <b>AWS Simple Email Service (SES)</b>.
    </p>`],
        projectLinkDescription: "Production website hosted on AWS EC2",
    },
    {
        imagePath: "images/opendata-pakistan.jpg",
        projectLink: "https://opendata.com.pk",
        projectName: "Open Data Pakistan",
        date: "2021-2022",
        role: "Team Lead Software Engineer",
        technologies: "CKAN | Python | Flask | PostgreSQL | AWS EC2",
        projectDescriptionParagraphs: [`<p><b>Open Data Pakistan</b> is run by the National Center for Big Data and Cloud Computing
        (<b>NCBC</b>), Lahore
        University of Management Sciences (<b>LUMS</b>) and Higher Education Commission (<b>HEC</b>). It
        is recognized as
        one of the top CKAN portals of the world by <a
            href="https://datashades.info/portal/https%3A%2F%2Fopendata.com.pk%2F"
            target="_blank">DataShades</a>. It is a
        collaborative effort to help provide open data to all kinds of users.</p>`,
            `<p>The portal is based on the open source <a href="https://ckan.org" target="_blank">CKAN</a>
        project, the same repository that powers other data portals such as that of the US Government
        and the Australian Government. It is built in Python Flask with Jinja2 templating.</p>`],
        projectLinkDescription: "Visit Open Data Pakistan",
    }
];

const experiences = [
    {
        imageSrc: 'images/apollo-group.png',
        jobTitle: 'Associate Software Engineer II',
        companyName: 'Apollo Group (Y-Combinator Startup)',
        companyLink: 'https://www.ycombinator.com/companies/apollo-group',
        tenure: 'May 2023 - Present',
        description:
            'Apollo Group is the next project of the Airlift Technologies team, that raised $120M+ in capital before shutting down. I have helped launch 2 MVP products, involving GPT-based chatbots and React-based web applications. I am working in a dynamic startup environment with a small team of software engineers.',
    },
    {
        imageSrc: 'images/educative-logo.jpeg',
        jobTitle: 'Full Stack Software Engineer',
        companyName: 'Educative, Inc.',
        companyLink: 'https://www.linkedin.com/company/educative-inc/',
        tenure: 'August 2022 - April 2023',
        description:
            'I worked in the Learner Experience team at Educative where we dealt with up to 80% of the codebase and shipped features directly used by over a million users. Good programming practices, scalability, and healthy teamwork were at the heart of our work at Educative.',
    },
    {
        imageSrc: 'images/airlift-logo.jpeg',
        jobTitle: 'Associate Software Engineer',
        companyName: 'Airlift Technologies Pakistan',
        companyLink: 'https://www.linkedin.com/company/airlifttechnologies/',
        tenure: 'May - July 2022',
        description: 'Joined with preference for Full Stack/Backend Development and ended due to Airlift shutting down in Pakistan.',
    },
    {
        imageSrc: 'images/open-data-logo.jpeg',
        jobTitle: 'Team Lead Software Engineer',
        companyName: 'Open Data Pakistan (CKAN)',
        companyLink: 'https://www.linkedin.com/company/open-data-pakistan/',
        tenure: 'August 2021 - April 2023',
        description:
            'Built on the Open Source CKAN project | Developed custom plugins and themes | Managed team of 3 developers | Upgraded the production AWS EC2 instance from CKAN 2.8 to CKAN 2.9 | This project also acted as my Senior Year Project.',
    },
    {
        imageSrc: 'images/iec-logo.jpeg',
        jobTitle: 'Team Lead Software Engineer',
        companyName: 'Institute of Emerging Careers (IEC)',
        companyLink: 'https://www.linkedin.com/company/emergingcareers/',
        tenure: 'December 2021 - April 2022',
        description:
            'Designed for Low-Computer-Literate Students from non-Urban Areas | System optimized for low-power systems | Server-side routing | Ideated 4 scalable independent systems for the 4 phases of the IEC Process (Acquisition, Learning, Placement, Community) that work in harmony. For over a year I worked as the only engineer on the project. Afterwards as a 6-month exit plan, I helped build a team and assumed the role of Engineering Manager and Mentor before finally leaving the company when the team no longer needed my oversight.',
    },
];

const posts = [
    {
        title: "CS200 Tutorials: Object-Oriented Programming in C++",
        link: "https://www.youtube.com/watch?v=CVbI6RQT4kA&list=PLkt3DFCNIchGSlXvZNN5kon50q4NvYEBs&index=1",
        date: "January 2021",
        topics: "Classes & Objects, Inheritance & Composition",
        description: "Almost 100 students were enrolled in this course offered by Professor Shafay Shamail, CS Dept. LUMS. I led a team of 15 Teaching Assistants. I was anonymously rated by the students as their favourite TA for the course."
    },
    {
        title: "Rohan's Web Development Course Cohort 3 | PERN/MERN Stack",
        link: "https://www.youtube.com/watch?v=E1-2JasfoQ8&list=PLkt3DFCNIchHVbagUyczhdHXwfWfva4dC",
        date: "Summer 2021 to Present",
        topics: "NodeJS, ExpressJS, ReactJS, SQL, MongoDB",
        description: "This is the 3rd cohort of a course I have been offering to my fellow students in the LUMS CS Department unofficially. The collective alumni count of all cohorts is close to ~150 and the average student rating is 9.5/10."
    }
]

const links = [
    {
        url: "https://www.github.com/hallucinogenizer",
        iconClass: "fab fa-github-square"
    },
    {
        url: "https://www.facebook.com/hallucinogenizer",
        iconClass: "fab fa-facebook-square"
    },
    {
        url: "https://www.instagram.com/rohan_ki_id/",
        iconClass: "fab fa-instagram-square"
    },
    {
        url: "https://twitter.com/rohanthemolvi",
        iconClass: "fab fa-twitter-square"
    },
    {
        url: "https://www.linkedin.com/in/rohan-hussain/",
        iconClass: "fab fa-linkedin"
    }
]

module.exports = { name, metaDescription, siteTitle, data, featuredWorks, experiences, posts, links, titles, title_icons }