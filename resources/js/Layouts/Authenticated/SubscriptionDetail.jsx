export default function SubscriptionDetail({name, isPremium, remainingActiveDays, activeDays}) {

    const remainingDays = activeDays - remainingActiveDays;
    const loadingProgress = () => {
        const progress = remainingDays / activeDays;
        if(progress > 0.25) {
            return 'w-3/12'
        }else if(progress > 0.5) {
            return 'w-0.5';
        }else if (progress > 0.75) {
            return 'w-0.75';
        }else {
            return 'w-full';
        }
    }

    return (
        <div className="mt-auto pr-[30px]">

            {/* Basis */}
            {!isPremium && (
                <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                    <div className="text-black text-lg font-semibold mb-8">
                        {name}
                    </div>
                    <div className="text-black text-sm mb-2">
                    {remainingActiveDays} of {activeDays} hari
                    </div>
                    <div className={`rounded-full h-[6px] bg-[#f1f1f1] ${loadingProgress()}`}>
                        <div className="rounded-full h-full w-full bg-alerange"></div>
                    </div>
                </div>
            )}

            {/* Premium */}
            {isPremium && (
                <div className="p-5 bg-black rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                    <img src="/icons/ic_star-rounded.svg" alt="" />
                    <div className="text-white text-lg font-semibold mb-8 mt-2">
                        {name}
                    </div>
                    <div className="text-white text-sm mb-2">
                    {remainingActiveDays} of {activeDays} hari
                    </div>
                    <div className={`rounded-full h-[6px] bg-[#f1f1f1] ${loadingProgress()}`}>
                        <div className="rounded-full h-full w-full bg-alerange"></div>
                    </div>
                </div>
            )}
        </div>
    )
}
