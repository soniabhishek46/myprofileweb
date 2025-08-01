import './page.css';
import reactimg from './images/reactjs-svgrepo-com.svg';
import expressimg from './images/express-svgrepo-com.svg';
import mlimg from './images/machine-learning-01-svgrepo-com.svg';
import healthimg from './images/health-svgrepo-com.svg';
import talkimg from './images/chat-round-unread-svgrepo-com.svg';
import cricimg from './images/cricket-helmet-svgrepo-com.svg';
import vegimg from './images/eggplant-svgrepo-com.svg';
import camimg from './images/camera-svgrepo-com.svg';
import twtimg from './images/twitter.svg';
import ghimg from './images/github-142-svgrepo-com.svg';
import emailimg from './images/email-18-svgrepo-com.svg';
import rcvimg from './images/file-cv-svgrepo-com.svg';
import pyimg from './images/python-svgrepo-com.svg';
import linimg from './images/linkedin-svgrepo-com.svg';


function Page({heading, points, para}){
    return(
        <div className="w-[100%] flex flex-col gap-10 md:gap-20">
            <h4 className='text-center text-2xl font-[lora]'>{heading}</h4>
            <div className="grid max-md:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {points.map(point => { return(
                    <div key={point.id} className="flex items-center gap-4 p-4 shadow-md rounded-md border border-gray-200 dark:bg-gray-400 dark:border dark:border-gray-300 transition-transform duration-300 ease-in-out transform -translate-y-0 hover:translate-y-[-10px]">
                        <img src={point.img_url} alt={point.text} className="w-10"></img>
                        <p className='font-[roboto] text-base'>{point.text}</p>
                    </div>
                )
                })}
            </div>
            <div className="text-center">
                <p className='font-[lora] text-lg'>{para}</p>
            </div>
        </div>
    );
}

export function TechInterests(){
    const heading = 'My interests in Technology';
    const points = [
                    {img_url: pyimg, text: 'Python', id: 1},
                    {img_url: mlimg, text: 'Machine Learning', id: 2},
                    {img_url: reactimg, text: 'React', id: 3},
                    {img_url: expressimg, text: 'Express', id: 4}];
    const para = 'Current interests are in Python, Machine Learning, and also in React & Express.';
    
    return (
        <Page heading={heading} points={points} para={para}/>
    );
}

export function OtherInterests(){
    const heading = 'My other Interests, apart from Technology';
    const points = [{img_url: healthimg, text: 'Health Nutrition & Fitness', id: 1},
                    {img_url: talkimg, text: 'Talking to friends', id: 2},
                    {img_url: cricimg, text: 'Cricket (T20 & One Day)', id: 3},
                    {img_url: vegimg, text: 'Good Vegetarian food', id: 4},
                    {img_url: camimg, text: 'Photography', id: 5}];
    const para = 'Some of the things which keep me occupied, apart from Work.';
    
    return (
        <Page heading={heading} points={points} para={para}/>
    );
}

export function SocialLinks(){
    const heading = 'Social App Links & CV/Resume';
    const points = [
                    {img_url: twtimg, text: (<a href='https://x.com/SoniAbhishek79'>X.com</a>), id: 1},
                    {img_url: linimg, text: (<a href='https://www.linkedin.com/in/abhishek-soni-dec291978/'>LinkedIn</a>), id: 2},
                    {img_url: ghimg, text: (<a href='https://github.com/soniabhishek46'>Github</a>), id: 3},
                    {img_url: emailimg, text: (<a href='mailto:soni.abhishek@outlook.in'>EMail</a>), id: 4},
                    {img_url: rcvimg, text: (<a href='https://drive.google.com/file/d/1-bUJRjvTLxt6-u8Ki810OfrXFrtAApH1/view?usp=sharing'>CV/Resume</a>), id: 5}
                    ];
    const para = 'Contact me by clicking or following the above links...';
    
    return (
        <Page heading={heading} points={points} para={para}/>
    );
}


export default Page;
