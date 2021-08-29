<script>
import { Doughnut } from "vue-chartjs";

const setDegreeCelsius = (value, index, values) => {
    return `${value}円`;
};

export default {
    extends: Doughnut,
    name: "chart",
    data() {
        return {
            data: {
                labels: [
                    "食費",
                    "住居費",
                    "交際費",
                    "光熱水道費",
                    "保険料",
                    "通信費"
                ],
                datasets: [
                    {
                        backgroundColor: [
                            "#BB5179",
                            "#FAFF67",
                            "#58A27C",
                            "#3C00FF",
                            "#BB5179",
                            "#FAFF67"
                        ],
                        data: [38, 31, 21, 10, 31, 21]
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: "費用 割合"
                }
            }
        };
    },
    mounted() {
        // (this.data.labels = [
        //     "1月",
        //     "2月",
        //     "3月",
        //     "4月",
        //     "5月",
        //     "6月",
        //     "7月",
        //     "8月",
        //     "9月",
        //     "10月",
        //     "11月",
        //     "12月"
        // ]),
        //     (this.data.datasets[0].label = "残高"),
        this.renderChart(this.data, this.options);
    }
};
</script>
