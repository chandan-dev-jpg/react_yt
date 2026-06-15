// import React from 'react'
import Card from "./assets/componets/Card";
const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "UI Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "JavaScript Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "4 days ago",
    post: "Frontend Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$20/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    datePosted: "6 days ago",
    post: "React JS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$30/hr",
    location: "Noida, India",
  },
];
console.log(jobs)
  return (
    <div  className='parent'>
      {jobs.map(function(elem)
      {
        return <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} price={elem.pay} />
      })}
    </div>
  )
}

export default App
