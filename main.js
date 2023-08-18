const dataSkillsChart = {
    labels: ["Data base", "Web technology", "Algorithm", "Python", "Computer engieneer"],
    datasets: [{
        data: [66, 60, 44, 78, 46],
        backgroundColor: ["#3A8BBB", "#C24F5D", "#9FDD8D", "#D07E42", "#625A95"]
    }]
};

const dataGpaRadarChart = {
    labels: ['ปี1 เทอม 1', 'ปี1 เทอม 2', 'ปี2 เทอม 1'],
    datasets: [{
        label: "GPA",
        data: [3.33, 3.00, 3.5],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointBackgroundColor: "#FF6384",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#FF6384"
    }]
};

const dataFitnessChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: "บุคลิกภาพ",
        data: [60, 65, 70, 72, 75, 80],
        borderColor: "red",
        fill: false
    }]
};

const dataIncomeExpenseChart = {
    labels: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน'],
    datasets: [{
        label: "รายรับ",
        data: [10000, 12000, 8000, 15000, 20000, 18000],
        backgroundColor: "#36A2EB",
        borderWidth: 1
    }, {
        label: "รายจ่าย",
        data: [8000, 9000, 7000, 11000, 15000, 13000],
        backgroundColor: "#FF6384",
        borderWidth: 1
    }]
};
const ctxSkillsChart = document.getElementById("skillsChart").getContext("2d");
new Chart(ctxSkillsChart, {
    type: "pie",
    data: dataSkillsChart
});

const ctxGpaRadarChart = document.getElementById("gpaRadarChart").getContext("2d");
new Chart(ctxGpaRadarChart, {
    type: "radar",
    data: dataGpaRadarChart,
    options: {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 4 
            }
        }
    }
});
const ctxFitnessChart = document.getElementById("fitnessChart").getContext("2d");
new Chart(ctxFitnessChart, {
    type: "line",
    data: dataFitnessChart
});
const ctxIncomeExpenseChart = document.getElementById("incomeExpenseChart").getContext("2d");
new Chart(ctxIncomeExpenseChart, {
    type: "bar",
    data: dataIncomeExpenseChart,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
