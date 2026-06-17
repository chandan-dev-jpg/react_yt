// import React from 'react'
import Card from "./assets/componets/Card"
const App = () => {
   const users = [
    {
      img:"https://images.pexels.com/photos/5439472/pexels-photo-5439472.jpeg",
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      location: "Hyderabad",
      followers: "1.2k",
      following: "500"
    },
    {
      img:"https://images.pexels.com/photos/15853819/pexels-photo-15853819.jpeg",
      id: 2,
      name: "Chandan Behera",
      role: "Java Full Stack Developer",
      location: "Bhubaneswar",
      followers: "2.5k",
      following: "800"
    },
    {
      img:"https://images.pexels.com/photos/8453951/pexels-photo-8453951.jpeg",
      id: 3,
      name: "Rahul Kumar",
      role: "Backend Developer",
      location: "Mumbai",
      followers: "3k",
      following: "700"
    },
    {
      img:"https://images.pexels.com/photos/15686678/pexels-photo-15686678.jpeg",
      id: 4,
      name: "Priya Sharma",
      role: "UI/UX Designer",
      location: "Delhi",
      followers: "4.1k",
      following: "900"
    },
    {
      img:"https://images.pexels.com/photos/5058929/pexels-photo-5058929.jpeg",
      id: 5,
      name: "Aman Singh",
      role: "React Developer",
      location: "Pune",
      followers: "1.8k",
      following: "600"
    }
  ];

  return (
    <div className="parent">
     
      {
        users.map((user) => (
          <Card
          img={user.img}
            key={user.id}
            name={user.name}
            role={user.role}
            location={user.location}
            followers={user.followers}
            following={user.following}
          />
        ))
      }
     
     
    </div>
  )
}

export default App
