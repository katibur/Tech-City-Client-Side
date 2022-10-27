import React, { useContext } from 'react';
import Header from '../Header/Header';
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Blog = () => {

    const { myStyle } = useContext(AuthContext);

    return (
        <div style={myStyle}>
            <Header></Header>
            <Accordion flush className='mx-auto my-5 w-75 h-auto border rounded' defaultActiveKey="0">

                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is `cors`?</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is Google's Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014. Initially it started off as a realtime database and now offers developers and marketers a comprehensive selection of tools and products that not only help develop advanced applications, but also market them. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products. There is a lot to learn about the platform, however in this article we will cover the top five benefits of using Firebase by Google:
                        <br />
                        <br />
                        1. Google Analytics for Firebase allows you to track your users journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
                        <br />
                        <br />
                        2. Firebase was originally developed to be a realtime database, and today that is still one of its key features. The Realtime Database is essentially a cloud-hosted NoSQL database that stores data as JSON (JavaScript Object Notation) in real time. One of the key advantages for Firebase's Realtime Database is that it works offline by using local cache on the device to store any changes made. When app connectivity is resumed, the data is synced.
                        <br />
                        <br />
                        3. Most apps have some form of authentication feature that is necessary to identify the user. Thanks to Firebase's easy-to-use SDK, ready-made UI libraries, and backend services, it is possible to set up the whole authentication process in just a couple of minutes. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts.
                        <br />
                        <br />
                        4. Firebase Crashlytics allows you to track, prioritize, and fix stability issues that erode your app quality. Crashlytics sends you realtime detailed alerts whenever a bug or crash occurs. Using the detailed reports, developers and testers can find and fix bugs at a faster pace. Using Crashlytics out-of-the-box integration with Google Analytics provides developers with a secondary method for debugging using the 'app_exception' event.
                        <br />
                        <br />
                        5. Firebase Dynamic Links are smart URLs that enable marketers to promote the app across various external channels, such as social media, email, web, and more found here. One of the best features of dynamic links is the fact that they are usable by both app users and those that don't have the app installed. For a more detailed walkthrough of Dynamic Links, feel free to check out this article, written by one of my colleagues.
                        <br />
                        <br />
                        Authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.These are the other authentication options.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.
                        <br />
                        <br />
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        <br />
                        <br />
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        <br />
                        <br />
                        Node.js basically works on two concept:
                        <br />
                        <br />
                        1. Asynchronous
                        <br />
                        2. Non-blocking I/O
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Footer></Footer>
        </div>
    );
};

export default Blog;