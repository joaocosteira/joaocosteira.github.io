class Item {

    constructor(el) {

        this.DOM = {el: el};
        this.DOM.thumb = this.DOM.el.querySelector('.thumb');
        
        this.DOM.thumbSVG = this.DOM.thumb.querySelector('.distort');
        this.DOM.SVGFilter = this.DOM.thumbSVG.querySelector('filter');
        this.DOM.SVGImage = this.DOM.thumbSVG.querySelector('image.distort__img');
        gsap.set(this.DOM.SVGImage, {transformOrigin: '50% 50%'});
        
        this.filterType = this.DOM.SVGFilter.dataset.type;
        this.DOM.feTurbulence = this.DOM.SVGFilter.querySelector('feTurbulence');
        this.DOM.feDisplacementMap = this.DOM.SVGFilter.querySelector('feDisplacementMap');
        
        this.primitiveValues = this.filterType === 'turbulence' ? {baseFrequency: 0} : {scale: 0};

        this.createHoverTimeline();

        this.initScrollEvent(); //Initialize Effect On Hover
        this.initHoverEvents(); //Initialize Effect on Hover

    }
    
    initScrollEvent(){
        const scrollCallback = (entries) => {
            entries.map( e => {
                if(e.isIntersecting){
                    setTimeout(()=>{
                        this.tl.restart();
                    },500);
                }
            })

        }
        const options = {
            root: null,
            threshold: .5 
        }
        var observer = new IntersectionObserver(scrollCallback, options);
        observer.observe( this.DOM.el )
    }

    initHoverEvents() {
        this.onMouseEnterFn = () => this.mouseEnter();
        this.DOM.thumb.addEventListener('mouseenter', this.onMouseEnterFn);
        this.onMouseLeaveFn = () => this.mouseLeave();
        this.DOM.thumb.addEventListener('mouseleave', this.onMouseLeaveFn);
    }

    updateFilterValues() {
        this[this.filterType === 'turbulence' ? 'updateTurbulenceBaseFrequency' : 'updateDisplacementMapScale']();
    }
    updateTurbulenceBaseFrequency(val = this.primitiveValues.baseFrequency) {
        this.DOM.feTurbulence.setAttribute('baseFrequency', val);
    }
    updateDisplacementMapScale(val = this.primitiveValues.scale) {
        this.DOM.feDisplacementMap.setAttribute('scale', val);
    }

    //Timeline Effect
    createHoverTimeline() {
        this.tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.7,
                ease: 'power2'
            },
            onUpdate: () => this.updateFilterValues(),
            onReverseComplete: () => {
                if ( this.filterType === 'turbulence' ) {
                    this.primitiveValues.baseFrequency = 0;
                    this.updateFilterValues();
                }
            }
        });

        if ( this.filterType === 'turbulence' ) {
            this.tl.to(this.primitiveValues, { 
                startAt: {baseFrequency: 0.09},
                baseFrequency: 0
            }, 0);
        }
        else {
            this.tl.to(this.primitiveValues, { 
                startAt: {scale: 0},
                scale: 150
            }, 0);
        }
        
        if ( navigator.userAgent.indexOf('Firefox') == -1 ) {
            this.tl.to(this.DOM.SVGImage, {
                scale: 1.2,
            }, 0)
        }
    }

    // Hover Effects:
    mouseEnter() {
        this.tl.restart();
    }

    mouseLeave() {
        this.tl.reverse();
    }
}

//Create a single Item.
const item = document.getElementById('tobe_distorted');
const itemObj  =  new Item(item);

//If I want to create a bunch of images with the distortion effect
//[...document.querySelectorAll('.tobe_distorted')].forEach(item => new Item(item));