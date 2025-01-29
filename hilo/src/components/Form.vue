<template>

    <form @submit.prevent="next" class="flight-school-connect-form">

        <Steps :step="step" />
        
        <component
            :is="current"
            :title="$global.formatTitle(current)"
            :form="form"
            @onNext="next"
            @showModal="showAddModal"
            @populate="handleAdd"
            :flightSchools="flightSchools"
        />

    </form>

    <PortalPopup v-if="showModal" overlayColor="rgba(113, 113, 113, 0.3)" placement="Centered" :onOutsideClick="closeAddFlightSchool">
        <AddFlightSchool @onClose="closeAddFlightSchool" @onSubmit="handleAdd" />
    </PortalPopup>
</template>

<script>
import Steps from './Steps.vue';
import PortalPopup from "./PortalPopup.vue";
import AddFlightSchool from "./AddFlightSchool.vue";
import FlightSchoolConnect from "./Steps/FlightSchoolConnect.vue";
import MedicalQuestions from './Steps/MedicalQuestions.vue';
import FinancingOptions from './Steps/FinancingOptions.vue';
import LenderConnections from './Steps/LenderConnections.vue';

export default {
    components: { Steps, AddFlightSchool, PortalPopup, FlightSchoolConnect, MedicalQuestions, FinancingOptions, LenderConnections },
    data() {
        return {
            step: 3,
            form: {},
            showModal: false,
            flightSchools: []
        };
    },
    computed: {
        current() {
            const components = {
                3: 'FlightSchoolConnect',
                4: 'MedicalQuestions',
                5: 'FinancingOptions',
                6: 'LenderConnections'
            };
            return components[this.step] || 'FlightSchoolConnect';
        }
    },
    created() {
        ["isConnected", "gender", "medicalType", "localAME", "paymentType", "loanAmount", "coSignerRelationship"]
            .forEach((key) => this.form[key] = false);
    },
    methods: {
        showAddModal() {
            this.showModal = true;
        },
        next() {
            if(this.step > 5) {
                console.log("this.form :>> ", this.form);
                return;
            };
            this.step++;
        },
        handleAdd(form, isAdd = true) {
            Object.keys(form).forEach(key => {
                this.form[key] = form[key];
            });
            if (isAdd) this.flightSchools.push(form);
        },
        closeAddFlightSchool() {
            this.showModal = false;
        }
    }
}
</script>

<style>
.flight-school-connect-form {
    font-family: Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    max-width: 700px;
    gap: 1rem;
    margin: 0 auto;
    padding: 3rem 7rem;
    background-color: var(--color-background);
    z-index: 999;
}
.flight-school-connect-form h2 {
    font-weight: bold;
    font-size: 1.7rem;
}
.form-group h3 {
    font-weight: bold;
    font-size: 1.2rem;
}
.form-group.description {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.form-group p {
    font-size: 12px;
    line-height: 17px;
}

.search-results {
  position: absolute;
  top: 65px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  z-index: 1;
}
.search-results ul {
  padding: 0;
  overflow-y: auto;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  font-size: 13px;
}
.search-results ul li {
  list-style: none;
  padding: 0.5rem 1rem;
  transition: 0.2s ease-in-out;
}
.search-options, .searchOptions {
  cursor: pointer;
}
.search-options:hover {
  background: #ececec;
}
</style>
