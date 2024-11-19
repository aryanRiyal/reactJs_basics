import "./App.css";
import Card from "./components/Card";

function App() {
    // const imgUrl =
    //     "https://images.pexels.com/photos/27269560/pexels-photo-27269560/free-photo-of-marti.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const Obj = {
        flight: "Can Fly",
        extinct: false,
        funFact:
            "Birds use calls, songs, dances, and their bodies to communicate. Some birds, like parrots, can mimic human speech."
    };

    const ObjExtinct = {
        flight: "Can Fly",
        extinct: true,
        funFact:
            "Birds use calls, songs, dances, and their bodies to communicate. Some birds, like parrots, can mimic human speech."
    };

    const newArr = [1, 2, 3, 4, 5];

    return (
        <>
            <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
            <Card title="BirdOne" info={Obj} />
            <Card title="BirdTwo" info={ObjExtinct} />
            <Card title="BirdThree" info={Obj} count={newArr} />

            {/**
            <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img
                    class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                    src={imgUrl}
                    alt=""
                    width="384"
                    height="512"
                />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
                            customize, adapts to any design, and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                        <div class="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
                    </figcaption>
                </div>
            </figure>
            */}
        </>
    );
}

export default App;
