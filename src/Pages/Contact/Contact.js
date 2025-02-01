import React, { useEffect, useState } from 'react';
import quote from '../../assets/icons/quote.svg';
import Review from '../Home/Review';
const Contact = () => {
    const [reviews, setReviews] = useState([]);
    const path = window.location.pathname;

    useEffect(() => {
        const apiUrl = path.includes('testimonials')
            ? 'http://localhost:5000/reviewsall'
            : 'http://localhost:5000/reviews';

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error("Error fetching reviews:", error));
    }, [path]);

    return (
        <section class="bg-gray-100 py-12">
            {/* <!-- Contact Details Section --> */}
            <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Us</h2>
            <div class="mt-10 text-center space-y-4">
                <p class="text-gray-700 text-2xl font-bold">📍 Mukti Power Private Ltd</p>


                <p class="text-gray-700 text-lg"><strong>📍 Head Office:</strong> 1/2/B Sagufta D'lorel, Level-4(Lift-5), Kamlapur Bazar, Motijheel C/A, Dhaka, Bangladesh.</p>
                <p class="text-gray-700 text-lg"><strong>📍 Factory  Address:</strong>  Dogair Bazar (Noyapara), Sarulia, Demra, Dhaka-1362. </p>
                <p class="text-gray-700 text-lg"><strong>📧 Email:</strong> muktipowerpvtltd@gmail.com</p>


                <p class="text-gray-700 text-lg"><strong>📞 Mr Eng Md Abul Hasan, (Managing Director):</strong> +880 1306-517716</p>
                <p class="text-gray-700 text-lg"><strong>📞 Mr. Eng Md Shahriar Kobir, Director (Technical & Operation): </strong> +880 1972-373745</p>
                <p class="text-gray-700 text-lg"><strong>📞 Mr. Eng Mohammad Hasan, Director (Marketing):  </strong> +8801724-675557</p>

            </div>
            <div class="mt-12">
                <h3 class="text-2xl font-semibold text-center text-gray-800 mb-6">Find Us on the Map</h3>
                <div class="aspect-w-16 aspect-h-9">
                    <iframe
                        src="https://maps.app.goo.gl/fRkAumUUpu9cbdKb8?g_st=aw"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />

                </div>
            </div>
            <div class="max-w-4xl mx-auto px-6 py-8">
                <h4 class="text-3xl font-semibold text-center text-gray-800 mb-6">Furthure Any Quiestion</h4>
                <p class="text-center text-gray-600 mb-8">We'd love to hear from you! Reach out via the form below or use our contact details.</p>

                <div class="bg-white p-8 shadow-lg rounded-lg">
                    <form action="#" method="POST">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-medium">Name</label>
                            <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" />
                        </div>

                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-medium">Email</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300" />
                        </div>

                        <div class="mb-4">
                            <label for="message" class="block text-gray-700 font-medium">Message</label>
                            <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"></textarea>
                        </div>

                        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Send Message</button>
                    </form>
                </div>


            </div>
        </section>

    );
};

export default Contact;
