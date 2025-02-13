import { Icon } from "@iconify/react";
import spotify_logo from "../assets/spotify_logo_white.svg";
import IconText from "../shared/IconText";
import TextWithHover from "../shared/TextWithHover";
const focusCardsData = [
    {
        title: "Deep Focus",
        description: "Keep calm and focus o with thw music",
        imgUrl: "https://images.unsplash.com/photo-1555143152-c04e6f5ba6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8REVFUCUyMEZPQ1VTfGVufDB8fDB8fHww",
    },
    {
        title: "Focus flow",
        description: "Focus with soft study music in the background",
        imgUrl: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Beats to think it",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://plus.unsplash.com/premium_photo-1681400783826-8ae188a981b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VEVDTk98ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Peaceful Piano",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBJQU5PfGVufDB8fDB8fHww",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U1RVRFl8ZW58MHx8MHx8fDA%3D",
    },
];

const spotifyPlaylistsCardData = [
    {
        title: "Deep Focus",
        description: "Keep calm and focus o with thw music",
        imgUrl: "https://images.unsplash.com/photo-1555143152-c04e6f5ba6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8REVFUCUyMEZPQ1VTfGVufDB8fDB8fHww",
    },
    {
        title: "Focus flow",
        description: "Focus with soft study music in the background",
        imgUrl: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Beats to think it",
        description: "Focus with soft study music in the background.",
        imgUrl: "https://plus.unsplash.com/premium_photo-1681400783826-8ae188a981b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VEVDTk98ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Peaceful Piano",
        description: "Up tempo instrumental hip hop beats",
        imgUrl: "https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBJQU5PfGVufDB8fDB8fHww",
    },
    {
        title: "Beats to think to",
        description: "Focus with deep techno and tech house",
        imgUrl: "https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U1RVRFl8ZW58MHx8MHx8fDA%3D",
    },
];

const Home = () => {
    return (
        <div className="h-full w-full flex">
            {/*this first div will bw thw left panel*/}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
                <div>
                    <div className="logoDiv p-6">
                        <img src={spotify_logo} alt=" spotify_logo" width={125} />
                    </div>
                    <div className="py-5">
                        <IconText iconName={"mdi-light:home"}
                            displayText={"Home"}
                            active

                        />
                        <IconText iconName={"akar-icons:search"}
                            displayText={"Search"}
                            
                        />
                        <IconText iconName={"icomoon-free:books"}
                            displayText={"Library"} />
                    </div>
                    <div className="pt-7">
                        <IconText iconName={"icon-park-solid:add"}
                            displayText={"Create Playlist"}
                        />
                        <IconText iconName={"famicons:heart"}
                            displayText={"Liked Songs"}
                        />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full item-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="pajamas:earth" />
                        <div className="ml-2 text-sm font-semibold">
                            English
                            </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-4/5 bg-app-black overflow-auto ">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center ">
                            <TextWithHover displayText={"Premium"} />
                            <TextWithHover displayText={"Support"} />
                            <TextWithHover displayText={"Download"} />
                            <div className="h-1/2 border-r border-white"></div>
                            
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                            <TextWithHover displayText={"Sign up"} />
                            <div className="bg-white h-2/3 px-4 py-3 flex item-center justify-center rounded-full font-semibold cursor-pointer">
                                Log in
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                    <PlaylistView titleText="Focus"
                    cardsData={focusCardsData}
                    />
                    <PlaylistView titleText="Spotify-clone"
                    cardsData={spotifyPlaylistsCardData}
                    />
                    <PlaylistView titleText="Sound of india"
                    cardsData={focusCardsData}
                    />

                </div>

            </div>
        </div>
    );
};
const PlaylistView=({titleText,cardsData})=>{
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="w-full flex justify-betwee space-x-4">
                {
                    cardsData.map((item)=>{
                        return (
                        <Card 
                        title={item.title}
                        description={item.description} 
                        imgUrl={item.imgUrl}
                        />
                        );
                    })
                }
                 {/* <Card title="Deep Focus" 
                description="Keep calm and focus o with thw music"
                imgUrl="https://images.unsplash.com/photo-1555143152-c04e6f5ba6ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8REVFUCUyMEZPQ1VTfGVufDB8fDB8fHww"
                />
                <Card title="Instrumental Study" 
                description="Focus with soft study music in the background"
                imgUrl="https://plus.unsplash.com/premium_photo-1661761077411-d50cba031848?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U1RVRFl8ZW58MHx8MHx8fDA%3D"
                />
                <Card title="Focus flow" 
                description="up tempo instrumental hip hop beats"
                imgUrl="https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 />
                <Card title="Beats to think it" 
                description="Focus with deep techno and tech house "
                imgUrl="https://plus.unsplash.com/premium_photo-1681400783826-8ae188a981b7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VEVDTk98ZW58MHx8MHx8fDA%3D"
                />
                <Card title="Peaceful Piano" 
                description="Relax and indulge with beautiful piano pieces"
                imgUrl="https://images.unsplash.com/photo-1514119412350-e174d90d280e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBJQU5PfGVufDB8fDB8fHww"
                /> */}
            </div>
        </div>
    );

};
const Card=({title,description, imgUrl})=>{
    return (
        <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md"
                 src={imgUrl}
                 alt="label"/>
            </div>
            <div className="text-white text-sm font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    )

}
export default Home;
