import { useEffect, useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
    const [amount, setAmount] = useState(null);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(null);

    // const backgroundImageURL =
    //     "https://images.pexels.com/photos/15685822/pexels-photo-15685822/free-photo-of-emblem-on-urban-residential-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const backgroundImageURL =
        "https://images.pexels.com/photos/29505179/pexels-photo-29505179/free-photo-of-duomo-di-firenze-against-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const currencyInfo = useCurrencyInfo(from) || {};

    const options = Object.keys(currencyInfo);

    /*
    const swapAmount = () => {
        // setConvertedAmount(amount);
        // setAmount(convertedAmount);
        // const prevAmount = amount;
        // setConvertedAmount(prevAmount);
        // setAmount(null);
    };
    */

    const swap = () => {
        // swapAmount();
        setFrom(to);
        setTo(from);
        // console.log("amount: " + amount);
        // console.log("convertedAmount: " + convertedAmount);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
        // console.log("convertedAmount: " + convertedAmount + ", amount: " + amount);
    };

    const convert = () => {
        if (!amount || !currencyInfo[to]) {
            setConvertedAmount(0);
            return;
        }
        const calculatedAmount = Number((amount * currencyInfo[to]).toFixed(2));
        setConvertedAmount(calculatedAmount);
    };

    // useEffect(() => {
    //     convert();
    // }, [amount, from, to]);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageURL})` }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount || ""}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(newAmount) => setAmount(newAmount)}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount || ""}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                onAmountChange={(newAmount) => setConvertedAmount(newAmount)}
                                selectedCurrency={to}
                                amountDisable={true}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                            onClick={convert}
                        >
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
