import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="m-5 flex flex-wrap items-center justify-center px-8">
      <div className="flex-1 text-right px-8">
        <h1 className="text-2xl mb-5 font-bold">How To Build Your Own Workout Routine: Plans, Schedules, And Exercises</h1>
        <img src="src\assets\3.jpg" alt="" />
        <h2 className="text-1x1 mb-5 font-bold">I get multiple emails and messages per day asking:</h2>
        <p className="text-lg mb-3 text-orange-">
          “Steve, what should I do for a workout?” <br />
          Well, partner, today is your lucky day. <br />
          ........</p>
        <p className="text-base italic font-semibold">After all, a workout should be developed around a person’s training age, goals, injury history, free time, and available equipment, not to mention things you ENJOY doing! <br />
          Considering all those factors, it’s easy to overcomplicate this process. There are a seemingly infinite number of exercises, sets, reps, and programs to choose from. Don’t worry – together, we’ll cut through the noise and get to the good stuff. <br />
        </p>
        <h1 className="text-2xl mb-5 font-bold">Now, if you’re more of a “figure this stuff out on my own” kind of person – we’re going to dig into how to build your own workout plan today! <br />
        </h1>
        <img className="size-full" src="src\assets\2.jpg" alt="" />
        <p className="text-base italic font-semibold">
          We’ve also created a free resource you can take with you, Strength Training 101: Everything You Need to Know, which covers all of this stuff in a single guide. <br />
        </p>
        <h1 className="text-2xl px-8 mb-5 font-bold italic font-bold"> OKAY! Are you ready to start building your own routine?<br />
        </h1>

        <h1 className="font-bold text-left px-8">HEAR ARE THE EXERCISE....▼</h1>

        <Link to="/determinance" className='text-orange-700 hover:text-green-300 font-bold'> ◙ Step #1: Determine your starting point </Link>

      </div>
      <div className="flex-1 px-8">

        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Home