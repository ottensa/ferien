function initHeatMapData(year) {
    const length = new Date(year, 11, 31).dayOfYear() + 1;
    const days = Array(length).fill(0);

    for (let i=0; i<holidays.length; i++) {
        let record = holidays[i]
        const start_date = new Date(record.start);
        const end_date = new Date(record.end);

        if (start_date.getFullYear() !== year && end_date.getFullYear() !== year) {
            continue;
        }

        const start = (start_date.getFullYear() < year) ? 0 : start_date.dayOfYear();
        const end = (end_date.getFullYear() > year) ? days.length : end_date.dayOfYear();

        for(let j=start;j < end; j++) {
            days[j]++;
        }
    }

    return days;
}

const years = new Set();
holidays.forEach(h => {
    years.add(new Date(h.start).getFullYear());
});

let year = new Date().getFullYear();
year = (years.has(year)) ? year : years.values().next().value;
let days = initHeatMapData(year);

// init year selector

const s = selector('.select').init(years, year);

const h = heatmap('.heatmap').init();
h.render(days);

s.onChange(function (new_value) {
    days = initHeatMapData(parseInt(new_value));
    h.render(days)
});