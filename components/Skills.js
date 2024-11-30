import Skill from "./Skill";

const Skills = () => {
    return (
        <div className="container">
            <div className="row flex-lg-row-reverse">
                <div className="col-12 px-lg-0 py-3">
                <h4 style={{fontSize:"17px"}} className=" text-center text-lg-end px-0">:مهارت های توسعه دهنده</h4>
                <div style={{width:"170px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                </div>
                <Skill skill={"HTML"} image={"/images/components/modules/skills/html.png"} />
                <Skill skill={"CSS"} image={"/images/components/modules/skills/css.png"} />
                <Skill skill={"Java Script"} image={"/images/components/modules/skills/js.png"} />
                <Skill skill={"React Js"} image={"/images/components/modules/skills/react.png"} />
                <Skill skill={"Next Js (Fullstack)"} image={"/images/components/modules/skills/next.jpg"} />
                <Skill skill={"Git"} image={"/images/components/modules/skills/git.webp"} />
                <Skill skill={"Sass"} image={"/images/components/modules/skills/sass.png"} />
                <Skill skill={"Bootstrap 5"} image={"/images/components/modules/skills/bootstrap.webp"} />
                <Skill skill={"Graph QL"} image={"/images/components/modules/skills/graphql.png"} />
                <Skill skill={"Rest Api"} image={"/images/components/modules/skills/api.png"} />
                <Skill skill={"Redux"} image={"/images/components/modules/skills/redux.webp"} />
                <Skill skill={"Mongo DB"} image={"/images/components/modules/skills/mongodb.png"} />
            </div>
        </div>
    );
};

export default Skills;