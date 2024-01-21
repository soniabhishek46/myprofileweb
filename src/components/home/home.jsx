import './home.css';
import myphoto from './IMG_2723.jpg';

function Home(){
    return (
        <div className="flex flex-col justify-between items-center gap-20">
            <div className='flex justify-center items-center'><div className='w-40 h-40 overflow-hidden relative rounded-[50%]'><img src={myphoto} alt='Abhishek Soni' className='absolute bottom-0'></img></div></div>
            <div className="text-center w-[80%] text-slate-500">
                Hi,
                I am a Software Engineer based out of Mumbai India.
                I mainly work on Python. Using libraries like Pandas, Numpy, FastAPI, Django etc.
                I have also worked on C/C++ earlier.
            </div>
        </div>
    );
}

export default Home;