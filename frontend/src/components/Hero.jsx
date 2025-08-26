import kucing from "../assets/images/Hero.gif"

export default function Hero() {
    return (
        <main className="grid justify-center items-center mt-16 ">
            <div className="w-40 h-40">
        <img className="w-full h-full ml-20 mt-4 object-cover"
        src={kucing} alt="kucing" />
        </div>
        <div className="text-xl font-normal comfortaa-custom grid justify-center items-center">
            <h1 className="text-center">Cerita Alumni</h1>
            <h1>Cerita alumni yang sudah lulus!</h1>
        </div>
        </main>
    )
}