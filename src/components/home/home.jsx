import './home.css';
import myphoto from './IMG_2723.jpg';

function Home(){
    return (
        <div className="flex flex-col justify-between items-center gap-8">
            <div className='flex justify-center items-center'>
                <div className='w-60 h-60 overflow-hidden relative rounded-[50%]'>
                    <img src={myphoto} alt='Abhishek Soni' className='absolute bottom-0'></img>
                </div>
            </div>
            <div className="text-center w-[80%] font-[lora] text-lg">
                Hi 👋,
                I am a Software Engineer based out of Mumbai India.
                I code in Python for a living. In my free time I like to dabble with and build React Web apps. I am also learning Machine Learning, to keep up with the times.
                I also have some work experience in C/C++ during the initial years of my career.
            </div>
        </div>
    );
}

export default Home;