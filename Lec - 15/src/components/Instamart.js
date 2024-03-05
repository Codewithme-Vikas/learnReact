import { useState } from "react";


const Section = ({ title, description, isVisible, setIsVisible }) => {
    // console.log(" render section ", title )

    return (
        <div className="shadow shadow-blue-600 p-2 m-2 mx-6 flex flex-col gap-2">

            <h3 className="text-lg font-semibold ">{title}</h3>

            <button
                className="active:text-blue-800 p-1 px-2 w-fit"
                onClick={() => setIsVisible() }
            >
                {
                    isVisible ? "hide" : "show"
                }
            </button>

            {isVisible && <p>{description}</p>}

        </div>
    )
}

const InstaMart = () => {

    const [visibleSection, setVisibleSection] = useState("about");
    // console.log("render instamart")

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-center text-xl font-bold">Welcome! Lazy loading</h1>
            <h2 className="text-center text-lg font-bold">State lifting up</h2>

            <Section
                title="About"
                description="Hi I am Vikas, a 20 year old Web developer, YouTuber, and a Digital Marketer living in Noida, India. I am a Computer Science Engineer."
                isVisible={visibleSection === "about"}
                setIsVisible={() => {
                    visibleSection === "about" ? setVisibleSection("") : setVisibleSection("about")
                }}
            />

            <Section
                title="Carrer"
                description="Hi I am Vikas, a 20 year old Web developer, YouTuber, and a Digital Marketer living in Noida, India. I am a Computer Science Engineer."
                isVisible={visibleSection === "carrer"}
                setIsVisible={() => visibleSection === "carrer" ? setVisibleSection("") : setVisibleSection("carrer") }
            />


            <Section
                title="Team"
                description="Hi I am Vikas, a 20 year old Web developer, YouTuber, and a Digital Marketer living in Noida, India. I am a Computer Science Engineer."
                isVisible={visibleSection === "team"}
                setIsVisible={() => visibleSection === "team" ? setVisibleSection("") : setVisibleSection("team")}
            />

        </div>
    )
};

export default InstaMart;