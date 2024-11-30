import Image from "next/image";

const Skill = ({image , skill}) => {
    return (
        <div className="col-12 col-md-6">
            <div style={{borderRadius:"12px" , marginBottom:"23px" , direction:"rtl"}} className="d-flex skill align-items-center justify-content-end bg-gray-850 border-gray-800 p-3 shadow-sm">
                <p className="fw-bold color-gray-600 ms-2 mb-0 skill-card__skill">{skill}</p>
                <img className={`${skill == "Next Js (Fullstack)" && "rounded-circle"}`} loading="lazy" width={50} height={50} src={image} alt={skill} />
            </div>
        </div>
    );
};

export default Skill;