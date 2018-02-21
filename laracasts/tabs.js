Vue.component('tabs', {
    template: `
    <div>
    <div class="tabs">
    <ul>
        <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
        <a :href="tab.url" @click="selectTab(tab, $event)">{{ tab.name }}</a>
        
        </li>
    </ul>
</div>

<div class="tabs-info">
<slot></slot>
</div>

</div>
    `,
    data() {
        return {
            selected: false,
            tabs: [],
        };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab, e) {
            this.tabs.forEach(tab => (tab.isActive = tab.name === selectedTab.name));
            this.$emit('selecting', e);
        },
    },
});

Vue.component('tab', {
    template: `
    <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: {
            required: true,
        },
        selected: {
            default: false,
        },
    },
    data() {
        return {
            isActive: false,
        };
    },
    mounted() {
        this.isActive = this.selected;
    },
    computed: {
        url() {
            return '#' + this.name.replace(/ /g, '-').toLowerCase();
        },
    },
});

let tabs = new Vue({
    el: '#tabs',
    data: {
        clickedTab: false,
        tabName: '',
    },
    methods: {
        tabAnnounce(e) {
            this.clickedTab = true;
            this.tabName = e.target.text.toUpperCase();
        },
    },
});
