<script>
import { Bar } from "vue-chartjs";

const setDegreeCelsius = (value, index, values) => {
    return `${value}円`;
};

export default {
    extends: Bar,
    name: "chart",
    data() {
        return {
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June"
                ],
                datasets: [
                    {
                        label: "Bar Dataset",
                        borderWidth: 1,
                        data: [
                            50000,
                            20000,
                            30000,
                            40000,
                            50000,
                            30000,
                            30000,
                            30000,
                            30000,
                            30000,
                            30000,
                            30000
                        ],
                        backgroundColor: [
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)"
                        ],
                        borderColor: [
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(54, 162, 235, 1)"
                        ],
                        borderWidth: 1
                    }
                    // {
                    //     label: "Line Dataset",
                    //     data: [10, 50, 20, 30, 30, 40],
                    //     borderColor: "#CFD8DC",
                    //     fill: false,
                    //     type: "line",
                    //     lineTension: 0.3
                    // }
                ]
            },
            options: {
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: "月"
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                stepSize: 10000,
                                callback: function(value, index, values) {
                                    return setDegreeCelsius(
                                        value,
                                        index,
                                        values
                                    );
                                }
                            }
                        }
                    ]
                }
            }
        };
    },
    mounted() {
        (this.data.labels = [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ]),
            (this.data.datasets[0].label = "残高"),
            this.renderChart(this.data, this.options);
    }
};
</script>
