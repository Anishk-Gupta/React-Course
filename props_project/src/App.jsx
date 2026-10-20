import Card from "./components/Card"
const profileData = [
  {
    id: 1,
    status: "available",
    rate: "$55/hr",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    name: "Wade Wilson",
    profession: "UI/UX designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "photoshop"],
    bio: "Wade is 32 year old UI/UX designer, with an impressive portfolio behind him"
  },
  {
    id: 2,
    status: "busy",
    rate: "$70/hr",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    name: "Alex Smith",
    profession: "Frontend Developer",
    company: "Tech Solutions",
    skills: ["React", "JS", "CSS"],
    bio: "Alex is 28 year old developer with a passion for clean web interfaces."
  },
  {
    id: 3,
    status: "available",
    rate: "$65/hr",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Sara Connor",
    profession: "Product Manager",
    company: "Innovate Hub",
    skills: ["Agile", "Scrum", "Strategy"],
    bio: "Sara is 30 year old manager handling multiple tech products successfully."
  },
  {
    id: 4,
    status: "available",
    rate: "$50/hr",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "John Doe",
    profession: "Backend Developer",
    company: "Code Craft",
    skills: ["Node", "Express", "MongoDB"],
    bio: "John is 26 year old backend enthusiast focused on scalable databases."
  },
  {
    id: 5,
    status: "busy",
    rate: "$90/hr",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    name: "Emma Watson",
    profession: "Full Stack Engineer",
    company: "Alpha Systems",
    skills: ["React", "Node", "AWS"],
    bio: "Emma is 29 year old full stack wizard building cloud-native applications."
  },
  {
    id: 6,
    status: "available",
    rate: "$45/hr",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    name: "Michael Ross",
    profession: "Graphic Designer",
    company: "Pixel Studio",
    skills: ["Illustrator", "Figma", "Branding"],
    bio: "Michael is 27 year old creative designer making stunning brand identities."
  },
  {
    id: 7,
    status: "available",
    rate: "$80/hr",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    name: "Sophia Taylor",
    profession: "Data Scientist",
    company: "Data Corp",
    skills: ["Python", "Pandas", "AI"],
    bio: "Sophia is 31 year old data expert turning raw numbers into insights."
  },
  {
    id: 8,
    status: "busy",
    rate: "$60/hr",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    name: "David Miller",
    profession: "Mobile Developer",
    company: "App Works",
    skills: ["Flutter", "Dart", "Firebase"],
    bio: "David is 25 year old mobile app developer building cross-platform tools."
  },
  {
    id: 9,
    status: "available",
    rate: "$75/hr",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    name: "Jessica Brown",
    profession: "QA Engineer",
    company: "Bug Free Inc",
    skills: ["Selenium", "Jest", "Cypress"],
    bio: "Jessica is 28 year old quality tester ensuring flawless software deliveries."
  },
  {
    id: 10,
    status: "available",
    rate: "$85/hr",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    name: "Ryan Reynolds",
    profession: "DevOps Engineer",
    company: "Cloud Net",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    bio: "Ryan is 33 year old DevOps specialist managing seamless deployments."
  }
];
const App = () => {
  return (
    <div className='parent'>
      {profileData.map(function(data){
        return <Card name={data.name} image={data.image} profession={data.profession} company={data.company} rate={data.rate} status={data.status} bio={data.bio} skills={data.skills}/>
      })}
    </div>
  )
}

export default App
