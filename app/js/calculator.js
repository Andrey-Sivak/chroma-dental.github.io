function Calculator(calculatorID) {
    const calculator = document.getElementById(calculatorID);
    if( !calculator ) {
        return;
    }

    let data = {
        age: null,
        problem: null
    };

    const calculatorItems = [...document.querySelectorAll( '.calculator__main_item' )];
    const calculatorItemsLists = [...document.querySelectorAll('.calculator__list')];
    const btn = document.querySelector('.calculator__btn');

    addWideClass( calculatorItems );
    addActiveClass( calculatorItemsLists );
    sendData( btn, calculatorItemsLists );

    function addActiveClass( arr ) {

        arr.forEach( function (item) {

            const elems = [...item.children];
            elems.forEach( function (el) {

                el.addEventListener('click', function(e) {

                    e.preventDefault();
                    let target = this;

                    this.classList.toggle('active');
                    elems.forEach( function (elem) {
                        if( elem !== target && elem.classList.contains('active') ) {
                            elem.classList.remove('active');
                        }
                    })
                })
            })
        })
    }

    function addWideClass( items ) {

        const normalCalculatorItems = countItems( items ).normal;
        const wideCalculatorItems = countItems( items ).wide;

        items.forEach( function (item, i) {
            if( !wideCalculatorItems ) {
                return;
            }

            if( i >= normalCalculatorItems ) {
                item.classList.add('wide');
            }
        });
    }

    function countItems( arr ) {
        const divider = 3;
        const itemsLength = arr.length;
        const divide = itemsLength % divider;
        let wideItems = null;
        let normalItems = null;
        if( !divide ) {
            wideItems = 0;
            normalItems = itemsLength;
        } else {
            if( divide === 1 ) {
                wideItems = 4;
                normalItems = itemsLength - 4;
            } else if( divide === 2 ) {
                wideItems = 2;
                normalItems = itemsLength - 2;
            }
        }

        return {
            wide: wideItems,
            normal: normalItems
        };
    }
    
    function collectData( arr ) {
        arr.forEach( function (item) {

            const elems = [...item.children];

            elems.forEach(function (el) {
                if( el.classList.contains('active') ) {
                    if ( el.dataset.age ) {
                        data.age = el.dataset.age;
                    } else if ( el.dataset.problem ) {
                        data.problem = el.dataset.problem;
                    }
                }
            })
        })
    }

    function checkErrors( data ) {

        if ( !data.age && !data.problem ) {
            createErrorMessage( '*Please select your age and problem', calculator);
            return false;
        } else if ( !data.age && data.problem ) {
            createErrorMessage( '*Please select your age', calculator);
            return false;
        } else if ( !data.problem && data.age ) {
            createErrorMessage( '*Please select your problem', calculator);
            return false;
        } else {
            return true;
        }
    }

    function createErrorMessage( message, wrap ) {
        const wrapper = wrap.getElementsByClassName('calculator__wrap')[0];

        if( wrap.getElementsByClassName('calculator__warning')[0] ) {
            const warning = wrap.getElementsByClassName('calculator__warning')[0];
            warning.innerHTML = message;
        } else {
            const warnMessage = document.createElement('p');
            warnMessage.classList.add('calculator__warning');
            warnMessage.innerHTML = message;
            wrapper.appendChild(warnMessage);
        }
    }

    function sendData( btn, arr ) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            data.age = null;
            data.problem = null;

            collectData(arr);

            if ( checkErrors(data) ) {
                const link = btn.getAttribute('href');
                localStorage.setItem('age', data.age);
                localStorage.setItem('problem', data.problem);
                window.location.href = link;
            }
        })
    }
}

export { Calculator };