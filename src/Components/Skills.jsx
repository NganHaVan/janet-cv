/* eslint-disable react/jsx-no-comment-textnodes */
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Firebase from "../assets/firebase.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactImg from "../assets/react.png";
import AWS from "../assets/aws.png";
import TailwindImg from "../assets/tailwind.png";
import TypescriptImg from "../assets/typescript.png";
import Database from "../assets/database.png";
import Docker from "../assets/docker.png";
import Redux from "../assets/redux.png";
import Vue from "../assets/Vue.png";
import CICD from "../assets/CICD.png";
import Jest from "../assets/Jest.png";
import Kotlin from "../assets/Kotlin.png";

export default function Skills() {
  return (
    <div
      name="skills"
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:h-screen md:max-h-full text-gray-300"
    >
      <div>
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-secondary">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I have worked with
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-4">
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img
              className="w-20 mx-auto"
              src={TailwindImg}
              alt="Tailwind Icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Javascript} alt="JS Icon" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img
              className="w-20 mx-auto"
              src={TypescriptImg}
              alt="Typescript Icon"
            />
            <p className="my-4">Typescript</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img
              className="w-20 mx-auto"
              src={ReactImg}
              alt="Typescript Icon"
            />
            <p className="my-4">ReactJS and React Native</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Vue} alt="Vue Icon" />
            <p className="my-4">VueJS</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Node} alt="NodeJS Icon" />
            <p className="my-4">NodeJS + ExpressJS</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Kotlin} alt="Kotlin Icon" />
            <p className="my-4">Kotlin</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Database} alt="Database Icon" />
            <p className="my-4">SQL and NoSQL</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Redux} alt="Redux Icon" />
            <p className="my-4">Redux</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Docker} alt="Docker Icon" />
            <p className="my-4">Docker</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase Icon" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={AWS} alt="AWS Icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={CICD} alt="CI/CD Icon" />
            <p className="my-4">CI/CD pipeline</p>
          </div>
          <div className="duration-500 shadow-md shadow-shadowColor hover:scale-110">
            <img className="w-20 mx-auto" src={Jest} alt="Jest Icon" />
            <p className="my-4">Jest</p>
          </div>
        </div>
      </div>
    </div>
  );
}
