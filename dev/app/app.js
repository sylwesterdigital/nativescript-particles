import Vue from "nativescript-vue";
import Home from "./components/Home";

/* register this way */

Vue.registerElement("ParticleEmitter", () => require("nativescript-particle-emitter").ParticleEmitter);

Vue.config.silent = (TNS_ENV === 'production');


new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
