import React from 'react'
import { skillList } from '../../constants/skills'

export default function Skills(){
    return (
      <div>
        <div className="text-lime-700">
          <h3 className="">Technical Skill</h3>
          <div className="text-lime-700">
            {/* <canvas width="300" height="300" className="text-lime-700"> */}
              <ul>
                {skillList?.map((skill) => (
                  <li key={skill.id}>
                    <span className="transform-cpu">{skill.skill}</span>
                  </li>
                ))}
              </ul>
            {/* </canvas> */}
          </div>
        </div>
      </div>
    );
}
