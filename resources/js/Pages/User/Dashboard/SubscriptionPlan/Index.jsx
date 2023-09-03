import SubscriptionCard from "@/Components/SubscriptionCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import { router } from '@inertiajs/react'

export default function Index({ subscriptionPlans, ...props }) {
    const selectSubscriptions = id => {
        router.post(`subscription-plan/${id}/user-subscribe`)
    }

    return (
        <Authenticated auth={props.auth}>
            <Head title="Subscription Plan"></Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>
                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Subscriptions */}
                    {subscriptionPlans.map((subscription) => (
                        <SubscriptionCard name={subscription.name} price={subscription.price} durationInMonth={subscription.active_period_in_months} features={JSON.parse(subscription.features)}  isPremium={subscription.name === "Premium"} key={subscription.id} onSelectSubscription={() => selectSubscriptions(subscription.id)}
                        />
                    ))}

                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
}
