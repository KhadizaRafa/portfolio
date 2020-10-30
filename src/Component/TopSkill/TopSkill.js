import React from 'react';
import SkillBar from 'react-skillbars';

const TopSkill = () => {
    const skills = [
        {
            "type": "Javascript",
            "level": 80
          },
          {
            "type": "React",
            "level": 75
          },
          {
            "type": "Redux",
            "level": 50
          },
          {
            "type": "Node.js",
            "level": 60
          },
          {
            "type": "MongoDB",
            "level": 60
          },
          {
            "type": "HTML",
            "level": 90
          },
          {
            "type": "CSS",
            "level": 80
          },
          {
            "type": "Material-UI",
            "level": 70 
          }
      ];

      let colors = {
        "bar": "#3498db",
        "title": {
          "text": "#fff",
          "background": "#2980b9"
        }
      }

    return (
        <div className="container mt-5">
            <h2>My Skills</h2>
            <hr/>
            <SkillBar skills={skills} height={15} colors={colors}/>
        </div>
    );
};

export default TopSkill;