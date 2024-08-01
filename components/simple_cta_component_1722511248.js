/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722511248", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-12">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Unlock the Power of Blockchain Analytics</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-pink-100 text-xl">Gain Valuable Insights into Emerging Blockchain Data</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-800 bg-white bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-300 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105">Explore Blockchain Analytics</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
