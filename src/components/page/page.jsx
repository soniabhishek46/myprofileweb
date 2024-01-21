import './page.css';
import reactimg from './images/reactjs-svgrepo-com.svg';
import expressimg from './images/express-svgrepo-com.svg';
import mlimg from './images/machine-learning-01-svgrepo-com.svg';
import healthimg from './images/health-svgrepo-com.svg';
import talkimg from './images/chat-round-unread-svgrepo-com.svg';
import cricimg from './images/cricket-helmet-svgrepo-com.svg';
import vegimg from './images/eggplant-svgrepo-com.svg';
import camimg from './images/camera-svgrepo-com.svg';
import twtimg from './images/twitter-svgrepo-com.svg';
import ghimg from './images/github-142-svgrepo-com.svg';
import emailimg from './images/email-18-svgrepo-com.svg';
import rcvimg from './images/file-cv-svgrepo-com.svg';
import pyimg from './images/python-svgrepo-com.svg';

function Page({heading, points, para}){
    return(
        <div className="w-[100%] flex flex-col gap-10 md:gap-20">
            <h4 className='text-center text-slate-500 text-2xl font-extralight'>{heading}</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {points.map(point => { return(
                    <div key={point.id} className="flex items-center gap-4 p-4 shadow-md rounded-md">
                        <img src={point.img_url} alt={point.text} className="w-10"></img>
                        <p className='text-slate-500'>{point.text}</p>
                    </div>
                )
                })}
            </div>
            <div className="text-center">
                <p className='text-slate-500'>{para}</p>
            </div>
        </div>
    );
}

export function TechInterests(){
    const heading = 'My interests in Tech';
    const points = [{img_url: reactimg, text: 'React', id: 1},
                    {img_url: expressimg, text: 'Express', id: 2},
                    {img_url: pyimg, text: 'Python', id: 3},
                    {img_url: mlimg, text: 'Machine Learning', id: 4}];
    const para = 'I am interested in Python, Machine Learning, Javascript, Frontend framework (React), Nodejs (Express)';
    
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
    const heading = 'Social App Links & CV';
    const points = [{img_url: twtimg, text: (<a href='https://twitter.com/soniabhishek79'>X (twitter)</a>), id: 1},
                    {img_url: ghimg, text: (<a href='https://github.com/soniabhishek46'>Github</a>), id: 2},
                    {img_url: emailimg, text: (<a href='mailto:soni.abhishek@outlook.in'>EMail</a>), id: 3},
                    {img_url: rcvimg, text: (<a href='https://docs.google.com/document/d/1fpsVM7YkvWbS2YpT4u50qL1516BfH9eSPHX1DujroSw/edit?usp=sharing'>Dev Resume</a>), id: 4},
                    {img_url: rcvimg, text: (<a href='https://docs.google.com/document/d/1aA4lrLlkmaAyNXtuXdrBKdypVngeWxmXqRWMT0zGJ2I/edit?usp=sharing'>Test Resume</a>), id: 5}];
    const para = 'Contact me by following the above links...';
    
    return (
        <Page heading={heading} points={points} para={para}/>
    );
}


export default Page;