import React from "react";
import { Link } from "react-router-dom";

function TubeLineDetailsPage(props) {
  console.log(props, "props on DETAILS PAGE");
  return (
    <div className="tube_line_details_page_container">
      <main>
        <h1>Live Service Updates</h1>

        <section>
          <p>Updated 23/01/2019: 12.18pm </p>
          <p>
            Central Line: No service between White City and Liverpool Street
            while the emergency services deal with a casualty on the track.
            Tickets valid on local buses. Minor delays on the rest of the line.
          </p>
          {/* <button>Go Back</button>  */}
          <Link to="/travel">
            {" "}
            <button>Way Out </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default TubeLineDetailsPage;
