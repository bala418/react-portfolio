const header = {
  homepage: "https://balasubramaniam.me",
  title: "BS",
};

const about = {
  name: "Bala Subramaniam",
  role: "Full Stack Developer",
  description:
    "An Enthusiastic Web Developer with a passion of working with computer software. Skilled in Full-Stack Web application development which includes React, Expressjs, JavaScript and Nodejs and connecting to databases like Postgresql, MySQL and MongoDB. I enjoy building apps that makes life easier. Love solving algorithmic problems in spare time.",
  resume:
    "https://drive.google.com/file/d/18DdFF3D8kWJe0qm0KqFI4wGgHv2Aaoes/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/bala418/",
    github: "https://github.com/bala418",
    twitter: "https://twitter.com/bala_418",
  },
};

const projects = [
  {
    name: "Blog",
    description:
      "Worked on creating a simple blog like site with EJS as the front end. Database functionality using MongoDB has been implemented. Created back-end using NodeJS and Express and hosted on Heroku. Similar app with Routes and other features created using ReactJS",
    stack: ["nodejs", "mongodb", "express"],
    sourceCode: "https://github.com/bala418/blogv1",
    livePreview: "https://bala418-blog.up.railway.app/",
  },

  {
    name: "File Compression",
    description:
      "A file compression application developed using C /C++where text files are encoded to save space. The encoded file was decoded back with the code-map thus creating lossless decomposition. Implemented using Huffman Coding.",
    stack: ["data-structures", "algorithms", "huffman-coding", "c/c++"],
    sourceCode: "https://github.com/bala418/file-compression-c",
  },
  {
    name: "Read_It",
    description:
      "A full-stack social media site(reddit.com clone), which has all major features of a social networking site. Community wise sub-reddits are there which people can join. Other features like comments, following and un-following, liking and removing likes, searching etc is implemented.",
    stack: ["PHP", "JavaScript", "MySQL", "XAMPP"],
    sourceCode: "https://github.com/bala418/read_it",
    livePreview: "https://read-it1.000webhostapp.com/",
  },

  {
    name: "Memory Game",
    description:
      "A memory game where the user has to find the matching pairs of cards. The game is implemented using ReactJS. useState is used to keep track of the cards and their states. useEffect is used only once to initialize and shuffle cards.",
    stack: ["reactjs", "javascript"],
    sourceCode: "https://github.com/bala418/memory-game",
    livePreview: "https://bala418-memory-game.netlify.app/",
  },

  {
    name: "Workout Buddy",
    description:
      "Workout Buddy is a fitness app which helps people to keep track of their workouts. The app is developed using ReactJS and uses Context API to keep track of the workouts. Users can login and create workouts and it is saved in the database.",
    stack: ["reactjs", "nodejs", "mongodb", "express"],
    sourceCode: "https://github.com/bala418/workout-buddy",
  },

  {
    name: "Keeper App",
    description:
      "A google keep clone app which is developed using ReactJS. The app is fully functional. Users can create notes and the notes are listed in the app. Users can also delete notes.",
    stack: ["reactjs", "javascript"],
    sourceCode: "https://github.com/bala418/keeper-react",
    livePreview: "https://bala418-keep.netlify.app/",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "PHP",
  "C/C++",
  "C#",
  "ReactJS",
  "ExpressJS",
  "NodeJS",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "SASS",
  "Git",
  "Firebase",
  "NextJS",
  "AWS",
];

const contact = {
  email: "balavtwo@gmail.com",
};

export { header, about, projects, skills, contact };
