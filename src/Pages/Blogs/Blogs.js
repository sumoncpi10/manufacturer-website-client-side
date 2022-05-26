import React from 'react';
// import Topbanar from '../Shared/TopBanar/Topbanar';
import './Blogs.css'
const Blog = () => {
    return (
        <div>
            <div class="hero ">
                <div class="hero-content text-center">
                    <div class="">
                        <h1 class="text-5xl font-bold">How will you improve the performance of a React Application?</h1>
                        <p class="py-6">Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                            According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                            In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                            In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div class="hero ">
                <div class="hero-content text-center">
                    <div class="">
                        <h1 class="text-5xl font-bold">What are the different ways to manage a state in a React application?</h1>
                        <p class="py-6">Managing state in your React apps isn’t as simple as using useState or useReducer.

                            Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                            In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div class="hero ">
                <div class="hero-content text-center">
                    <div class="">
                        <h1 class="text-5xl font-bold">How does prototypical inheritance work?</h1>
                        <p class="py-6">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div class="hero ">
                <div class="hero-content text-center">
                    <div class="">
                        <h1 class="text-5xl font-bold">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                        <p class="py-6">Each time you call setItems you would have to pass it a new array if you want to render. If you mutate the same array then the equality checks that react does to see if things have changed will always tell that array hasn't changed so no rendering will take place.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div class="hero ">
                <div class="hero-content text-center">
                    <div class="">
                        <h1 class="text-5xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        <p class="py-6">I’ve been wanting to publish this guide for a long while. As a WooCommerce development freelancer, every day I repeat many operations that make me waste time… and one of them is indeed “How to get ____ if I have the $product variable/object?“.

                            For example, “How can I get the product SKU“? Or “How can I get the product short description“? Or maybe the product stock level, shipping class, tax class, price, regular price, sale price, and so on… hopefully this article will save you time.

                            Of course, not always you have access to the $product variable (I’m talking about WooCommerce hooks for example), so you’re also required to understand your case scenario and see if you can “get” that $product object in another way.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
            <div class="hero ">
                <div class="hero-content text-center">
                    <div class="">
                        <h1 class="text-5xl font-bold">What is a unit test? Why should write unit tests?</h1>
                        <p class="py-6">
                            UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                        <p class="py-6">
                            Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.</p>
                        {/* <button class="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Blog;