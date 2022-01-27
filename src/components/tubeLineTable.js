import React from "react";
import { Link } from "react-router-dom";

function TubeLineTable(props) {
  // to refactor:
  // loop through props data based on an array of tube line names &
  // render html table elements programatically using React .map render method.

  console.log(props, "props on table page");

  let bakerlooStatus =
    props.state.bakerlooData[0].lineStatuses[0].statusSeverityDescription;

  console.log(bakerlooStatus, "<--- Bakerloo Status");

  let centralStatus =
    props.state.centralData[0].lineStatuses[0].statusSeverityDescription;

  console.log(centralStatus, "<--- Central Status");

  let circleStatus =
    props.state.circleData[0].lineStatuses[0].statusSeverityDescription;

  console.log(circleStatus, "<--- Circle Status");

  let districtStatus =
    props.state.districtData[0].lineStatuses[0].statusSeverityDescription;

  console.log(districtStatus, "<--- District Status");

  let hammersmithStatus =
    props.state.hammersmithData[0].lineStatuses[0].statusSeverityDescription;

  console.log(hammersmithStatus, "<--- Hammersmith Status");

  let jubileeStatus =
    props.state.jubileeData[0].lineStatuses[0].statusSeverityDescription;

  console.log(jubileeStatus, "<--- Jubilee Status");

  let metropolitanStatus =
    props.state.metropolitanData[0].lineStatuses[0].statusSeverityDescription;

  console.log(metropolitanStatus, "<--- Metropolitan Status");

  let northernStatus =
    props.state.northernData[0].lineStatuses[0].statusSeverityDescription;

  console.log(northernStatus, "<--- Northern Status");

  let picadillyStatus =
    props.state.picadillyData[0].lineStatuses[0].statusSeverityDescription;

  console.log(picadillyStatus, "<--- Picadilly Status");

  let victoriaStatus =
    props.state.victoriaData[0].lineStatuses[0].statusSeverityDescription;

  console.log(victoriaStatus, "<--- Victoria Status");

  let waterlooStatus =
    props.state.waterlooData[0].lineStatuses[0].statusSeverityDescription;

  console.log(waterlooStatus, "<--- Waterloo Status");

  console.log("render tube line table");
  return (
    <table>
      <thead>
        <tr>
          <th>Line</th>
          <th>Status</th>
          <th>View More</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bakerloo">Bakerloo</td>
          <td>{bakerlooStatus}</td>

          <td>View More</td>
        </tr>
        <tr>
          <td className="central">Central</td>
          <td>{centralStatus}</td>

          <td>View More</td>
        </tr>
        <tr>
          <td className="circle">Circle</td>

          <td>{circleStatus}</td>
          <td>View More</td>
        </tr>
        <tr>
          <td className="district">District</td>

          <td>{districtStatus}</td>
          <td>View More</td>
        </tr>
        <tr>
          <td className="hammersmith_and_city">Hammersmith & City</td>
          <td>{hammersmithStatus}</td>

          <td>View More</td>
        </tr>
        <tr>
          <td className="jubilee">Jubilee</td>

          <td>{jubileeStatus}</td>
          <td>View More</td>
        </tr>
        <tr>
          <td className="metropolitan">Metropolitan</td>

          <td>{metropolitanStatus}</td>
          <td>View More</td>
        </tr>
        <tr>
          <td className="northern">Northern</td>
          <td>Part Closure</td>

          <td
            className={
              northernStatus !== "Good Service" ? "service-disruption" : null
            }
          >
            {northernStatus}
          </td>
          <td>
            <Link
              to="/traveldetails"
              componentDidMount={props.componentDidMount}
            >
              View More
            </Link>
          </td>
        </tr>
        <tr>
          <td className="piccadilly">Piccadilly</td>

          <td
            className={
              picadillyStatus !== "Good Service" ? "service-disruption" : null
            }
          >
            {picadillyStatus}
          </td>
          <td>View More</td>
        </tr>
        <tr>
          <td className="victoria">Victoria</td>
          <td>{victoriaStatus}</td>

          <td>View More</td>
        </tr>
        <tr>
          <td className="waterloo_and_city">Waterloo & City</td>
          <td>{waterlooStatus}</td>
          <td>View More</td>
        </tr>
      </tbody>
    </table>
  );
}
export default TubeLineTable;
