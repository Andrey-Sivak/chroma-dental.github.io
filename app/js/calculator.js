function Calculator(calculatorID) {
    const calculator = document.getElementById(calculatorID);
    if( !calculator ) {
        return;
    }

    const calculatorItems = [...document.querySelectorAll( '.calculator__main_item' )];
    const calculatorItemsLists = [...document.querySelectorAll('.calculator__list')];

    addWideClass( calculatorItems );
    addActiveClass( calculatorItemsLists );

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

    function countItems(arr) {
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
}

export { Calculator };