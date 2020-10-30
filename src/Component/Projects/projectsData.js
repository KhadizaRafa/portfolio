import projectImage from '../../images/1.jpg';
import projectImage2 from '../../images/2.png';
import projectImage3 from '../../images/3.png';
let projectsArray = [
    {
        id: '1',
        title: 'Creative Agency',
        detail: 'This project is basically a service provider company where a client can request for multiple services for his/her company, view the status of their requested services and provide reviews. Admin of this agency handles each request, update status, add new services. Admin and client login handled separately from the same module.',
        tools: ['React', 'Express','React Router','Rest Api','MongoDB','Heroku','HTML','javaScript','CSS'],
        githubLink : 'https://github.com/KhadizaRafa/creative-agency-client',
        liveLink : 'https://creative-agency-92369.web.app/',
        image: projectImage
    },
    {
        id: '2',
        title: 'Travel Guru',
        detail: 'A travelling website where user can select any suitable destination, register a booking form with selected location and arrival date, place an order for particular room. A map is added which will appear according to user’s destination.',
        tools: ['React', 'Express','React Router','Rest Api','MongoDB','Heroku','HTML','javaScript','CSS'],
        githubLink : 'https://github.com/KhadizaRafa/travel-guru',
        liveLink : 'https://travel-guru-8a6c4.web.app',
        image: projectImage2
    },
    {
        id: '3',
        title: 'Volunteer Network',
        detail: 'A website to encourage people to participate in different social jobs. A volunteer can register to any tasks by selecting it and view added tasks. Admin can generate new events and delete any volunteer’s tasks. The volunteer can get their updated task list by logging into their respective account.',
        tools: ['React', 'Express','React Router','Rest Api','MongoDB','Heroku','HTML','javaScript','CSS'],
        githubLink : 'https://github.com/KhadizaRafa/travel-guru',
        liveLink : 'https://travel-guru-8a6c4.web.app',
        image: projectImage3
    }
]


export default projectsArray;