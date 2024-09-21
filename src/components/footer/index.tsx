'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';

const FooterLogo = dynamic(() => import('../../utils/footerLogo').then((mod) => mod.FooterLogo), {
    ssr: false,
})

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-8">
            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-bold mb-4">Stay on pace</h3>
                        <p className="mb-4">Sign up for our newsletter for all the latest Mamostong related news.</p>
                        <form className="mb-4">
                            <h4 className="text-xs uppercase mb-2 text-gray-400">FOCUS</h4>
                            <div className="flex space-x-4 mb-4">
                                {['Runner', 'Cyclist', 'Triathlete', 'Other'].map((focus) => (
                                    <label key={focus} className="flex items-center">
                                        <input type="checkbox" className="mr-2 bg-transparent border-white" />
                                        <span className="text-sm">{focus}</span>
                                    </label>
                                ))}
                            </div>
                            <h4 className="text-xs uppercase mb-2 text-gray-400">EMAIL</h4>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full p-2 bg-transparent border-b border-white mb-4 text-sm"
                            />
                            <p className="text-xs mb-4 text-gray-400">
                                By signing up you agree to our terms and conditions and privacy policies. We dont send a lot of newsletters, and you wont get spammed. You can opt out anytime.
                            </p>
                            <button className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors duration-300">
                                Sign up
                            </button>
                        </form>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" className="text-white hover:text-gray-300">
                                <FaFacebookF size={20} />
                            </Link>
                            <Link href="https://instagram.com" className="text-white hover:text-gray-300">
                                <FaInstagram size={20} />
                            </Link>
                            <Link href="https://twitter.com" className="text-white hover:text-gray-300">
                                <FaTwitter size={20} />
                            </Link>
                            <Link href="https://youtube.com" className="text-white hover:text-gray-300">
                                <FaYoutube size={20} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-400">Products</h3>
                                {['Drink Mix 160', 'Drink Mix 320', 'Drink Mix 320 Caf 100', 'Gel 100', 'Gel 100 Caf 100', 'Gel 160', 'Solid 160', 'Solid C 160', 'Bicarb System'].map((product) => (
                                    <Link key={product} href="#" className="block mb-2 text-sm text-white hover:underline">{product}</Link>
                                ))}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-400">Pages</h3>
                                <Link href="#" className="block mb-2 text-sm text-white hover:underline">Shop</Link>
                                <Link href="#" className="block mb-2 text-sm text-white hover:underline">Race Partners</Link>
                                <Link href="#" className="block mb-2 text-sm text-white hover:underline">The Fuel Guides</Link>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-4 text-gray-400">Company</h3>
                                <Link href="#" className="block mb-2 text-sm text-white hover:underline">Contact</Link>
                            </div>
                        </div>
                        <div className="mx-auto mt-16">
                            <h3 className="text-lg font-bold mb-4 text-gray-400">Mamostong Global</h3>
                            <p className="mb-8">
                                <a href="mailto:info@Mamostong.com" className="underline text-sm text-white">info@Mamostong.com</a>
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold mb-2 text-sm text-white">Mamostong AB</h4>
                                    <p className="text-sm text-gray-400">Gibraltargatan 1A<br />411 32 Gothenburg<br />Sweden</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2 text-sm text-white">Mamostong US Corp</h4>
                                    <p className="text-sm text-gray-400">1000 N. West Street, Suite 1200<br />Wilmington, Delaware, 19801<br />United States</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2 text-sm text-white">Mamostong Canada Inc.</h4>
                                    <p className="text-sm text-gray-400">2 Bloor Street West<br />Suite 2120<br />Toronto, ON M4W 3E2</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2 text-sm text-white">Mamostong UK Ltd.</h4>
                                    <p className="text-sm text-gray-400">Sweden House<br />5 Upper Montagu Street<br />London W1H 2AG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex justify-between items-center">
                    <p className="text-xs text-gray-400">Copyright © 2024 Mamostong. All rights reserved.</p>
                    {/* <Image src="/icons/logo.svg" alt="Mamostong" width={100} height={40} /> */}
                    <Canvas
                        camera={{ position: [0, 0, 5], fov: 50 }}
                        style={{ width: '150px', height: '100px' }}
                    >
                        <FooterLogo />
                    </Canvas>
                </div>
                <div className="mx-auto mt-8 flex space-x-4 text-xs">
                    <Link href="#" className="text-gray-400 hover:underline">FAQ</Link>
                    <Link href="#" className="text-gray-400 hover:underline">Shipping</Link>
                    <Link href="#" className="text-gray-400 hover:underline">Terms of Service</Link>
                    <Link href="#" className="text-gray-400 hover:underline">Refund policy</Link>
                    <Link href="#" className="text-gray-400 hover:underline">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};