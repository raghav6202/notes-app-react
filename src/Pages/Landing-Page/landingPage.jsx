import "./landingPage.css"

export const LandingPage= () =>
{

    return(

        <div className="landing-page">


<div className="landing-info">
    <div className="app-name"> <span className="eazy-clr">eazy</span>Note</div>
    <p className="app-tagline">Just Keep Calm and <span className="eazy-clr1">take notes</span> </p>
    <p className="app-desc">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>

    <button className="explr-btn">Explore Now!</button>
     </div>

     <div className="landing-img">
    <img src="image/note-2.svg" alt="note-img" />
</div>

        </div>

        
    )
} 