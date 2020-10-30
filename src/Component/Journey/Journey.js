import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase , FaGraduationCap , FaBook , FaSchool } from 'react-icons/fa';

const Journey = () => {
    return (
        <div className="container mt-5">
            <h2>My Jounrney</h2>
            <hr/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=" August 2019 - Current"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBriefcase />}

                >
                    <h3 className="vertical-timeline-element-title">Software Quality Assurance Engineer</h3>
                    <h5 className="vertical-timeline-element-subtitle">Tigerit Limited, Dhaka</h5>
                    <p>
                        Rest Api,Jmeter,Python, Kafka, Redis, ElasticSearch
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">BSc in CSE</h3>
                    <h4 className="vertical-timeline-element-subtitle">Aust,Dhaka</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2012 - 2014"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaBook />}
                >
                    <h3 className="vertical-timeline-element-title">HSC</h3>
                    <h4 className="vertical-timeline-element-subtitle">Holy Cross College</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">SSC</h3>
                    <h4 className="vertical-timeline-element-subtitle">Viqarunnisa Noon School and College</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Journey;