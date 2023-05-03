import React from "react";
import { RotatingTriangles } from "react-loader-spinner";
const Blog = () => {
  <RotatingTriangles colors={["#8C5E58", "#2B061E", "#361134"]} />;
  return (
    <div>
      <div>
        <h1 className="text-[40px] font-poppins font-bold text-center">
          Welcome To Blog Page
        </h1>
        <div className="border-2 h-[350px] lg:w-[600px] p-[10px] m-auto my-[30px]">
          <h1 className="font-bold font-poppins bg-slate-500">
            1.Tell us the differences between uncontrolled and controlled
            components
          </h1>
          <p className="font-title font-semibold text-[20px]">
            Ans:In React, controlled components refer to components that have
            their state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
        </div>
        <div className="border-2 h-[350px] lg:w-[600px] p-[10px] m-auto my-[30px]">
          <h1 className="font-bold font-poppins bg-slate-500">
            2.How to validate React props using PropTypes
          </h1>
          <p className="font-title font-semibold text-[20px]">
            Ans:To validate React props using PropTypes, you first need to
            import the PropTypes library from the 'prop-types' package in your
            React component file. Once you have imported PropTypes, you can
            define the types and shape of your props by creating a propTypes
            object within your component.
          </p>
        </div>
        <div className="border-2 lg:h-[600px] h-[1000px] lg:w-[600px] p-[10px] m-auto my-[30px]">
          <h1 className="font-bold font-poppins bg-slate-500">
            3.Tell us the difference between nodejs and express js.
          </h1>
          <p className="font-title font-semibold text-[20px]">
            Ans:
            <span className="font-title">
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
              engine that allows developers to run JavaScript on the
              server-side. It is an open-source, cross-platform environment that
              enables building scalable, high-performance network applications
              using a non-blocking I/O model. Node.js provides core modules for
              handling file system I/O, networking, and other low-level
              operations, making it a popular choice for building server-side
              applications such as real-time chat applications, e-commerce
              websites, and APIs
            </span>
            <br></br>
            <br></br>
            <span>
              Express.js is a lightweight, flexible, and minimalist web
              application framework built on top of Node.js. It provides a set
              of features for building web and mobile applications, such as
              routing, middleware, and templates. Express.js simplifies the
              process of building server-side applications by providing a set of
              pre-built functionalities that can be easily extended using
              middleware. Express.js enables developers to build single-page
              applications, APIs, and dynamic websites by providing a simple and
              intuitive API. It is widely used in the industry due to its
              simplicity, flexibility, and powerful features.
            </span>
          </p>
        </div>

        <div className="border-2 h-[350px] lg:w-[600px] p-[10px] m-auto my-[30px]">
          <h1 className="font-bold font-poppins bg-slate-500">
            4.What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="font-title font-semibold text-[20px]">
            Ans:Custom React JS hooks offer reusability as when a custom hook is
            created, it can be reused easily, which makes the code cleaner and
            reduces the time to write the code. It also enhances the rendering
            speed of the code as a custom hook does not need to be rendered
            again and again while rendering the whole code.
          </p>
        </div>
      </div>

      <button className="btn btn-primary w-[300px]">Download</button>

      <div className="text-center"></div>
    </div>
  );
};

export default Blog;
