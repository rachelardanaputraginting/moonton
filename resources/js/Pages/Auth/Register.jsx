import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        // console.log(data);
        post(route('register'));
    };


    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/images/signup-image.png" className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Full Name" />
                                    <TextInput type="text" id="name"
                                        name="name" value={data.name} autoComplete="name"
                                        isFocused={true}
                                        onChange={handleOnChange} placeholder="Your fullname..." />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="email" value="Email Address" />
                                    <TextInput id="email"
                                        type="email"
                                        name="email"
                                        value={data.email} placeholder="Your Email Address"
                                        onChange={handleOnChange}
                                        required />
                                    <InputError message={errors.email} className="mt-2" autoComplete="username" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput id="password"
                                        type="password"
                                        name="password"
                                        value={data.password} placeholder="Your Password" autoComplete="new-password"
                                        onChange={handleOnChange}
                                        required />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <InputLabel htmlFor="password" value="Password Confirmation" />
                                    <TextInput id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation} placeholder="Your Password" autoComplete="new-password"
                                        onChange={handleOnChange}
                                        required />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="submit" variant="primary" processing={processing}>
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>

                                <Link href={route('login')}>
                                    <Button type="submit" variant="light-outline">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                                {/* <button type="submit" class="rounded-2xl bg-alerange py-[13px] text-center">
                            <span class="text-base font-semibold">
                                Sign Up
                            </span>
                        </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
