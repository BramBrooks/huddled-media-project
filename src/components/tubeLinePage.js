import React, { Component } from "react";
import * as api from "../api";
import TubeLineTable from "../components/tubeLineTable";

class TubeLinePage extends Component {
  state = {
    bakerlooData: [],
    centralData: [],
    circleData: [],
    districtData: [],
    hammersmithData: [],
    jubileeData: [],
    metropolitanData: [],
    northernData: [],
    picadillyData: [],
    victoriaData: [],
    waterlooData: [],
    isLoading: true,
  };

  componentDidMount() {
    console.log("mounting");
    this.fetchBakerlooContent();
    this.fetchCentralContent();
    this.fetchCircleContent();
    this.fetchDistrictContent();
    this.fetchHammersmithContent();
    this.fetchJubileeContent();
    this.fetchMetropolitanContent();
    this.fetchNorthernContent();
    this.fetchPicadillyContent();
    this.fetchVictoriaContent();
    this.fetchWaterlooContent();
    console.log("all fetch requests invoked ");
  }

  fetchBakerlooContent = () => {
    api.getBakerlooData().then((statusData) => {
      this.setState({ bakerlooData: [statusData], isLoading: false });
    });
  };

  fetchCentralContent = () => {
    api.getCentralData().then((statusData) => {
      this.setState({ centralData: [statusData] });
    });
  };

  fetchCircleContent = () => {
    api.getCircleData().then((statusData) => {
      this.setState({ circleData: [statusData] });
    });
  };

  fetchDistrictContent = () => {
    api.getDistrictData().then((statusData) => {
      this.setState({ districtData: [statusData] });
    });
  };

  fetchHammersmithContent = () => {
    api.getHammersmithData().then((statusData) => {
      this.setState({ hammersmithData: [statusData] });
    });
  };

  fetchJubileeContent = () => {
    api.getJubileeData().then((statusData) => {
      this.setState({ jubileeData: [statusData] });
    });
  };

  fetchMetropolitanContent = () => {
    api.getMetropolitanData().then((statusData) => {
      this.setState({ metropolitanData: [statusData] });
    });
  };

  fetchNorthernContent = () => {
    api.getNorthernData().then((statusData) => {
      this.setState({ northernData: [statusData] });
    });
  };

  fetchPicadillyContent = () => {
    api.getPicadillyData().then((statusData) => {
      this.setState({ picadillyData: [statusData] });
    });
  };

  fetchVictoriaContent = () => {
    api.getVictoriaData().then((statusData) => {
      this.setState({ victoriaData: [statusData] });
    });
  };

  fetchWaterlooContent = () => {
    api.getWaterlooData().then((statusData) => {
      this.setState({ waterlooData: [statusData], isLoading: false });
    });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      console.log("loading...");
      return <p>LOADING...</p>;
    }

    console.log("render tube line page");
    return (
      <div className="tube_lines_page_container">
        <h1>Live Service Updates</h1>
        <p>Updated 23/01/2019: 12.18pm </p>
        <TubeLineTable state={this.state} />
      </div>
    );
  }
}

export default TubeLinePage;
