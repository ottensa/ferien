const heatmap = (el) => {
    return {
        _element: document.querySelector(el),

        _colors: [
            '#ebedf0',
            '#c6e48b',
            '#acdb8a',
            '#94d189',
            '#7cc78a',
            '#65bc8b',
            '#4fb18c',
            '#39a68c',
            '#239a8c'
        ],

        init: function() {
            const self = this;

            const header_row = document.createElement('div')
            header_row.classList.add('month')
            for (let i=0; i<=31; i++) {
                const field = document.createElement('div');
                field.innerHTML = (i===0) ? '&nbsp;' : i;
                field.className = (i===0) ? 'month-label' : 'day-label';
                header_row.append(field);
            }

            self._element.append(header_row);


            for (let m=0; m<12; m++) {
                let month_row = document.createElement('div');
                month_row.className = 'month';

                let day = new Date(year, m, 1);

                let field = document.createElement('div');
                field.innerHTML = day.toLocaleDateString('de-de', {month:"long"});
                field.className = 'month-label';
                month_row.append(field)

                do {
                    //const value = days[day.dayOfYear()];
                    //const color_index = Math.ceil(value / 4) - 1

                    let field = document.createElement('div');
                    field.id = day.iso();
                    field.className = 'day';
                    field.style.backgroundColor = self._colors[0];
                    month_row.append(field)
                } while(day.addDays(1).getMonth()===m)

                self._element.append(month_row);
            }

            return self;
        },

        render: function(data) {
            const self = this;

            self._element.querySelectorAll('.day').forEach((el, idx) => {
                const value = data[idx];
                const color_index = Math.ceil(value / 4);
                el.style.backgroundColor = self._colors[color_index];
                //console.log(idx, value, color_index);
            });
            return self;
        }
    }
}