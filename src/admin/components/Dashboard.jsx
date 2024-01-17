import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { dashboardData } from '../utils'
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Users"],
    ["2014", 1000],
    ["2015", 1170],
    ["2016", 660],
    ["2017", 1030],
    ["2018", 660],
    ["2019", 1030],
    ["2020", 660],
    ["2021", 1030],
];

export const options = {
    title: "",
    colors: ["#104C40"],
    legend: { position: 'none' }, // Add this line to remove the legend
};

export const pieData = [
    ["Task", "Hours per Day"],
    ["2014", 1],
    ["2015", 11],
    ["2016", 6],
    ["2017", 10],
    ["2018", 6],
    ["2019", 10],
    ["2020", 6],
    ["2021", 10],
];



const Dashboard = () => {
    return (
        <Container className='admin-layout-main'>
            <Row >
                <h3>Dashboard</h3>
            </Row>
            <Row>
                <div className='dashboard-grid-container'>

                    {dashboardData.map((item, index) => (
                        <div className='admin-card' xs={12} md={4} lg={3}>
                            <div className='admin-card-main'>
                                <div className='card-verticle-line'>{item?.title}
                                </div>
                                <div className='dashboard-count'>{item?.count}</div>

                            </div>
                        </div>
                    ))}
                </div>
            </Row>
            <Row>
                <div className='dashboard-grid-chart'>

                    <div className='chart-card' xs={12} md={4} lg={3}>
                        <div className='admin-card-main'>
                            <div className='card-verticle-line'>{'Users'}
                            </div>
                            <div className='dashboard-count'>
                                <Chart
                                    chartType="Bar"
                                    width="400px"
                                    height="400px"
                                    data={data}
                                    options={options}
                                />
                            </div>

                        </div>
                    </div>
                    <div className='chart-card' xs={12} md={4} lg={3}>
                        <div className='admin-card-main'>
                            <div className='card-verticle-line'>{'Posts'}
                            </div>
                            <div className='dashboard-count'>
                                <Chart
                                    chartType="PieChart"
                                    width="400px"
                                    height="400px"
                                    data={pieData}
                                    options={options}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </Row>
        </Container>
    )
}

export default Dashboard