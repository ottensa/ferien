const selector = (el) => {
    return {
        _element: document.querySelector(el),

        _event: function (new_value){},

        init: function (options, selected) {
            const self = this;
            const btn = document.createElement('button');
            const value = document.createElement('span');
            value.className = 'selected-value';
            value.innerText = selected;

            const arrow = document.createElement('span');
            arrow.className = 'arrow';
            btn.append(value);
            btn.append(arrow);

            self._element.append(btn);

            const list = document.createElement('ul');
            options.forEach(option => {
                const li = document.createElement('li');
                li.innerText = option;
                li.addEventListener('click', function () {
                    value.innerText = this.innerText;
                    list.style.display = 'none';
                    self._event(this.innerText);
                });
                list.append(li);
            });

            self._element.append(list);

            btn.addEventListener('click', function () {
                const state = list.style.display;
                if (state === 'block') {
                    list.style.display = 'none';
                } else {
                    list.style.display = 'block';
                }
            });

            return this;
        },

        onChange: function (callback) {
            this._event = callback;
            return this;
        },
    }
}